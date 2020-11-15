'use strict'

const http = require('http')
const url = process.argv[2]

http.get(url, (response)=>{
    let error
    if(response != 200)
        error = new Error('Request failed')

    response.setEncoding('utf-8')
    response.on('data',(data)=>{
        console.log(data)
    })
    
})