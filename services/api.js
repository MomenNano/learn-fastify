const apiRoute = async (fastify, opts) => {
  console.log(fastify.env)
  // Here I should register all the routers
  fastify.get('/', async (req, res) => {
    console.log(fastify.env)
    res.send('lol')
  })
}

module.exports = apiRoute
