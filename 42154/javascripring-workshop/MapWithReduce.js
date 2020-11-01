'use strict'

module.exports = function arrayMap(arr, fn){
    return arr.reduce(function(accumulator, curr, index, arr){       //reduce recebe a função e [] como parâmetros; function (reducer) recebe os 4 parâmetros
        accumulator.push(fn.call(this, curr, index, arr))         //push adiciona elementos ao fim do array, call realiza a chamada de fn com os parâmetros a seguir
        return accumulator
    },[])
}