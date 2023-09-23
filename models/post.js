import mongoose from "mongoose";

const Schema = mongoose.Schema 

const replySchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const postSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  replies: [replySchema]
},{
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}