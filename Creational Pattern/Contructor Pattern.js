class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class FastCar extends Car {
    constructor(doors, engine, color, wheels) {
        super(doors, engine, color);
        this.wheels = wheels;
    }
}

const SUV = new Car(4, 'V6', 'red');
const ferrari = new FastCar(6, 'v17', 'paleyello', 4);

console.log(SUV);
console.log(ferrari);