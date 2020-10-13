function inspect(obj) {
    Object
    .keys(obj)
    .forEach(key => printPair(key, getValue(obj, key)))
}

function getValue(obj, key) {
    return (isFunction(obj[key]) && functionHasNoParams(obj[key])) ? obj[key]() : obj[key]
}

function functionHasNoParams(props) {
    return props && props.length === 0
}

function isFunction(prop) {
    return prop instanceof Function
}

function printPair(name, value) {
    console.log(`${name} = ${value}`)
}

// test

function Student(nr, name) {
    this.nr = nr
    this.name = name
    this.fullInfo = function() { return `${this.nr} | ${this.name}` }
}

var student = new Student(1234, "some name")
inspect(student)