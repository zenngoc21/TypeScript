// Bai 28: Class Animal voi protected method makeSound(). Dog va Cat override
class Animal {
  constructor(protected name: string) {}

  protected makeSound(): string {
    return "...";
  }

  // Method public de kich hoat makeSound() tu ben ngoai
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

// Demo
const dog1 = new Dog("Milu");
const cat1 = new Cat("Mimi");
dog1.speak();
cat1.speak();
// dog1.makeSound() -> Loi: 'makeSound' la protected, khong goi truc tiep tu ben ngoai

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
