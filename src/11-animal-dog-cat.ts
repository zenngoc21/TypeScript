// Bai 11: Base class Animal. Extend Dog va Cat voi bark() va meow()
class Animal {
  constructor(protected name: string) {}
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name}: Gau gau!`);
  }
}

class Cat extends Animal {
  meow(): void {
    console.log(`${this.name}: Meo meo!`);
  }
}

// Demo
const dog1 = new Dog("Milu");
const cat1 = new Cat("Mimi");
dog1.bark();
cat1.meow();

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
