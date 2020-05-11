const fastify = require('fastify')({
  logger: true
})

const envSchema = require('env-schema')
const mongoose = require('mongoose')
const jwt = require('fastify-jwt')
const fastifyStatic = require('fastify-static')
const path = require('path')
const compress = require('fastify-compress')
const websocket = require('fastify-websocket')

const authPlugin = require('./plugins/auth-plugin')

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
    },
    JWT_SECRET: {
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
    await mongoose.connect(fastify.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (error) {
    console.log('error while connecting to mongodb')
  }
}

connectDB()

// compress response

fastify.register(compress, {
  threshold: 200,
  encodings: ['gzip']
})

// Register JsonWebToken

fastify.register(jwt, {
  secret: fastify.env.JWT_SECRET
})

fastify.register(authPlugin)

// Register Websocket

fastify.register(websocket, {
  handle,
  options: {
    path: '/ws'
  }
})
function handle (conn) {
  console.log('webb')
  conn.pipe(conn) // creates an echo server
}

// Serve static files

fastify.register(fastifyStatic, {
  root: path.resolve(__dirname, './plugin')
})

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
