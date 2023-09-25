import { Profile } from "../models/profile.js"

function show(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      profile,
      isSelf,
      title: `${profile.name}'s profile`
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function favoritePlayerForm(req, res) {
    res.render('favoriteplayer/form', {
      title: "New Favorite player"
    })
  .catch(err => {
    console.log(err)
    res.redirect(`/profile/${user.profile._id}`)
  })
}

function favoriteTeamForm(req, res) {
  res.render('favoriteteam/form', {
    title: "New Favorite team"
  })
.catch(err => {
  console.log(err)
  res.redirect(`/profile/${user.profile._id}`)
})
}

function createFavoritePlayer(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.favoriteplayer.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profile/${req.user.profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profile/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profile/${req.user.profile._id}`)
  })
}

function createFavoriteTeam(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.favoriteteam.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profile/${req.user.profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profile/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profile/${req.user.profile._id}`)
  })
}

function editFavoritePlayer(req, res) {
  Profile.findById(req.user.profile._id)
  .then ( profile => {
    const player = profile.favoriteplayer.id(req.params.favoriteplayerId)
    res.render('favoriteplayer/edit', {
      profile,
      player,
      title: 'edit player'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profile/${req.user.profile._id}`)
  })
}

function editFavoriteTeam(req, res) {
  Profile.findById(req.user.profile._id)
  .then ( profile => {
    const team = profile.favoriteteam.id(req.params.favoriteteamId)
    res.render('favoriteteam/edit', {
      profile,
      team,
      title: 'edit team'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profile/${req.user.profile._id}`)
  })
}

function updatePlayer(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    const player = profile.favoriteplayer.id(req.params.favoriteplayerId)
    if (profile._id.equals(req.user.profile._id)){
      player.set(req.body)
      profile.save()
      .then(() => {
        res.redirect(`/profile/${profile._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect(`/profile/${profile._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function updateTeam(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    const team = profile.favoriteteam.id(req.params.favoriteteamId)
    if (profile._id.equals(req.user.profile._id)){
      team.set(req.body)
      profile.save()
      .then(() => {
        res.redirect(`/profile/${profile._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect(`/profile/${profile._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function deleteTeam(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    const team = profile.favoriteteam.id(req.params.favoriteteamId)
    if (profile._id.equals(req.user.profile._id)){
      profile.favoriteteam.remove(team)
      profile.save()
      .then(() => {
        res.redirect(`/profile/${profile._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect(`/profile/${profile._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function deletePlayer(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    const player = profile.favoriteplayer.id(req.params.favoriteplayerId)
    if (profile._id.equals(req.user.profile._id)){
      profile.favoriteplayer.remove(player)
      profile.save()
      .then(() => {
        res.redirect(`/profile/${profile._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect(`/profile/${profile._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

export {
  show,
  favoritePlayerForm,
  createFavoritePlayer,
  favoriteTeamForm,
  createFavoriteTeam,
  editFavoritePlayer,
  updatePlayer,
  editFavoriteTeam,
  updateTeam,
  deleteTeam,
  deletePlayer
}