// const path = require('path')
// const fs = require('fs')

const user = require('./user')
const tweet = require('./tweet')

const apiRoute = async (fastify, opts) => {
  // Here I should register all the routers
  // fastify.get('/', { websocket: true }, async (con, req) => {//(req, res) => {
  //   // const stream = fs.createReadStream(path.resolve(__dirname, '../egyptian-20181028.json'))
  //   // const stream = createReadStream(
  //   //   path.resolve(__dirname, '../public/egyptian-20181028.json')
  //   // )
  //   // for await (const chunk of stream) {
  //   //   res.type('text/plain').send(chunk)

  //   // }
  //   // const jsonres = JSON.parse(path.join(__dirname, '../european-20181028'))
  //   //
  //   try {
  //     con.socket.on('message', message => {
  //       // message === 'hi from client'
  //       con.socket.send('hi from server')})
  //   } catch (error) {
  //     console.log(error)
  //   }
  // })
  // fastify.register(require('fastify-websocket'))
  fastify.get('/l', { websocket: true }, (connection, req) => {
    connection.pipe(connection)
    connection.socket.on('message', message => {
      // message === 'hi from client'
      connection.socket.send('hi from server')
    })
  })

  fastify.register(user, { prefix: '/user' })
  fastify.register(tweet, { prefix: '/tweet' })
}

module.exports = apiRoute
