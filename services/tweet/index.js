const postTweetHandler = require('./tweet')

const { postTweetSchema } = require('./schemas')

const userRoute = async (fastify, opts) => {
  async function verify (request, reply) {
    try {
      await request.jwtVerify()
      console.log(request.user)
    } catch (err) {
      reply.send(err)
    }
  }
  fastify.post('/tweet', { schema: postTweetSchema, onRequest: verify }, postTweetHandler)
}

module.exports = userRoute
