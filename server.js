const express = require('express')
const app = express()
const hbs = require('hbs')
const _ = require('lodash')

var {User} = require('./models/user')
var {mongoose} = require('./db/mongoose')
var {authenticate} = require('./middleware/authenticate')

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',express.static(__dirname + '/public/homepage'))

// app.get('/:id',authenticate,(req,res)=>{
//   var id = req.params.id;

//   User.findById(id).then((user)=>{
//     if(!user){
//       return res.status(400).send()
//     }

//     return res.render('homepage/index',{user})
//   }).catch((e)=>{
//     res.status(400).send()
//   })
// })

app.get('/login',(req,res)=>{
  res.render('login/index')
})

app.get('/signup',(req,res)=>{
  res.render('signup/index')
})

app.post('/signup',(req,res)=>{
  var body = _.pick(req.body,['email','password','firstname','lastname','dob'])
  
  var user = new User(body);
  
  user.save().then(()=>{
      res.redirect('/login')
  }).catch((e)=>{
    res.status(400).send(e)
  })
})

app.post('/login', (req,res)=>{
  var body = _.pick(req.body,['email','password']);
  
  User.findByCredentials(body.email, body.password).then((user)=>{
    return user.generateAuthToken().then((token)=>{
      res.header('x-auth',token).render('homepage/index',{user})
    }).catch((e)=>{
      res.status(401).send()
    })
  })
})

app.get('/profile',authenticate,(req,res)=>{
 
  res.header('x-auth',req.body).render('profile/index')
})

app.get('/blogs',authenticate,(req,res)=>{
  res.header('x-auth',req.body).render('blogs/index')
})

app.get('/recipe',authenticate,(req,res)=>{
  res.header('x-auth',req.body).render('recipe/index')
})

app.listen(3232, ()=>{
  console.log('Server started at PORT 3232')
})