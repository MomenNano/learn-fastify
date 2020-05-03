const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('authenticate', async function (req, res) {
    try {
      await req.jwtVerify()
    } catch (error) {
      res.send(error)
    }
  })
})
