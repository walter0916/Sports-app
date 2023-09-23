import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as postCtrl from '../controllers/posts.js'

const router = Router()

router.get('/', postCtrl.index)
router.get('/:postId', postCtrl.show)
router.post('/', isLoggedIn, postCtrl.create)

export {
  router
}