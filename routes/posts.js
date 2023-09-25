import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as postCtrl from '../controllers/posts.js'

const router = Router()

router.get('/', postCtrl.index)
router.get('/:postId', postCtrl.show)
router.get('/:postId/edit', isLoggedIn, postCtrl.edit)
router.post('/', isLoggedIn, postCtrl.create)
router.post('/:postId/replies', isLoggedIn, postCtrl.createReply)

export {
  router
}