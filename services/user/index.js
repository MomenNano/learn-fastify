const { registerHandler, upload } = require('./register')
const loginHandler = require('./login')

const { registerSchema, loginSchema } = require('./schemas')
const multer = require('fastify-multer')

const userRoute = async (fastify, opts) => {
  fastify.register(multer.contentParser)

  fastify.post('/register', { preHandler: upload.single('avatar') }, registerHandler)
  fastify.post('/login', { schema: loginSchema }, loginHandler)
  fastify.get('/hi', { websocket: true }, (connection, req) => {
    connection.pipe(connection)
    connection.socket.on('message', message => {
      // message === 'hi from client'
      connection.socket.send('hi from server')
    })
    connection.socket.on('error', err => console.log(err))
  })
}

module.exports = userRoute
