//Типи даних

const pi = 3 + .14;
console.log(typeof pi);
console.log(pi);

const b = 2342343n;
console.log(pi * 3);
console.log(Math.PI);

//reference type Object
//value type primitive types

let bike1 = 'шосейний байк';
let bike2 = bike1;
bike1 = 'MTB';
console.log(bike1, bike2);
let team1 = {
    name: 'Армстронг',
    record: 22
};

let team2 = team1;
team2.record = 100;
console.log(team1.record);

let team3 = {};
Object.assign(team3, team1);
let team4 = {...team1};

team3.record = 2000;

console.log(team1.record);


//! var/let

for(let i = 0; i < 100; i++){
    console.log('in loop, i:', i);
}
// var i = 0;
// while(i < 100){
//     console.log('in loop, i:', i);

//     i++;
// }

console.log('i', i);