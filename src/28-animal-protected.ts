
class Animal {
  constructor(protected name: string) {}

  protected makeSound(): string {
    return "...";
  }

  speak(): void {
    console.log(`${this.name}: ${this.makeSound()}`);
  }
}

class Dog extends Animal {
  protected override makeSound(): string {
    return "Gau gau!";
  }
}

class Cat extends Animal {
  protected override makeSound(): string {
    return "Meo meo!";
  }
}

const dog1 = new Dog("Milu");
const cat1 = new Cat("Mimi");
dog1.speak();
cat1.speak();

export {};
