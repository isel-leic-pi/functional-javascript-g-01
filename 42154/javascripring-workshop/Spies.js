'use strict'

function Spy(target, method){
    let result = {count: 0}
    let original = target[method]       //guarda o método original
    target[method] = function(){        //redefine função original
        result.count++
        return original.apply(target, arguments)        //chama a função orginal
    }
    return result
}

module.exports = Spy