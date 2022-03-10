import { Recipe } from '../models/recipe.js'

function index(req, res) {
  Recipe.find({})
  .populate("owner")
  .then(recipes => {
    res.render('recipes/index', {
      recipes,
      title: "All Recipe"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/recipes")
  })
}

function show(req, res) {
  Recipe.findById(req.params.id)
  .populate("owner")
  .then(recipe => {
    res.render('recipe/show', {
      recipe,
      title: "Recipe Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/recipes")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Recipe.create(req.body)
  .then(recipe => {
    res.redirect('/recipes')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}

function newRecipe (req, res) {
  res.render('recipes/new', {
    title: "Add Recipe",
  })
}
function createReview(req, res) {
  Food.findById(req.params.id, function(err, food) {
    food.reviews.push(req.body)
    food.save(function(err) {
      res.redirect(`/foods/${food._id}`)
    })
  })
}

export {
  index,
  create,
  show,
  newRecipe as new,
  createReview,
}