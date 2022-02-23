const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

let pepsi: Drink = ["brown", true, 40];

// Cannot dynamically add elements to tuple
// pepsi = ["brown", true, 30, 0];

// Cannot disrupt defined order
// pepsi[0] = 10;

// Harder to understand what values represent at a glance when using a tuple
const carSpecs: [number, number] = [20139, 2016];

const carStats = {
  horsepower: 100,
  weight: 3342,
};
