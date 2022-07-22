/**
 * Шаблон для велосипед
 * - вага(число)
 * - тип коліс(карбон, алюміній, залізо, аеродинамічне)
 * - розмір(S, M, L, XL, XXL, XXXL)
 * - тип велосипеда(MTB, Road, City, Child, Electro)
 * - рік випуску
 * - кількість передач
 * + розрахувати вік велосипеда 
 * + розрахувати максимальну швидкість
 */

class Bike{
    static count = 0;
    #wheelsType = 'Aluminium';
    #size;
    #type;
    #year;
    #gear = 1;
    constructor(year, size, type){
        //Поки що без перевірок
        this.#year = year;
        this.#size = size;
        this.#type = type;

        Bike.count++;
    }

    get age(){
        const now = (new Date()).getFullYear();
        return now - this.#year;
    }

    get maxSpeed(){
        return this.#gear * 3 + 10;
    }

    print(){
        const text = `${this.#type} cycle, created in ${ this.#year } for ${this.#size } size. It has ${ this.#gear } gears and has ${ this.#wheelsType } wheels. It has ${ this.maxSpeed } km/h maximum speeed.`;

        console.info(text);
    }

}

const c = new Bike(2000, 'XL', 'Road');
c.print();
console.log(Bike.count);
console.log(Bike.count == c.count);
console.log(c);