const dollarsBudget = prompt('How many dollars do you have right now?');
const CURRENCY_OFF = 29.5;
const CURRENCY_NOT_OFF = 35;
const hrOff = dollarsBudget * CURRENCY_OFF;
const hrNotOff = dollarsBudget * CURRENCY_NOT_OFF;
const info = `Right now, you have $${ dollarsBudget }.
In UAH it can be ${ hrOff } or ${ hrNotOff }`;
alert(info);

//camelCase - 99% для змінних
const mainFile = '';
//snake_style - назви файлів
const main_file = '';
//PascalCase - назви класів або компонентів
const MainFile = '';
//kebab style - назви файлів
// main-file
//UPPER_CASE - магічних чисел та параметрів
const MAIN_FILE = '';

