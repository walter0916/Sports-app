import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profile.js'

const router = Router()

router.get('/:profileId', profilesCtrl.show)
router.get('/:profileId/favoriteplayer', isLoggedIn, profilesCtrl.favoritePlayerForm)
router.get('/:profileId/favoriteteam', isLoggedIn, profilesCtrl.favoriteTeamForm)
router.get('/:profileId/favoriteplayer/:favoriteplayerId/edit', isLoggedIn, profilesCtrl.editFavoritePlayer)
router.get('/:profileId/favoriteteam/:favoriteteamId/edit', isLoggedIn, profilesCtrl.editFavoriteTeam)
router.post('/:profileId/favoriteplayer', isLoggedIn, profilesCtrl.createFavoritePlayer)
router.post('/:profileId/favoriteteam', isLoggedIn, profilesCtrl.createFavoriteTeam)
router.delete('/:profileId/favoriteteam/:favoriteteamId', isLoggedIn, profilesCtrl.deleteTeam)
router.delete('/:profileId/favoriteplayer/:favoriteplayerId', isLoggedIn, profilesCtrl.deletePlayer)
router.put('/:profileId/favoriteplayer/:favoriteplayerId', isLoggedIn, profilesCtrl.updatePlayer)
router.put('/:profileId/favoriteteam/:favoriteteamId', isLoggedIn, profilesCtrl.updateTeam)

export {
  router
}