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
    res.render('recipes/show', {
      recipe,
      title: "Recipe Details"
    })
  })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect("/recipes")
  // })
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

function edit(req, res) {
  Recipe.findById(req.params.id)
  .then(recipe => {
    res.render('recipes/edit', {
      recipe,
      title: "Edit Recipe"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}

function update(req, res) {
  Recipe.findById(req.params.id)
  .then(recipe => {
    if (recipe.owner.equals(req.user.profile._id)) {
      recipe.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/recipes/${recipe._id}`)
      })
    } 
    else {
      throw new Error ("Sorry not authorized")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/recipes`)
  })
}

function deleteRecipe(req, res) {
  Recipe.findById(req.params.id)
  .then(recipe => {
    if (recipe.owner.equals(req.user.profile._id)) {
      recipe.delete()
      .then(() => {
        res.redirect('/recipes')
      })
    } 
    else {
      throw new Error ("Sorry can't delete someones recipe!")
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}


export {
  index,
  create,
  show,
  newRecipe as new,
  createReview,
  edit,
  update,
  deleteRecipe as delete,
}