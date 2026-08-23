
abstract class Shape {
  abstract area(): number;

  describe(): void {
    console.log(`Dien tich: ${this.area().toFixed(2)}`);
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const square1 = new Square(4);
const circle1 = new Circle(3);
square1.describe();
circle1.describe();

export {};
