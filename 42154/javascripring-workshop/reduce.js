'use strict'

function countWords(inputWords){
    return inputWords.reduce(function(counter,element){     //reduce recebe function como reducer, sendo function que vai dizer qual o comportamento
        counter[element] = ++counter[element] || 1
        return counter
    }, {})
}

module.exports = countWords