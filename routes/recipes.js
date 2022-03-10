import { Router } from 'express'
import * as recipesCtrl from "../controllers/recipes.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/recipes
router.get('/', recipesCtrl.index)

router.get('/new', isLoggedIn, recipesCtrl.new)

router.get('/:id', recipesCtrl.show)

router.get('/:id/edit', isLoggedIn, recipesCtrl.edit)


// POST localhost:3000/recipes
router.post("/", isLoggedIn, recipesCtrl.create)

router.post("/:id/reviews", isLoggedIn, recipesCtrl.createReview)


router.put('/:id', isLoggedIn, recipesCtrl.update)

router.delete('/:id', isLoggedIn, recipesCtrl.delete)


export {
  router
}