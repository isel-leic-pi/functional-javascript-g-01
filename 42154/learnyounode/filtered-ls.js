'use strict'

const fs = require('fs')
const dir = process.argv[2]
const ext = '.' + process.argv[3]
const path = require('path')

fs.readdir(dir, (err, list)=>{
    if (err) {
        return console.log(err)
    }
    for(let i = 0; i < list.length; i++){
        if(path.extname(list[i]) === ext)
            console.log(list[i])
    }
})