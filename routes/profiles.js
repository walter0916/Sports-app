import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profile.js'

const router = Router()

router.get('/', profilesCtrl.index)

export {
  router
}