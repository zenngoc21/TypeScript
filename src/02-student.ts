// Bai 2: Class Student ke thua Person, them thuoc tinh grade
class Person {
  constructor(protected name: string, protected age: number) {}

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, private grade: number) {
    super(name, age);
  }

  // Override / mo rong phuong thuc de hien thi day du thong tin
  displayAll(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

// Demo
const s1 = new Student("Tran Thi B", 20, 9);
s1.displayAll();

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
