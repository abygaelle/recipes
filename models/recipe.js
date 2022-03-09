import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 10}
}, {
  timestamps: true
})

const recipeSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  directions: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  delicious: {
    type: Boolean,
    required: true,
  },
  desert: {
    type: Boolean,
    required: true,
  },
  totalTime: {
    type: Number,
    min: 0,
  },
  
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  revies: [reviewSchema],

}, {
  timestamps: true,
})

const Recipe = mongoose.model("Recipe", recipeSchema);

export {
  Recipe
}