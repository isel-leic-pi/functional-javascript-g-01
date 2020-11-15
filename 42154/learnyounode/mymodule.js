'use strict'

const fs = require('fs')
const path = require('path')


module.exports = function modular(dir, ext, callback){
   fs.readdir(dir, (err, list)=>{
        if (err) return callback(err)
        
        var newArray = []
        for(let i = 0; i < list.length; i++){
            if(path.extname(list[i]) ===  '.' + ext){
                //console.log(list[i])
                newArray.push(list[i])
            }
                
        }
        callback(null, newArray)
    }) 
}


