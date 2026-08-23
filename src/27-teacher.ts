// Bai 27: Class Teacher ke thua Person, them subject va method introduce
class Person {
  constructor(protected name: string, protected age: number) {}
}

class Teacher extends Person {
  constructor(name: string, age: number, private subject: string) {
    super(name, age);
  }

  introduce(): void {
    console.log(`Toi la ${this.name}, ${this.age} tuoi, day mon ${this.subject}`);
  }
}

// Demo
const teacher1 = new Teacher("Co Lan", 35, "Toan");
teacher1.introduce();

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
