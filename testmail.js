const order = [
    {
        id : 12,
        name : 'Snikers',
        count : 3,
        price : 100
    },
    {
        id : 212,
        name : 'Shampoo',
        count : 1,
        price : 10
    },
    {
        id : 1,
        name : 'Soap',
        count : 30,
        price : 9
    }
];

const baseURL = 'http://127.0.0.1:3000/?order=';
const url = `${ baseURL }${ JSON.stringify(order) }`;
console.log(url);
document.querySelector('.btn-send').addEventListener('click', () => fetch(url));