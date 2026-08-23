
class Car {
  constructor(private brand: string, private model: string, private year: number) {}

  showInfo(): void {
    console.log(`${this.brand} ${this.model} (${this.year})`);
  }
}

const car1 = new Car("Toyota", "Camry", 2023);
car1.showInfo();

export {};
