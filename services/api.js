const apiRoute = async (fastify, opts) => {

  // Here I should register all the routers
  fastify.get('/', async (req, res) => {
    res.send('lol')
  })
}

module.exports = apiRoute
