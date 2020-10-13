function repeat(operation, num) {
    for (let index = 0; index < num; index++) {
        operation()
        
    }
}

module.exports = repeat