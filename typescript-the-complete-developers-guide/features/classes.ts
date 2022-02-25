class Vehicle {
  //   color: string;

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  // shorthand of the above
  constructor(public color: string) {}

  public drive(): void {
    console.log("chugga chugga");
    this.move();
  }

  public honk(): void {
    console.log("beep");
  }

  protected move(): void {
    console.log("moving...");
  }
}

class Car extends Vehicle {
  constructor(public wheels: string, color: string) {
    super(color);
  }

  public drive(): void {
    this.startDrivingProcess();
    console.log("vroom");
    this.move();
  }

  private startDrivingProcess(): void {
    console.log("starting...");
  }
}

const car = new Car("thicc", "blue");
// car.drive();
console.log(`color: ${car.color}, wheels: ${car.wheels}`);

// const v = new Vehicle("yellow");
// v.drive();
// v.honk();
