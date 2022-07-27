export default class Phone{
    constructor(name, battery, loss = 10){
        this.name = name;
        this.battery = battery;
        this.battery.on(loss);
    }
}