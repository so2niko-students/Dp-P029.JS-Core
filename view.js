export default class View{
    timer = q('.timer');
    startBtn = q('.start');
    stopBtn = q('.stop');
    circleBtn = q('.circle');
    pauseBtn = q('.pause');
    secondsElm = q('#seconds');
    minutesElm = q('#minutes');
    millisecondsElm = q('#milliseconds');
    circleResult = q('.circle-result');

    constructor(onStart, onStop, onPause, onCircle){
        this.startBtn.addEventListener('click', onStart);
        this.pauseBtn.addEventListener('click', onPause);
        this.stopBtn.addEventListener('click', onStop);
        this.circleBtn.addEventListener('click', onCircle);
    }

    clearView(){
        this.minutesElm.innerText = '00';
        this.secondsElm.innerText = '00';
        this.millisecondsElm.innerText = '00';
    }

    renderCircles(circles){
        this.circleResult.innerHTML = circles.reduce((html, time) => {
            const [m, s, ms] = this.getTimeWithZeros(time);
            return `${html} <p>${m}:${s}:${ms}</p>`;
        }, '');        
    }

    renderTime(time){
        const [m, s, ms] = this.getTimeWithZeros(time);
        this.minutesElm.innerText = m;
        this.secondsElm.innerText = s;
        this.millisecondsElm.innerText = ms;
    }

    getTimeWithZeros(time){
        return time.map(t => `0${t}`.slice(-2));
    }
}

function q(selector = 'body'){
    return document.querySelector(selector);
}