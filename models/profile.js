import mongoose from 'mongoose'

const Schema = mongoose.Schema

const favoritePlayerSchema = new Schema({
  name: String,
  sport: String, 
  team: String, 
  age: Number
}, {
  timestamps: true
})

const favoriteTeamSchema = new Schema({
  name: String, 
  sport: String, 
  achievements: String, 
  topPlayers: String,
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  favoriteplayer: [favoritePlayerSchema],
  favoriteteam: [favoriteTeamSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
