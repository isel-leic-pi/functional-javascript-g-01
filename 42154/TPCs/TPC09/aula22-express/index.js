'use strict'

const users = require('./lib/repo/users')
const express = require('express')
const routes = require('./lib/routes/vinyl-routes')

if(process.argv.length > 2 )
    users.init(process.argv[2])

const server = express()

server.use(routes)

server.listen(8000, () => {
    console.log('Listening on port 8000')
    if(process.send)
        process.send({ running: true })
})