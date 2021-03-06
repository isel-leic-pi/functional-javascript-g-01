'use strict'

const lastfm = require('./lastfm')
const users = require('./users')

/**
 * Retrieves the top tracks (limit) of the favourite artists
 * for the given username.
 * Notice it returns a single Array flatten with thos tracks.
 * @param {String} username 
 * @param {function(Error, Array)} cb 
 */
function getTopTracks(username, limit, cb) {
    users.getUser(username, (err, user) => {
        if(err) return cb(err)
        const arr = []
        let count = 0
        user.artists.forEach(artist => 
            lastfm.getTopTracks(artist, (err, tracks) => {
                if(err) return cb(err)
                count++
                tracks
                    .slice(0, limit)
                    .forEach(t => arr.push(t))
                if(count == user.artists.length)
                    cb(null, arr)
            })
        )
    })
}

/**
 * Adds a new artist name to the array of artists of the User with 
 * given username.
 * Returns an Error both if there is not that username or there is no Artists with that name.
 * 
 * @param {*} username 
 * @param {*} artist 
 * @param {*} cb 
 */
function addArtist(username, artist, cb) {
    users.addArtist(username,(err, artist)=>{
        if(err) return cb(err)
        users.forEach(user =>{
            if(user.username === username){
                user.artists.forEach(currArtist=>{
                    if(currArtist === artist){
                        return cb(new Error('Artist already exist in preferences'))
                    }else{
                        let arr = user.artists
                        arr.push(artist)
                        cb(null, artist)
                    }
                })
            }else{
                return cb(new Error('User with username '+ username + 'does not exist'))
            }
        })
    })
}

module.exports = {
    getTopTracks,
    addArtist
}