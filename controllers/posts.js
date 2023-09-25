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

function edit(req, res){
  Post.findById(req.params.postId)
  .then(post => {
    res.render('posts/edit', {
      post,
      title: 'Edit Post'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function show(req, res) {
  Post.findById(req.params.postId)
  .populate('author')
  .populate({
    path: 'replies',
    populate: {
      path: 'author',
    }
  })
  .then(post => {
    res.render('posts/show', {
      post,
      title: 'All replies'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function createReply(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    req.body.author = req.user.profile._id
    post.replies.push(req.body)
    post.save()
    .then(() => {
      res.redirect(`/posts/${req.params.postId}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/posts/${req.params.postId}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/posts/${req.params.postId}`)
  })
}

function update(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    if (post.author.equals(req.user.profile._id)) {
      post.updateOne(req.body)
      .then(() => {
        res.redirect('/posts')
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

function deletePost(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    if (post.author.equals(req.user.profile._id)) {
      post.deleteOne()
      .then(() => {
        res.redirect('/posts')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

export {
  index,
  create,
  show,
  createReply,
  edit,
  update,
  deletePost
}