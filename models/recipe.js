const {mongoose} = require('./../db/mongoose')

var recipeSchema = new mongoose.Schema({
  recipe_name:{
    type:String,
    required:true

  },
  short_description:{
    type:String,
    required:true

  },
  ingredients:{
    type:String,
    required:true
  },
  procedures:{
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
  },
  image:{
    type:String,
    required:true

  }
  // post_at:{
  //   type:Number
  // }
})

var Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = {
  Recipe
}