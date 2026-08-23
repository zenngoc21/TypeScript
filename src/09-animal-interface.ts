// Bai 9: Interface Animal voi name va method sound()
interface Animal {
  name: string;
  sound(): string;
}

// Demo: mot doi tuong tuan theo interface Animal
class Dog implements Animal {
  constructor(public name: string) {}

  sound(): string {
    return "Gau gau!";
  }
}

const dog1: Animal = new Dog("Loc");
console.log(`${dog1.name} keu: ${dog1.sound()}`);

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
