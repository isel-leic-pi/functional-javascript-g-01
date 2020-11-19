/* eslint-disable no-undef */
'use strict'

const urllib = require('urllib')
const lastfm = require('./../lib/repo/lastfm')
const fs = require('fs')    

jest.mock('urllib') // Adds a mock API to all ppublic methods of urllib

const cure = [
    'Friday I\'m in Love',
    'Just Like Heaven',
    'Boys Don\'t Cry'
]

test('test users lastfm getToptracks for cure', done => {
    urllib.request.mockImplementationOnce(requestMock)
    lastfm.getTopTracks('cure', (err, tracks) => {
        expect(err).toBeFalsy()
        cure.forEach((t, i) => {
            expect(tracks[i]).toBe(t)
        })
        done()
    })
})

/**
 * @param {*} url 
 * @param {function(err, buffer, http.IncomingMessage)} callback 
 */
function requestMock(url, callback) {
    fs.readFile('./__tests__/mocks/lastfm-toptracks-cure.json', callback)
}