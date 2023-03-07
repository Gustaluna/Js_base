const data = require('./client.json')
console.log(data)
console.log(typeof data)


const clientToString = JSON.stringify(data)

console.log(clientToString)
console.log(typeof clientToString)

console.log(clientToString.name)

const clientObject = JSON.parse(clientToString)

console.log(clientObject)