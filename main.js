//Assync JS And XML
import load from './load.js';

document.querySelector('.btn-get-data').addEventListener('click', _ => {
    const url = document.querySelector('.in-url').value;

    const renderAnswer = txt => document.querySelector('.output').innerText = txt;

    load(url, renderAnswer);
});

load('names.json', d => console.log(d), 'JSON');

//Обіцянки -- Promise

// console.time('fetch');

// const req = await fetch('data.txt');
// const d = await req.text();

// console.timeEnd('fetch');
// console.log('FETCH', d);

fetch('data.txt').then(r => r.text()).then(d => console.log(d));
fetch('names.json').then(r => r.json()).then(d => console.log(d));

fetch('https://randomuser.me/api/?results=10').then(r => r.json()).then(renderUser);

function renderUser({results}){
document.querySelector('.output').innerHTML = results.reduce((html, el) => (
    `${ html }<div class="card" style="width: 18rem;">
    <img src="${el.picture.large}" class="card-img-top" alt="${ el.name.first }">
    <div class="card-body">
        <h5 class="card-title">${ el.name.title } ${ el.name.first } ${ el.name.last }</h5>
        <p class="card-text">${ el.dob.age }, ${ el.location.country }, ${ el.location.city }</p>
        <p class="card-text">${ el.login.username } ${ el.login.password }</p>
        <a href="mailto:${ el.email }" class="btn btn-primary">Email me</a>
    </div>
    </div>`
    ), '');   
}

//
const GOOGLE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vREP_VkiXZW7ZEXG0RKtr2Epr-Mz0tY7-gPJ7h47EX2LOfdDvJRScqUpsnucqsRH2D3a7cVIkj3aZAo/pub?gid=1520640067&single=true&output=tsv';

function renderCountries(data){
    const bodyC = document.querySelector('.table-country');

    console.log(data);
    const html = data.reduce((html, { id, countries, capital, population, danger }) => (`${ html }<tr>
        <th scope="row">${ id }</th>
        <td>${ countries }</td>
        <td>${ capital }</td>
        <td>${ population }</td>
        <td>${ danger }</td>
    </tr>`), '');

    bodyC.innerHTML = html;
}

parseGoogleSheet(GOOGLE_URL, renderCountries);