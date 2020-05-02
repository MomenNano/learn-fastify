const registerHandler = require('./register')
const loginHandler = require('./login')
const User = require('../../database/schema/user')
const { registerSchema, loginSchema } = require('./schemas')

const userRoute = async (fastify, opts) => {

  fastify.post('/register', { schema: registerSchema }, registerHandler)
    fastify.addHook('onRequest', async (req, res) => {
      try {
        console.log('lllllllllllllllllllllllllllllllllllllllllllllll')
      } catch (error) {
        console.log(error)
      }
    })
  fastify.post('/login', { schema: loginSchema }, async (req, res) => {
    try {
      const user = await User.findOne({
        name: req.body.name,
        password: req.body.password
      })

      const token = fastify.jwt.sign(user.name)
      console.log(token)

      return user
    } catch (error) {
      console.log(error)
    }
  })
}

module.exports = userRoute
