export default class Model{
    interval;
    milliseconds = 0;
    circles = [];

    stopTimer(){
        clearInterval(this.interval);
    }

    clearData(){
        this.milliseconds = 0;
    }

    addCircle(){
        this.circles.push(this.getTime());
        return this.circles;
    }

    tick(){
        this.milliseconds++;
        return this.getTime();
    }

    getTime(){
        const m = ~~(this.milliseconds / 6000);
        const s = ~~((this.milliseconds % 6000) / 100);
        const ms = this.milliseconds % 100;
        return [m, s, ms];
    }
}