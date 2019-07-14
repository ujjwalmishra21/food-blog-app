const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL,{
   useNewUrlParser: true,
   useCreateIndex:true,
   useFindAndModify:false
   
  })


module.exports = {
  mongoose
}



