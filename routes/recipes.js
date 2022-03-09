import { Router } from 'express'
import * as recipesCtrl from "../controllers/recipes.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/recipes
router.get('/', recipesCtrl.index)
router.get('/:id', recipesCtrl.show)

// POST localhost:3000/recipes
router.post("/", isLoggedIn, recipesCtrl.create)
router.get('/new', isLoggedIn, recipesCtrl.new)
router.get('/:id', isLoggedIn, recipesCtrl.show)
router.post("/:id/reviews", isLoggedIn, recipesCtrl.createReview)






export {
  router
}