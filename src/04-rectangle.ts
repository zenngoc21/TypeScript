
class Rectangle {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(5, 3);
console.log(`Area: ${rect.area()}`);
console.log(`Perimeter: ${rect.perimeter()}`);

export {};
