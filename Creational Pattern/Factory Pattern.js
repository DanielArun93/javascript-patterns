// Factory Pattern - In a large projects , need to create multiple objects quickly with customized default values

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class Carfactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V8', 'red');
            case 'honda':
                return new Car(2, 'b6', 'green');
        }
    }
}

const factory = new Carfactory();
const SUV = factory.createCar('civic');

console.log(SUV);