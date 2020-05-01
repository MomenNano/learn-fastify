const mongoose = require('mongoose')

const Tweet = require('../../database/schema/tweet')

const registerHandler = async (req, res) => {
  try {
    const tweet = await Tweet.create({
      _id: new mongoose.Types.ObjectId(),
      body: req.body.body,
      owner: req.body.owner
    })

    console.log(tweet)
    return tweet
  } catch (error) {
    console.log(error)
  }
}

module.exports = registerHandler
