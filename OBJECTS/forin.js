const client = {
    name: "John",    
    age: 24,
    email: "john@email.com",
    phone: ["111333223", "311333223"]
};

client.adress = [
    {
    street: "Albert Einstein",
    number: 123321,
    apt: true,
},
];

for (let key in client){
    let type = typeof client[key]
    if (type !== 'object' && type !== "function"){
    console.log(`The ${key} has the value ${client[key]}`)
    }
}