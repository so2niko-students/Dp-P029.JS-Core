(function(){
    function getTwoDigitNumber(n){
        return n > 9 ? n : `0${n}`;
    }
    
    const TIME = {
        hours : document.querySelector('.hours'),
        minutes : document.querySelector('.minutes'),
        seconds : document.querySelector('.seconds')
    }
    
    function timeIs() {
        let date = new Date();
    
        TIME.hours.innerHTML = getTwoDigitNumber(date.getHours());
        TIME.minutes.innerHTML = getTwoDigitNumber(date.getMinutes())
        TIME.seconds.innerHTML = getTwoDigitNumber(date.getSeconds());
    }
    
    setInterval(() => timeIs(), 1000);
})();

//IIFE - Immediately Invoked Function Expression