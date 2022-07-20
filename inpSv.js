'use strict';

window.addEventListener('DOMContentLoaded', () => {
    
    const container = document.querySelector('.container'),
          input = document.querySelector('.input_check');
    
    container.insertAdjacentHTML('beforeend', '<button class="btn" type="submit" value="submit">Check</button>');

    const btn = document.querySelector('.btn');
    console.log(btn);

    function checkName(data) {
      return /\d/.test(data);
    }

    btn.addEventListener('click', (ev) => {
        ev.preventDefault();
        
        const str = input.value;
        const checkStr = checkName(str);

        if (checkStr === true) {
            alert('You wrote a number');
        } else {
            alert('correct');
        }
    });

});