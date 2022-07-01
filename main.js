//Створення функцій

//Function declaration ++ hoisting
function show(a, b, c, d){
    //a,b,c,d - аргументи

}

//Function expression
const hide = function(){

}

//Arrow function

const toggle = () => {};

const sqr = (a = 0) => {//!default value
    return a ** 2;
}

const sqr2 = a => {//Якщо 1 аргумент, дужки можу ігнорувати
    a = a || 0;//!old style default value 
    return a ** 2;
}

const sqr3 = a => a ** 2;//Якщо у функції 1 дія, і ця дія може бути return, то дужки та return можна не писати

const sum = function(...arrOfN){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
        
    return sum;
}

// console.log(sqr(2));
// console.log(sqr(2, 3, 4, 6, 88));
// console.log(sqr());

console.log('1 + 3: Expect : 4, Result : ', sum(1, 3));
console.log('0 + 0: Expect : 0, Result : ', sum(0, 0));
console.log('1: Expect : 1, Result : ', sum(1));
console.log('no arguments: Expect : 0, Result : ', sum());
console.log('1 + 2 + 3: Expect : 6, Result : ', sum(1, 2, 3));

//рекурсія

//замикання // closure

//counter
function counter(){
    let i = 0;
    const innerCounter = function(){
        i = i + 1;
        return i;
    }
    
    return innerCounter;
}

const c1 = counter();
const c2 = counter();

// console.log(c1());//1
// console.log(c1());//2
// console.log(c1());//3
// console.log(c1());//4
// console.log(c2());//1
// console.log(c2());//2
// console.log(c2());//3
// console.log(c2());//4

class Counter{
    i = 0;
    count(){
        this.i++;
        return this.i;
    }
}

const c3 = new Counter();
console.log(c3.count());//1
console.log(c3.count());//2
console.log(c3.count());//4