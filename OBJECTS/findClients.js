const clients = require('./newClients.json')

function find(list, key, value){
    return list.find((item) => item[key].includes(value))
}

const found = find(clients, "nome", "Kirby")
const found2 = find(clients, "telefone", "1918820860")

console.log(found2)