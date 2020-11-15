'use strict'

const array = process.argv.slice(2)
let sum = 0

for(let x =0; x< array.length; x++){
    sum += Number(array[x]) 
}

console.log(sum)

