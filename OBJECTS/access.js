const client = {
    name: "Andre",
    age: 32,
    cpf: "111222333",
    email: "andre@dominio.com"
}

console.log(`The name of client is ${client.name}, and the age in years is ${client.age}`)

console.log(`The 3 first digits of the cpf of this client is ${client.cpf.substring(0, 3)}`);