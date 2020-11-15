'use strict'

const fs = require('fs')
const PATH_USERS = './data/users.json'

/**
 * @typedef User
 * @property {String} username
 * @property {Array} artists
 */

/**
 * @param {String} username 
 * @param {function(Error, User)} cb 
 */
function getUser(username, cb) {
    fs.readFile(PATH_USERS, (err, buffer) => {
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const users = arr.filter(user => user.username == username)
        if(users.length == 0) return cb(new Error('There is no user with username ' + username))
        cb(null, users[0])
    })
}

/**
 * Add a new User object with given username if it does not exist yet.
 * Returns an Error if that username already exist.
 * @param {String} username 
 * @param {function(Error)}
 */
function addUser(username, cb) {
    // Ler ficheiro
    // JSON.parse
    // Modificar...
    // JSON.stringify
    // writeFile

    getUser(username,(err, user)=>{
        if(err== null){
            return cb(new Error('There is already a user ' + username))
        }

        let arr = []
        fs.readFile(PATH_USERS,(err, buffer)=>{
                if(err){
                    console.log(err)
                    return cb(err)
                } 
                arr = JSON.parse(buffer)
                let newUser = {
                    "username": username,
                    "artists":[]
                }
                arr.push(newUser)
                const newData = JSON.stringify(arr)
                fs.writeFile(PATH_USERS, newData,(err) => {
                    if(err){
                        cb(err)
                        console.log('Error writing')
                    }
                    
                })
                console.log('User added')
                cb(null, newUser)
            })

    })

    

    
}

/**
 * Adds a new artist name to the array of artists of the User with 
 * given username.
 * I does not verify repetitions among artists.
 * 
 * @param {String} username 
 * @param {String} artist 
 * @param {function(Error, User)} cb 
 */
function addArtist(username, artist, cb) {
    getUser(username, (err, user) => {
        fs.readFile(PATH_USERS, (err, buffer)=>{
            if(err) cb(err)
            const arr = JSON.parse(buffer)
            const users = arr.filter(users => users.username == username)
            if(Object.hasOwnProperty(users, 'artists')){
                arr.forEach(element => {
                if(element.username === username){
                    element.artists = []
                    element.artists.push(artist)
                }
            });
            }else{
                arr.forEach(element => {
                if (element.username === username){
                    element.artists.push(artist)
                    }
                })
            }

            let newData = JSON.stringify(arr)
            fs.writeFile(PATH_USERS, newData, (err) => {
                if(err) cb(err)
            })
                             
        }) 
                
    }) 
    
}
        
    

module.exports = {
    getUser,
    addArtist,
    addUser
}
