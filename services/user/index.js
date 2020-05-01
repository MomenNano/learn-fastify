const registerHandler = require('./register')
const loginHandler = require('./login')

const { registerSchema, loginSchema } = require('./schemas')

const userRoute = async (fastify, opts) => {
  fastify.post('/register', { schema: registerSchema }, registerHandler)
  fastify.post('/login', { schema: loginSchema }, loginHandler)
}

module.exports = userRoute
