const postTweetHandler = require('./tweet')

const { postTweetSchema } = require('./schemas')

const userRoute = async (fastify, opts) => {
  fastify.post('/tweet', { schema: postTweetSchema }, postTweetHandler)
}

module.exports = userRoute
