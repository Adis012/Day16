class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const personInfo = new Person({name}, {email}, {age});
console.log(personInfo.name);
console.log(personInfo.email);
console.log(personInfo.age);
 module.exports = Person;