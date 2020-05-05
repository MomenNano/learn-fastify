const path = require('path')
const fs = require('fs')

const user = require('./user')
const tweet = require('./tweet')

const apiRoute = async (fastify, opts) => {
  // Here I should register all the routers
  fastify.get('/', async (req, res) => {
    //   console.log('here')
    // const stream = fs.createReadStream(path.resolve(__dirname, '../egyptian-20181028.json'))
    // const stream = createReadStream(
    //   path.resolve(__dirname, '../public/egyptian-20181028.json')
    // )
    // for await (const chunk of stream) {
    //   res.type('text/plain').send(chunk)

    // }
    // const jsonres = JSON.parse(path.join(__dirname, '../european-20181028'))
    try {
      let s = [
        {
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },
        {
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        },{
          lolafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafd: 'adlasdfsadfasfkfkjhalkfh',
          loldafaf: 'adlasdfsadfasfkfkjhalkfh',
          loladfaaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafsaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafa: 'adlasdfsadfasfkfkjhalkfh',
          lolafabf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafy: 'adlasdfsadfasfkfkjhalkfh',
          lolafacf: 'adlasdfsadfasfkfkjhalkfh',
          loylafaf: 'adlasdfsadfasfkfkjhalkfh',
          loluafaf: 'adlasdfsadfasfkfkjhalkfh',
          lolaifaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafoaf: 'adlasdfsadfasfkfkjhalkfh',
          lolafapf: 'adlasdfsadfasfkfkjhalkfh',
          lolafafq: 'adlasdfsadfasfkfkjhalkfh'
        }
      ]
      // let s = require('../jsonfile.json')

      console.log(s)

      res.send(s)
    } catch (error) {
      console.log(error)
    }
    // res.type('application/json').compress(fs.createReadStream('./package.json'))
    // return res
    // try {
    //   res.compress(
    //     sendFile('egyptian-20181028.json', path.join(__dirname, '../public'))
    //   )
    //   return res
    //   // res.send('lol')
    // } catch (error) {
    //   console.log(error)
    // }
    // console.log(path.join(__dirname, '../egyptian-20181028.json'))
  })

  fastify.register(user, { prefix: '/user' })
  fastify.register(tweet, { prefix: '/tweet' })
}

module.exports = apiRoute
