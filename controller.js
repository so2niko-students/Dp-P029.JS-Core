import Model from "./model.js";
import View from "./view.js";

export default class Controller{
    constructor(){
        this.model = new Model();     
        this.view = new View(this.onStart.bind(this), this.onStop, () => this.onPause(), this.onCircle); 
    }

    onStart(){
        this.model.stopTimer();
        this.model.interval = setInterval(() => {
            const time = this.model.tick();
            this.view.renderTime(time);
        }, 10);
    }

    onStop = () => {
        this.model.stopTimer();
        this.model.clearData();
    }

    onPause(){
        this.model.stopTimer();
    }

    onCircle = () => {
        const circles = this.model.addCircle();
        this.view.renderCircles(circles);
    }
}