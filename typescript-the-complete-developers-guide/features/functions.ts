const add = (a: number, b: number): number => {
  return a + b;
};

const sub = (a: number, b: number): number => {
  return a - b;
};

function div(a: number, b: number): number {
  return a / b;
}

const mult = function (a: number, b: number): number {
  return a * b;
};

console.log("1 + 9 =", add(1, 9));
console.log("1 - 9 =", sub(1, 9));
console.log("9 / 3 =", div(9, 3));
console.log("4 * 3 =", mult(3, 4));

const logger = (msg: string): void => {
  console.log(msg);
  // you can return undefined
  return undefined;
};

// const throwErr = (msg: string): never => {
//     throw new Error(msg);
// };

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
