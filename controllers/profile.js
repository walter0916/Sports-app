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
    res.render('favoriteplayer/edit', {
      profile,
      title: 'edit player'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profile/${req.user.profile._id}`)
  })
}

export {
  show,
  favoritePlayerForm,
  createFavoritePlayer,
  favoriteTeamForm,
  createFavoriteTeam,
  editFavoritePlayer
}