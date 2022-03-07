import { Router } from 'express'
import * as recipesCtrl from "../controllers/recipes.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/recipes
router.get('/', recipesCtrl.index)
router.get('/', recipesCtrl.show)
// POST localhost:3000/employees
router.post("/", isLoggedIn, employeesCtrl.create)





export {
  router
}