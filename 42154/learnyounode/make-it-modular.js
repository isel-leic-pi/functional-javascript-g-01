'use strict'
const dir = process.argv[2]
const ext = process.argv[3]


const mymodule = require('./mymodule.js')

mymodule(dir, ext, function(err, list){
    if(err)
        return console.log(err)

    list.forEach(function(file){
            console.log(file)
        })
    


})