
// 1.
// const person = {
//     name: `Mitchell`,
//     age: 30
// };

// module.exports = person;

// you could export this
console.log(__filename, __dirname);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greeting() { 
        console.log('My name is ${this.name} and I am ${this.age}')
    }
}

module.exports = Person;