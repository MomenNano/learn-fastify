const User = require('../../database/schema/user')

const registerHandler = async (req, res) => {
  try {
    const user = await User.findOne({
      name: req.body.name,
      password: req.body.password
    })

    return user
  } catch (error) {
    console.log(error)
  }
}

module.exports = registerHandler
