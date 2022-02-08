// Singleton Pattern - Only one instance can be created from a class at a time. If there is a instance already 
// then it will be returned.Otherwise it will create.
let instance = null;

class Car {
    constructor(doors, engine, color) {
        if(!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
    }
}

const SUV = new Car(4, 'V5', 'black');
const ferrari = new Car(2, 'B4', 'yellow');

console.log(SUV);
console.log(ferrari);
