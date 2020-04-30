const fastify = require('fastify')({
  logger: true
})

const fastifyEnv = require('fastify-env')

const api = require('./services/api')

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000
    }
  }
}

const options = {
  confKey: 'env',
  schema: schema,
  dotenv: true
}

fastify.register(api, { prefix: '/api'})

const start = async () => {
  try {
    await fastify.listen(fastify.env.PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

fastify.register(fastifyEnv, options).ready(err => {
  if (err) console.log(err)

  start()
})
