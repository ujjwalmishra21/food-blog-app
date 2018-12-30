const express = require('express')
const app = express()
const hbs = require('hbs')
const _ = require('lodash')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const multer = require('multer')
const storage = multer.diskStorage({
  destination:function(req, file, callback) {
    callback(null, './uploads/')
  },
  filename:function (req, file, callback) {
    callback(null, new Date().toLocaleDateString() + '--' + file.originalname)
  }
})
const fileFilter = (req, file, callback)=>{
  if(file.mimetype==='image/jpeg' || file.mimetype==='image/png'){
    callback(null, true)
  }else{
    callback(null, false)
  }
}
const upload = multer({storage,
  limits:{
  fileSize: 1024*1024*5
},
fileFilter
})
// var API_KEY = '10606262-677d249d95f5e20d22592a1bc'

// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');

var {User} = require('./models/user')
var {Blogs}  = require('./models/blogs')
var {Recipe} = require('./models/recipe')
var {mongoose} = require('./db/mongoose')
var {authenticate} = require('./middleware/authenticate')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser())


app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getPostDuration',(time)=>{
  var t = (Date.now()) - time;
  var time = (t/1000/60);
  if(time < 60){
    return time
  }else{
    var hr = time/60;
    if(hr < 24){
      return hr 
    }else{
      return time;
    }
  }
})

app.use('/uploads',express.static('uploads'))

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
      // res.header('x-auth',token).render('homepage/index',{user})
      
      res.header('x-auth',token).cookie('x-auth',token).render('homepage/index',{user})
    },(e)=>{
      res.status(404).send(`<h1>404: Page not found</h1>`)
    })
  },(e)=>{
    res.status(401).send('<script>alert("Invalid user")</script>')
  })
})

app.get('/profile',authenticate,(req,res)=>{
  
  Recipe.find({_creator:req.user._id}).then((recipe)=>{
    Blogs.find({_creator:req.user._id}).then((blogs)=>{
      var user = _.pick(req.user,['firstname','lastname','dob'])
      
      
      res.render('profile/index',{recipe,blogs,user})
    })
  }).catch((e)=>{
    res.status(404).send(`<h1>404: Page not found</h1>`)
  })
  
})
app.get('/recipe',authenticate,(req,res)=>{
  
  Recipe.find({_creator:req.user._id}).then((recipe)=>{
    var user = _.pick(req.user,['firstname','lastname','dob'])
      
    res.render('recipe/index',{recipe,user})
  }).catch((e)=>{
    res.status(404).send(`<h1>404: Page not found</h1>`)
  })
})

app.get('/blogs',authenticate,(req,res)=>{

  Blogs.find({_creator:req.user._id}).then((blogs)=>{
    var user = _.pick(req.user,['firstname','lastname','dob'])

    res.render('blogs/index',{blogs,user})
  }).catch((e)=>{
    res.status(404).send(`<h1>404: Page not found</h1>`)
  })
})


app.post('/blogs',authenticate,(req,res)=>{
  console.log(req)
  var body = _.pick(req.body,['topic','short_description','description'])
  body._creator = req.user._id;
  body.post_by = req.user.firstname
  // body.post_on = Date.now()
  console.log(body.topic)
  var blog = new Blogs(body)

  blog.save().then(()=>{
    
    
    
    res.redirect('/blogs')
    
    
  }).catch((e)=>{
    res.status(404).send(`<h1>404: Page not found</h1>`)
  })
  
})

app.post('/recipe',[authenticate, upload.single('image')],(req,res)=>{
  if(req.file === undefined){
    return res.send(`<script>alert('File is unavailable or not supported')</script>`)
    
  }
  
  var body = _.pick(req.body,['recipe_name','short_description','ingredients','procedures'])
  body._creator = req.user._id;
  body.post_by = req.user.firstname;
  body.image = req.file.path;
  // body.post_on = new Date().now()
  var recipe = new Recipe(body)
 
  recipe.save().then(()=>{
    
    res.redirect('/recipe')
    
  }).catch((e)=>{
    res.status(404).send(`<h1>404: Page not found</h1>`)
  })
  
})


app.get('/logout',authenticate,(req,res)=>{
  req.user.removeToken(req.token).then(()=>{
    
    res.redirect('/')
  }).catch((e)=>{
    res.status(404).send(`<h1>404: Page not found</h1>`)
  })
})


app.listen(3232, ()=>{
  console.log('Server started at PORT 3232')
})