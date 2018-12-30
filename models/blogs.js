const {mongoose} = require("./../db/mongoose")

var blogSchema = new mongoose.Schema({
  topic:{
    type:String,
    required:true

  },
  short_description:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  _creator:{
   type:mongoose.Schema.Types.ObjectId,
   required:true

 },
 post_by:{
  type:String,
  required:true
}
// ,
// post_at:{
//   type:Date,
//   required:true
// }
})

var Blogs = mongoose.model('Blogs', blogSchema)

module.exports = {
  Blogs
}