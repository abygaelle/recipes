import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema ({
  name: String,
  directions: String,
  ingredients: String,


  owner: {type: Schema.Types.ObjectId, ref: "Profile"}

})

const Recipe = mongoose.model("Recipe", recipeSchema);

export {
  Recipe
}