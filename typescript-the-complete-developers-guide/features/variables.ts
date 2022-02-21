let apples: number = 5;
let speed: string = "fast";
let found: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;


// built-in objects
let now: Date = new Date();

let colors: string[] = ["red", "green", "blue", ];
let myNumbers: number[] = [1, 2, 3,];
let truths: boolean[] = [true, false, true, false];

colors.forEach(color => console.log(color));

class Car {
}

let car: Car = new Car();

// object literals
let point: {x: number; y: number} = {
    x: 10,
    y: 10,
};

// functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};