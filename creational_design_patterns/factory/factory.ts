abstract class Car {
  constructor(public model: string, public productionYear: number) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year: ${this.year}`
    );
  }
}

class SUV extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, Production Year: ${this.year}`
    );
  }
}

class Hatchback extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year: ${this.year}`
    );
  }
}

class CarFactory {
  public createcar(
    type: "sedan" | "suv" | "hatchback",
    model: string,
    productionYear: number
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.createcar("sedan", "camry", 2023);
sedan.displayCarInfo();
