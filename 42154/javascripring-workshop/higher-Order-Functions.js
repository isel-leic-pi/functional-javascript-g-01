'use strict'

function repeat(operation, num){
    if (num<=0) 
        return
    while(num>0){
        operation
        num--
    }
}

module.exports = repeat