
interface Vehicle {
  brand: string;
  start(): void;
}

class Car implements Vehicle {
  constructor(public brand: string) {}

  start(): void {
    console.log(`Xe hoi ${this.brand} da khoi dong bang chia khoa`);
  }
}

class Bike implements Vehicle {
  constructor(public brand: string) {}

  start(): void {
    console.log(`Xe dap ${this.brand} khong can khoi dong may`);
  }
}

const vehicles: Vehicle[] = [new Car("Honda"), new Bike("Giant")];
vehicles.forEach((v) => v.start());

export {};
