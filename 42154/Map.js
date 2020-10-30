'use strict'

function doubleAll(numbers){
    const map1 = Array.prototype.map(x => x * 2)
    return map1
}

const array = [0,1,2,3,4,5]
console.log(doubleAll(array))

module.exports = doubleAll