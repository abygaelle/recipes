import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema ({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}

})