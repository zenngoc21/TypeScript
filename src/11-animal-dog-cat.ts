
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

const dog1 = new Dog("Milu");
const cat1 = new Cat("Mimi");
dog1.bark();
cat1.meow();

export {};
