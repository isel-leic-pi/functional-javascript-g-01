/* eslint-disable no-undef */
'use strict'

//const urllib = require('urllib')
const users = require('./../lib/repo/users')
const fs = require('fs')  

jest.mock('urllib')

test('test users module getUsers successfuly', done => {
    users.getUser('gamboa', (err, user) => {
        // Assert that there is no error
        expect(err).toBeFalsy()

        // Assert that property username of user is gamboa
        expect(user.username).toBe('gamboa')
        done()
    })
})


/*
test('test users module addUser successfully', done =>{
    users.addUser('alberto', (err, user) => {
        expect(err).toBeFalsy()
        expect(user.username).toBe('alberto')
        done()
    })
})

test('test users module addArtist successfully', done => {
    users.addArtist('gamboa', 'Amalia', (err, buffer) => {
        expect(err).toBeFalsy()
        expect(buffer.artists[buffer.artists.length-1]).toBe('Amalia')
        done()
    })
})


const artists = ["muse"]

test('test users module addArtist successfully', done => {
    urllib.request.mockImplementationOnce(requestMock)
    users.addArtist('joao', 'muse', (err, data) =>{
        expect(err).toBeFalsy()
        artists.forEach((t, i)=>{
            expect(data.artists[i]).toBe(t)
        })
        done()
    })
})
*/

/**
 * @param {*} url 
 * @param {function(err, buffer, http.IncomingMessage)} callback 
 */
function requestMock(url, callback){
    fs.readFile('./__tests__/mocks/lastfm-users.json', callback)
}



