const client = {
    name: "Andre",
    age: 32,
    cpf: "111222333",
    email: "andre@dominio.com"
}

console.log(`The name of client is ${client["name"]}, and the age in years is ${client["age"]}`)

const braces = ["nome", "idade", "cpf", "email", "hight"]

braces.forEach((braces) => {
    console.log(`The braces ${braces} has the value ${client[braces]}`)
})
