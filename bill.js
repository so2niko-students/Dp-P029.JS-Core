let bill = [{
    name: "iphone",
    quantity: 1,
    price: 10000
},{
    name: "puma",
    quantity: 1,
    price: 3200
},{
    name: "ZARA",
    quantity: 1,
    price: 750
},{
    name: "SONY",
    quantity: 1,
    price: 2400
}];

console.log(JSON.stringify(bill));

function overallPrice(data) {
    let total = 0;
     for (let i = 0; i < data.length; i++) {
            total += data[i].price;
        }
    return total;
}
console.log(overallPrice(bill));

function maxPrice(data) {
    let maxPrice = [];
    for (let i = 0; i < data.length; i++) {
        maxPrice.push(data[i].price);
    } 
    return Math.max.apply(null, maxPrice);
}
console.log(maxPrice(bill));

function averagePrice(data) {
    let product = data.length;
    let total = overallPrice(data);

    return total / product;
}
console.log(averagePrice(bill));

