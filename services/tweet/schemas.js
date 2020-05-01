const postTweetSchema = {
  body: {
    type: 'object',
    required: ['body', 'owner'],
    properties: {
      body: { type: 'string' },
      owner: { type: 'string' }
    },
    additionalPrpoerties: false
  },
  response: {
    200: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
        body: { type: 'string' },
        likes: { type: 'number' },
        owner: { type: 'string' }
      }
    }
  }
}

module.exports = {
  postTweetSchema
}
