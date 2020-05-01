const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  body: String,
  likes: { type: Number, default: 0 },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Tweet', tweetSchema)
