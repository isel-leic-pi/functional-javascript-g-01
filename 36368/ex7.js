function reduce(arr, fn, initial) {
    if(!arr || arr.length <= 0) {
        return initial
    }
    const curr = arr.shift()
    const acc = fn(initial, curr)
    return reduce(arr, fn, acc)
}

module.exports = reduce

