function getShortWord(phrase) {
    let phraseArr = phrase.split(' ');//формуємо масив слів
    let result = [];
    for (let i = 0; i < phraseArr.length; i++) {//формування масиву довжин слів
            result[i] = phraseArr[i].length;
       };
    return Math.min(...result);//знаходимо найменшу довжину
    };
    
getShortWord("Lets all go on holiday somewhere very cold");

const getShortW = phrase => Math.min(...phrase.split(' ').map(word => word.length));
const getShortW2 = phrase => phrase.split(' ').reduce((a, b) => a.length <= b.length ? a : b);
const getShortW3 = phrase => phrase.split(' ').reduce((a, b) => a.length <= b.length ? a : b).length;



console.log(getShortW("Lets all go on holiday somewhere very cold"));
console.log(getShortW2("Lets all go on holiday somewhere very cold"));
console.log(getShortW3("Lets all go on holiday somewhere very cold"));