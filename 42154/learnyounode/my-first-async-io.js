'use strict'

const fs = require('fs')
let file = process.argv[2]

fs.readFile(file, (err, data)=>{
    if (err) {
        return console.log(err)
    }
        const size = data.toString().split('\n')
        console.log((size.length-1)) 
})


