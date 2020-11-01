'use strict'

function getShortMessages(messages){
    return messages.filter(function(item){      //filter cria um novo array com os elementos que passam no teste (neste caso, os que passam na condiçao da function)
        return item.message.length < 50})
        .map(function(item){                  //map cria um array com os elementos resultantes da chamada de function
        return item.message
    })
}

module.exports = getShortMessages