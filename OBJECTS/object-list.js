const client = {
    name: "John",    
    age: 24,
    email: "john@email.com",
    phone: ["111333223", "311333223"]
};

client.adress = [{
    street: "Albert Einstein",
    number: 123321,
    apt: true,
},
];

client.adress.push({
    street: "Spring Weather",
    number: 404,
    apt: false,
})

const justApt = client.adress.filter(
    (adress) => adress.apt === true
)

console.log(justApt);