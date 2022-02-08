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

// mixin - mixins are great ways to add different functions to the instance of the class which is already created
const carMixin = {
    revEngine() {
        console.log(`The ${this.engine} engine is doing Vroom Vroom`);
    }
}

const carFactory = new Carfactory();
const SUVfactory = new Suvfactory();

//Abstract Method
const AutoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return SUVfactory.createCar(model);
    }
}

// const cx5 = AutoManufacturer('suv', 'cx5');
Object.assign(Car.prototype, carMixin);
const honda = AutoManufacturer('car', 'honda');

console.log(honda.revEngine());

// Facade pattern - hiding complexity by creating facade pattern
// rather than creating all the lines in a single file..will create multiple modules and import it in afile
// modular way of rendering components


// Flyweight Pattern
// Same as singleton pattern
// the main theme of this pattern is to create one instance
// because every instance has memory space which affects performance

//Decorator Pattern
// Typescript docs - Decorators


//MVC
//MVP
//MVVM
