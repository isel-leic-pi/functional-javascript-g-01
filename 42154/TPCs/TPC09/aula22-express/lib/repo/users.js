'use strict'

const fs = require('fs')
let pathUsers = './data/users.json'

function init(path) {
    if(path) pathUsers = path
}

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
    fs.readFile(pathUsers, (err, buffer) => {
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const users = arr.filter(user => user.username == username)
        if(users.length == 0) return cb(new Error('There is no user with username ' + username))
        cb(null, users[0])
    })
}

function getUsers(cb){
    fs.readFile(pathUsers, (err, buffer) => {
        if(err) return cb(err)
        const users = JSON.parse(buffer)
        if(users.length == 0) return cb(new Error('There are no users'))
        cb(null, users)
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
        fs.readFile(pathUsers,(err, buffer)=>{
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
                fs.writeFile(pathUsers, newData,(err) => {
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
        if(err != null) cb(err)
        else{
            fs.readFile(pathUsers, (err, buffer) => {
                if(err){
                    console.log(err)
                    cb(err)
                }
                let arr = JSON.parse(buffer)
                const user = arr.filter(user => user.username === username)
                if(!Object.hasOwnProperty(user, 'artists')){
                    arr.forEach(element => {
                        if(element.username === username){
                            element.artists = []
                            element.artists.push(artist)
                        }
                    });
                }else{
                    arr.forEach(element => {
                    if(element.username === username){
                        element.artists.push(artist)
                        }
                    })
                    let data = JSON.stringify(arr)
                    fs.writeFile(pathUsers, data, (err) => {
                        if(err){
                            console.log(err)
                            cb(err)
                        }
                        else{
                            console.log('success')
                        }    
   
                    })
                }  
            })
        } 
        cb(null, artist)  
    })    
}

    
function removeUser(username, cb){
    getUser(username, (err, user) => {
        fs.readFile(pathUsers, (err, buffer) => {
            if(err) cb(err)
            const arr = JSON.parse(buffer)
            const users = arr.filter(users => users.username == username)
            if(users.length == 0) return cb(new Error('There is no user with username ' + username))
            let index = 0
            let removed
            arr.forEach(element => {
                if(element.username === username){
                   removed = arr.splice(index, 1)
                }
                index++
            })
            let newArray = JSON.stringify(arr)
            fs.writeFile(pathUsers, newArray, (err) => {
                if(err) cb(err)
            })
        })
        cb(null, removed)
    })
}
        
    

module.exports = {
    init,
    getUser,
    getUsers,
    addUser,
    addArtist,
    removeUser,
}
