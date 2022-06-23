/**
 *  1. Площа
 *  Створіть веб-аплікацію, яка питає у користувача радіус кола та видає площу цього кола.
 *  *Приклад:*
 *  --> 123 
 *  <-- 47529.15525615998
 *  --> 3.09 
 *  <-- 29.996240815740702
 */

// let radius = prompt('Enter circle radius:');
// const areaCircle = (radius) => Math.PI * radius * radius; // Math.pow(radius, 2)
// alert('Area of circle is: ' + areaCircle(radius))


const areaCircle = (radius) => console.log(Math.PI * radius * radius); // Math.pow(radius, 2)

areaCircle(123);

/**
 *   2. Пенсія
 *   Створіть веб-аплікацію, яка питає у користувача його вік та виводить скільки йому залишилось до пенсії та в якому році вона настане.
 *   Приклад:
 *   --> 30
 *   <-- 35, 2057
 *   --> 1
 *   <-- 64, 2086
 */

const pension = (age) => {
  const pensionAge = 65;
  let currentDate = new Date();
  let pensionYearIs = currentDate.getFullYear() - age + pensionAge;
  let yearsToPension = pensionAge - age;
  console.log(`${yearsToPension}, ${pensionYearIs}`);
};

pension(1);

/**
 *  3. Навпаки
 *  Запросіть у користувача трицифрове число і виведіть його задом наперед.
 *  Приклад:
 *  --> 321
 *  <-- 123
 *  --> 109
 *  <-- 901
 */

const myNumbReverse = (myNumber) => console.log(myNumber.toString().split('').reverse().join(''));

myNumbReverse(100);

//console.log(typeof myNumbReverse);

// let myNumber = prompt('Enter three-digit number: ');
// let myNumbReverse = myNumber.toString().split('').reverse().join('');
// alert('Revers number is: ' + myNumbReverse);
