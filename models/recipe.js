import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const recipeSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  totalTime: {
    type: Number,
    min: 0,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  directions: {
    type: String,
    required: true,
  },

  owner: {
    type: Schema.Types.ObjectId, 
    ref: "Profile"},
  reviews: [reviewSchema],

}, {
  timestamps: true,
})

const Recipe = mongoose.model("Recipe", recipeSchema);

export {
  Recipe
}