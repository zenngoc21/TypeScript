
interface Animal {
  name: string;
  sound(): string;
}

class Dog implements Animal {
  constructor(public name: string) {}

  sound(): string {
    return "Gau gau!";
  }
}

const dog1: Animal = new Dog("Loc");
console.log(`${dog1.name} keu: ${dog1.sound()}`);

export {};
