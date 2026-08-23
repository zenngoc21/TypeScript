class Person {
  constructor(protected name: string, protected age: number) {}

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const p1 = new Person("Nguyen Van A", 25);
p1.display();

export {};
