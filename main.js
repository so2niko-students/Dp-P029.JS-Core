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

class Dich{
    static diches = [];
    static score = 0;
    static scoreDOM = document.querySelector('.counter');
    static updateScore(){
        Dich.scoreDOM.innerText = Dich.score;
    }
    x = 0;
    y = 0;
    speed = 5;
    deathColor = 'green';
    constructor(parentSelector = 'body'){
        this.parent = document.querySelector(parentSelector);
        this.createSelf();
    }

    createSelf(){
        this.el = document.createElement('div');
        this.el.classList.add('dich');
        this.x = this.rand(0, 1000);
        this.y = this.rand(0, 1000);
        this.parent.appendChild(this.el);
        this.move();

        this.timer = setInterval(() => {
            this.move();
        }, 100);

        this.el.addEventListener('click', () => {
            clearInterval(this.timer);
            this.el.style.backgroundColor = this.deathColor;
            Dich.score++;
            Dich.updateScore();
            Dich.diches.push(new Dich(), new Dich());
        })
    }

    move(){
        this.randPosition();
        this.el.style.left = `${ this.x }px`;
        this.el.style.top = `${ this.y }px`;
    }

    randPosition(){
        this.x += this.rand(0, 10) > 5 ? this.speed : -this.speed;
        if(this.x < 0) this.x = 0;
        this.y += this.rand(0, 10) > 5 ? this.speed : -this.speed;
        if(this.y < 0) this.y = 0;
    }
    

    rand(from = 0, to = 100){
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
}

Dich.diches = (Array(10)).fill(0).map(() => new Dich());
console.log(Dich.diches);