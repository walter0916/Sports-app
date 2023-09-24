import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profile.js'

const router = Router()

router.get('/:profileId', profilesCtrl.show)
router.get('/:profileId/favoriteplayer', isLoggedIn, profilesCtrl.favoritePlayerForm)
router.get('/:profileId/favoriteteam', isLoggedIn, profilesCtrl.favoriteTeamForm)
router.post('/:profileId/favoriteplayer', isLoggedIn, profilesCtrl.createFavoritePlayer)

export {
  router
}