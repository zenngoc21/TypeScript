// Bai 3: Class Car voi brand, model, year
class Car {
  constructor(private brand: string, private model: string, private year: number) {}

  showInfo(): void {
    console.log(`${this.brand} ${this.model} (${this.year})`);
  }
}

// Demo
const car1 = new Car("Toyota", "Camry", 2023);
car1.showInfo();

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
