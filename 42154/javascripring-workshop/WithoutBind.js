'use strict'

var slice = Array.prototype.slice //cópia dos elementos do array

function logger(namespace){
    return function(){
        const x = [namespace].concat(slice.call(arguments))      //chamada de slice com os argumentos passados na função (arguments)
        console.log.apply(console, x) 
    }
}

module.exports = logger