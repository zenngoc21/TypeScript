
class Animal {
  constructor(protected name: string) {}

  makeSound(): void {
    console.log(`${this.name} phat ra am thanh`);
  }
}

class Dog extends Animal {
  override makeSound(): void {
    console.log(`${this.name} sua: Gau gau!`);
  }
}

class Cat extends Animal {
  override makeSound(): void {
    console.log(`${this.name} keu: Meo meo!`);
  }
}

const animals: Animal[] = [new Dog("Milu"), new Cat("Mimi"), new Animal("Vat gi do")];
animals.forEach((a) => a.makeSound());

export {};
