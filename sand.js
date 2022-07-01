function findBestIncome(a1, a2, a3, b1, b2, b3) {
    const arrayOfMoney = sortByASC([a1, a2, a3]);
    const arrayOfWeight = sortByASC([b1, b2, b3]);
    const bestResult = arrayOfMoney.reduce((acc, el, i) => acc + el * arrayOfWeight[i], 0);
    return bestResult;
}

function sortByASC(arr){
    return arr.sort((a, b) => a - b);
}
  
console.log('Максимальный заработок =',findBestIncome(10, 20, 30, 2, 5, 10),'грн')