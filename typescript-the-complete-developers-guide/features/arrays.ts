const carMakers = ["ford", "toyota", "chevy"];
const numbers: number[] = [];
const dates = [new Date(), new Date()];
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car1 = carMakers.pop();
const car2 = carMakers[0];

// Preventing incompatible values
// carMakers.push(100);

// Help with map, reduce, etc.
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "01-01-2021"];

const ages: (number | string)[] = [1, "2", "3", 4];
ages.push("100");

ages.map((age: string | number): void => {
  console.log(age);
});
