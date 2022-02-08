class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const SUV = new Car(4, 'V6', 'red');

console.log(SUV);