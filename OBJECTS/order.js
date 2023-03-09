const clients = require("./client.json")

function order(list, proprety){
    const result = list.sort((a,b) =>{
        if(a[proprety] < b[proprety]) {
            return -1
        }
        if (a[proprety] > b[proprety]) {
            return 1
        }
        return 0
    })

    return result
}

const orderName = order(clients, "nome")