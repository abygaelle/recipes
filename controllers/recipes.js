import { Profile } from '../models/profile.js'
import { Recipe } from '../models/recipe.js'

function index(req, res) {
  Recipe.find({})
  .then(recipes => {
    res.render('recipes/index', {
      recipes,
      title: "Recipe"
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
  .then(queen => {
    res.redirect('/recipes')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}

function show(req, res) {
  Recipe.findById(req.params.id)
  .populate("owner")
  .then(recipe => {
    console.log(taco)
    res.render('recipe/show', {
      recipe,
      title: "Show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/recipes")
  })
}

export {
  index,
  create,
  show,
}