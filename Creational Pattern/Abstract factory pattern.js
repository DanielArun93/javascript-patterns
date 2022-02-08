// Abstract Factory pattern

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

class SUV {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class Suvfactory {
    createCar(type) {
        switch(type) {
            case 'cx5':
                return new Car(4, 'V9', 'yellow');
            case 'ubuntu':
                return new Car(2, 'C6', 'blue');
        }
    }
}

const carFactory = new Carfactory();
const SUVfactory = new Suvfactory();

//Abstract Method
const AutoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carfactory.createCar(model);
        case 'suv':
            return SUVfactory.createCar(model);
    }
}

const cx5 = AutoManufacturer('suv', 'cx5');

console.log(cx5);