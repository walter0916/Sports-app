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

export {
  show,
  favoritePlayerForm
}