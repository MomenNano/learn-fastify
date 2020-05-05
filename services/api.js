const path = require('path')
const fs = require('fs')

const user = require('./user')
const tweet = require('./tweet')

const apiRoute = async (fastify, opts) => {
  // Here I should register all the routers
  fastify.get('/', async (req, res) => {

    // const stream = fs.createReadStream(path.resolve(__dirname, '../egyptian-20181028.json'))
    // const stream = createReadStream(
    //   path.resolve(__dirname, '../public/egyptian-20181028.json')
    // )
    // for await (const chunk of stream) {
    //   res.type('text/plain').send(chunk)

    // }
    // const jsonres = JSON.parse(path.join(__dirname, '../european-20181028'))
    try {
      res.send('lol')
    } catch (error) {
      console.log(error)
    }
  })

  fastify.register(user, { prefix: '/user' })
  fastify.register(tweet, { prefix: '/tweet' })
}

module.exports = apiRoute
