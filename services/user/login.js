const User = require('../../database/schema/user')

async function registerHandler (req, res) {
  try {
    const user = await User.findOne({
      name: req.body.name,
      password: req.body.password
    })
    // console.log(this)
    const token = this.jwt.sign(user.name)
    console.log(token)
    return user
  } catch (error) {
    console.log(error)
  }
}

module.exports = registerHandler
