interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,

  summary(): string {
    return `Name: ${this.name}`;
  },
};

const coldDrink = {
  carbonated: false,
  summary(): string {
    return `Carbonated: ${this.carbonated}`;
  },
};

const printSummary = (r: Reportable): void => {
  console.log(r.summary());
};

/*

// Tip: Verbose type annotation can be fixed using interfaces

const printVehicle = (vehicle: {name: string; year: Date; broken: boolean}): void => {
  console.log(vehicle.summary());
};

*/

printSummary(oldCivic);
printSummary(coldDrink);
