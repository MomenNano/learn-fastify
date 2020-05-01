const fastify = require('fastify')({
  logger: true
})

const envSchema = require('env-schema')
const mongoose = require('mongoose')

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

// Connect to database
async function connectDB () {
  try {
    await mongoose.connect('mongodb://localhost/my_database', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (error) {
    console.log('error while connecting to mongodb')
  }
}

connectDB()

// APIs modules

fastify.register(api, { prefix: '/api' })

// Start the server
const start = async () => {
  try {
    await fastify.listen(fastify.env.PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
