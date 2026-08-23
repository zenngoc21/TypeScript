// Bai 1: Class Person voi thuoc tinh name, age va phuong thuc hien thi thong tin
class Person {
  constructor(protected name: string, protected age: number) {}

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Demo
const p1 = new Person("Nguyen Van A", 25);
p1.display();

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
