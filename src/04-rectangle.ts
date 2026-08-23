// Bai 4: Class Rectangle voi width, height, tinh dien tich va chu vi
class Rectangle {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Demo
const rect = new Rectangle(5, 3);
console.log(`Area: ${rect.area()}`);
console.log(`Perimeter: ${rect.perimeter()}`);

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
