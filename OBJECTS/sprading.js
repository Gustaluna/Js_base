const client = {
    name: "John",    
    age: 24,
    email: "john@email.com",
    phone: ["111333223", "311333223"],
};

client.address = [
    {
    street: "Albert Einstein",
    number: 123321,
    apt: true,
    complement: "apt 934"
}
];

function callToClient(commercialPhone, regularPhone){
    console.log(`calling to the commercial phone ${commercialPhone}`)
    console.log(`calling to the regular phone ${regularPhone}`)
}

callToClient(...client.phone)

const delivery = {
    destination: client.name,
    ...client.address[0],
}

console.log(delivery)