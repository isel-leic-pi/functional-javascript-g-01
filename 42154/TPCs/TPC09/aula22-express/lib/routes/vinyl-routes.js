'use strict'

const Router = require('express').Router
const { response } = require('express')
const users = require('./../repo/users')
const vinyl = require('./../repo/vinyl')

const router = Router()

module.exports = router

router.get('/vinyl/users/:username/toptracks/', (req, resp, next) => {
    const username = req.params.username
    const limit = req.query.limit | 3
    vinyl.getTopTracks(username, limit, (err, tracks) => {
        if(err) return next(err)
        resp.json(tracks)
    })
})



router.get('/vinyl/users/:username', (req, resp, next) => {
    const username = req.params.username
    users.getUser(username, (err, user) => {
        if(err) return next(err)
        if(!user) {
            const err = new Error('There is no user with username ' + username)
            err.status = 404
            return next(err)
        }
        resp.json(user)
    })
})

router.get('/vinyl/users', (req, resp, next) => {
    users.getUsers( (err, users) => {
        if(err) return next(err)
        const basePath = req.headers.host        
        users.forEach(user => {
            user.details = 'http://' + basePath + '/vinyl/users/' + user.username,
            user.toptracks = 'http://' + basePath + '/vinyl/users/' + user.username + '/toptracks'
        })
        resp.json(users)
    })
})

    router.put('/vinyl/users/:username', (req, resp, next) => {
        const username = req.params.username
        users.addUser(username, (err, user) => {
            if(err) return next(err)
            if(!user){
                const err = new Error('Impossible to add user')
                err.status = 409
                return next(err)
            }
            resp.json(user)
        })
    })



    router.post('/vinyl/users/:username/artists/:artist', (req, resp, next) => {
        const username = req.params.username 
        const artist = req.params.artist
        users.addArtist(username, (err, artist) => {
            if(err) return next(err)
            if(!username){
                const err = new Error('Invalid user, impossible to add artist')
                err.status = 409
                return next(err)
            }
            resp.json(artist)
        })
    })


    router.delete('/vinyl/users/:username', (req, resp, next) => {
        const username = req.params.username
        users.removeUser(username, (err, user) => {
            if(err) return next(err)
            if(!username){
                const err = new Error('Invalid username, impossible to remove user')
                err.status = 409
                return next(err)
            }
            resp.json(user)
    
        })
    })
   


