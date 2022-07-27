export default class Battery{
    #size;
    #capacity;
    #chargeLevel;
    #minLoss;
    #interval;
    #loss = 0;
    constructor(size, capacity, chargeLevel = 100, minLoss = .001){
        this.#size = size;
        this.#capacity = capacity;//mAh
        this.chargeLevel = chargeLevel;
        this.#minLoss = minLoss;

        this.#lifeCycle();
    }

    set chargeLevel(charge){
        if(charge < 0 || charge > 100){
            charge = 0;
        }
        this.#chargeLevel = charge;
    }

    #lifeCycle(){
        this.#interval = setInterval(() => {
            this.#chargeLevel -= (this.#minLoss + this.#loss);
            this.info();
        }, 1000);
    }

    info(){
        console.clear();
        console.log('Charge level: ', this.#chargeLevel);
    }

    on(loss){
        const lossInPerc = (loss / this.#capacity) * 100;
        this.#loss = lossInPerc;
    }

    off(){
        this.#loss = 0;
    }
}