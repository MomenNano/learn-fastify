const mongoose = require('mongoose')

const User = require('../../database/schema/user')

async function registerHandler (req, res) {
  try {
    const user = await User.create({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    })

    console.log(user)
    return user
  } catch (error) {
    console.log(error)
  }
}

module.exports = registerHandler
