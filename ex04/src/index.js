class Pets {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    walk(numberOfLegs) {
        console.log('${this,_name} is walking on ${this._legs');
    }

}
class Dog extends Pets {
    constructor(name, legs) {
        super(name);
        this.legs = legs;
    }
    bark() {
        let dogSay = "Pujdo says WUF-WUF";
        return dogSay;
    }
}
let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());
module.exports = {
    Pets,
    Dog
}