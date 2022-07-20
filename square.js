const CONTAINER = document.querySelector('.container');

const rN = (from = 0, to = 255) => Math.floor(Math.random() * (to - from + 1) + from);
const rC = () => `rgb(${ rN() },${ rN() },${ rN() })`;

CONTAINER.innerHTML = '<div class="el"></div>'.repeat(100);
const ELEMENTS = [...CONTAINER.querySelectorAll('.el')].sort(() => rN(-1, 1));

const stop = setInterval(() => {
    if(!ELEMENTS.length){
        clearInterval(stop);
        alert('The end of the game');
        return;
    }
    const c = rC();
    const el = ELEMENTS.shift();
    el.style.backgroundColor = c;

}, 1000);