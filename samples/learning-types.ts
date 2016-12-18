console.log("section 2");
let message: string = 'Hello World';
console.log(0.2 + 0.4);
let counter: number = 0;

let messageRead = true;

// let person: { firstName: string, lastName: string } = {
//     firstName: 'Jeremy',
//     lastName: 'Norton'
// }

// type HasName = {
//     firstName?:string, 
//     lastName: string}

interface HasName {
    firstName?: string,
    lastName: string
}
// let person: HasName = {
//     firstName: 'Jeremy',
//     lastName: 'Norton'
// }

type HasAddress = {
    stringName: string;
}

type Person = {
    name: HasName,
    address?: HasAddress
}

let person: Person = {
    name: { lastName: "Norton" }
}
// let person: any = {
//     firstName: 'Jeremy',
//     lastName: 'Norton'
// }

//person.address = '';

type MessageCreator = (name: string) => string;

function createHelloMessage(name: string): string {
    return `Hello, my name is ${name}`;
}

const creator: MessageCreator = createHelloMessage;
let hello = createHelloMessage;
console.log(hello("Bill"))

let persons: string[] = ['Jeremy', 'Andy', 'Neil'];

type PlayerTuple = [string, number];

let tuple: PlayerTuple = ['Jeremy', 5];

enum PlayerPosition {
    Guard,
    Forward,
    Centre
}

type Player = [string, number];

let jez: Player = ['Jez', PlayerPosition.Guard];
let andy: Player = ['Andy', PlayerPosition.Forward];
let neil: Player = ['Neil', PlayerPosition.Centre];

let players: Player[] = [jez, andy, neil];

console.log(players);

interface Player2 { name: string, position: PlayerPosition };

let jez2: Player2 | null = { name: 'Jez', position: PlayerPosition.Guard };
let andy2: Player2 = { name: 'Andy', position: PlayerPosition.Centre };
let neil2: Player2 = { name: 'Neil', position: PlayerPosition.Forward };
//jez2 = null;
let players2: Player2[] = [jez2, andy2, neil2];

let counters = [0, 1, 2];

function createMessage2(name: string): string {
    if (name) {
        return `Hello, myname is ${name}`;
    }
    return '';
}
console.log(createMessage2("Jez"));

// intersection type
type Player3 = HasName & HasAddress | null;

let player3: Player3 = { firstName: "Magic", lastName: "Johnson", stringName: "Home" }

console.log(player3);
player3 = null;

// const _ = require('lodash');
import * as _ from 'lodash';

const colors = ["Red", "Green", "Blue"];

const firstColor = _.first(colors);
