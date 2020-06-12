const registerSchema = {
  body: {
    type: 'object',
    required: ['name', 'password', 'email'],
    properties: {
      name: { type: 'string' },
      password: { type: 'string' },
      email: { type: 'string' }
      // avatar: { type: 'file' }
    },
    additionalPrpoerties: true
  },
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string' },
        _id: { type: 'string' }
      }
    }
  }
}

const loginSchema = {
  body: {
    type: 'object',
    required: ['name', 'password'],
    properties: {
      name: { type: 'string' },
      password: { type: 'string' }
    },
    additionalPrpoerties: false
  },
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string' },
        _id: { type: 'string' }
      }
    }
  }
}

module.exports = {
  registerSchema,
  loginSchema
}
