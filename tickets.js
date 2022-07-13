function sum(acc, el) { return acc + el; }

const array = [1,1,1,1,1,1];
const firstArr = array.slice(0,3)
const secondArr = array.slice(3,6)
const sum1 = firstArr.reduce(sum);
const sum2 = secondArr.reduce(sum);
if (sum1 === sum2) {
    console.log(' You Win!')
} else {
    console.log ('You lose!')
};