// Bai 7: Class User voi private property name va getter/setter
class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.trim().length === 0) {
      console.log("Ten khong duoc de trong");
      return;
    }
    this._name = value;
  }
}

// Demo
const user1 = new User("Le Van D");
console.log(user1.name);
user1.name = "Le Van D (da doi ten)";
console.log(user1.name);

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
