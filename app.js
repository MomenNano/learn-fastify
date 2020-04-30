const fastify = require('fastify')({
  logger: true
})

const fastifyEnv = require('fastify-env')

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
  data: { CALL: '50500' },
  dotenv: true
}

fastify.register(fastifyEnv, options).ready(err => {
  if (err) console.log(err)

  console.log(fastify.env)
  start()
})

const start = async () => {
  try {
    await fastify.listen(fastify.env.PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}