import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as postCtrl from '../controllers/posts.js'

const router = Router()

router.get('/', postCtrl.index)
router.get('/:postId', postCtrl.show)
router.get('/:postId/edit', isLoggedIn, postCtrl.edit)
router.get('/:postId/replies/:replyId/edit', isLoggedIn, postCtrl.editReply)
router.post('/', isLoggedIn, postCtrl.create)
router.post('/:postId/replies', isLoggedIn, postCtrl.createReply)
router.delete('/:postId', isLoggedIn, postCtrl.deletePost)
router.put('/:postId', isLoggedIn, postCtrl.update)

export {
  router
}