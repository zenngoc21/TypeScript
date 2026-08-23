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

  displayAll(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const s1 = new Student("Tran Thi B", 20, 9);
s1.displayAll();

export {};
