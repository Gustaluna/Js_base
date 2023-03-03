const client = {
    name: "John",    
    age: 24,
    email: "john@email.com",
    phone: ["111333223", "311333223"],
    blance: 200,
    payment: function (value){
        if(value > this.blance){
            console.log("insufficient blance")
        }else{
            this.blance -= value;
            console.log(`payment successful. New balance ${this.blance}`)
        }
    }
};

client.payment(25)