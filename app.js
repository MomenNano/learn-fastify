const fastify = require('fastify')({
  logger: true
})

const envSchema = require('env-schema')

const api = require('./services/api')

const schema = {
  type: 'object',
  required: ['PORT', 'DB_URL'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000
    },
    DB_URL: {
      type: 'string'
    }
  }
}

const env = envSchema({
  schema: schema,
  dotenv: true
})

fastify.decorate('env', env)

console.log(process.env.DB_URL)


// Connect to database
fastify.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,

  url: fastify.env.DB_URL
})

fastify.register(api, { prefix: '/api' })

const start = async () => {
  try {
    await fastify.listen(fastify.env.PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
