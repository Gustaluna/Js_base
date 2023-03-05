const client = {
    name: "John",    
    age: 24,
    email: "john@email.com",
    phone: ["111333223", "311333983"]
};

client.adress = [
    {
    street: "Albert Einstein",
    number: 123321,
    apt: true,
},
];

const objectsKeys = Object.keys(client)

console.log(objectsKeys)

if (!objectsKeys.includes("adresss")){
    console.error("Is necessary to have an address")
}

console.log(client)