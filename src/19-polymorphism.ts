// Bai 19: Minh hoa method overriding va tinh da hinh (polymorphism)
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

// Demo: cung mot loi goi makeSound() nhung ket qua khac nhau tuy vao doi tuong
const animals: Animal[] = [new Dog("Milu"), new Cat("Mimi"), new Animal("Vat gi do")];
animals.forEach((a) => a.makeSound());

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
