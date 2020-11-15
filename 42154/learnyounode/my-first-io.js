'use strict'

const fs = require('fs')
//const file = (new URL(process.argv[2]))
let file = process.argv[2]

const buf = fs.readFileSync(file).toString()
const size = buf.split('\n')
console.log((size.length-1)) 