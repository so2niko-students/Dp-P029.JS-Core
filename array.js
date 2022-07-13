//Arrays
const arr1 = ['Дніпро', 'Самара'];//літеральний
const arr2 = Array(30, 27, 33, 35, 20);//об'єктний
const arr3 = new Array(4);//об'єктний
//якщо аргумент 1 і це цифра - то створює пустий масив довжиною в цей аргумент
/*
push - вставити в зад
pop - забрати з кінця
shift - забрати з початику
unshift - вставити в голову
*/
arr1.push(3);
//[4, 2, 3]

//методи по проходу масиву
//? ПРосто пройти по всьому масиву і виконати якусь дію -- forEach 
arr1.forEach((el, i, arr) => console.log(el, i, arr));

//? Пройтись по всьому масиву та згенерувати новий масив з нього (такої ж довжини) -- map
// const far = arr2.map(el => el * 1.8 + 32);
const far = arr2.map(function(el){
    return el * 1.8 + 32;
});
const test = arr3.map(el => el);
// console.log(test);

//? Пройтись по всьому масиву та відфільтрувати тільки ті значення, які задовільняють умові -- filter
// filter інтерпретує все, що отримує як Boolean
// const rivers = arr1.filter(el => isNaN(el));
const rivers = arr1.filter(function(el){
    return isNaN(el);
});
console.log(rivers);

//? Пройтись по всьому масиву та отримати якийсь результат -- reduce
//аргументи (acc, el, i, arr) 
//acc - те, що було результатом минулої ітерації (return)

function rand(from = 0, to = 10){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

const statDefault = {
    minimal : 0,
    normal : 0,
    clever : 0,
    megamind : 0,
    sum : 0,
    count : 0,
    average : 0
};
const testArr = Array(100).fill(1).map(el => rand(100, 200));
const stat = testArr.reduce((st, el) => {
    if(el < 120){
        st.minimal++;
    }
    if(el >= 190){
        st.megamind++;
    }
    if(el >= 120 && el < 170){
        st.normal++;
    }
    
    if(el >= 170 && el < 190){
        st.clever++;
    }

    st.count++;
    st.sum += el;
    st.average = st.sum / st.count;

    return st;
    
}, statDefault);

console.log(stat);