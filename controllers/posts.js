import { Post } from "../models/post.js"

function index(req, res) {
  Post.find({})
  .populate('author')
  .then(posts => {
    res.render('posts/index', {
      posts, 
      title: 'all posts'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.author = req.user.profile._id
  Post.create(req.body)
  .then(post => {
    res.redirect('/posts')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

export {
  index,
  create
}