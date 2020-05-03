const postTweetHandler = require('./tweet')

const { postTweetSchema } = require('./schemas')

async function tweetRoute (fastify, opts) {
  fastify.post(
    '/tweet',
    { schema: postTweetSchema, preValidation: fastify.authenticate },
    postTweetHandler
  )
}

module.exports = tweetRoute
