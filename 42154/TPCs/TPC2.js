'use strict'

function inspect(obj){
    let propertiesName = Object.getOwnPropertyNames(obj)
    let propertiesValue = Object.keys(obj)
    for(p in propertiesName){
        console.log(p, propertiesValue[p])
    }
}

module.exports = inspect