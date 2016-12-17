class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}
const message = 'Hello World';
const sayHi = (message: string) => {
    console.log(message);
}
Startup.main();
sayHi(message);

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi = function () {
        setTimeout(() => {
            console.log("Hi, my name is " + this.name);
        }, 1000);
    }
}
const personName: string = "Bob";
var aPerson = new Person(personName);
aPerson.sayHi();