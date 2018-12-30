const {User} = require('../models/user')

var authenticate = (req, res, next) => {
  // console.log(req.body)
  var token = req.cookies['x-auth'];
  
  User.findByToken(token).then((user)=>{
    
    if(!user){
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();

  }).catch((e)=>{
    res.status(401).send(`<h1>401: Unauthorized Access</h1>`);
  })
}


module.exports = {
  authenticate
}