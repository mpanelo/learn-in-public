// if you declare the variable and initialize it on the same line, Typescript will infer the type.
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


/* freestyling */
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((prev, curr) => {
    return prev + curr
}, 0);

console.log("Average =", sum / 2);

// When to use annotations
// 1) Function returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] == "green") {
        foundWord = true;
        break;
    }
}

// 3) Variable whose type cannot be inferred correctly
numbers = [-1, 20, 0];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
