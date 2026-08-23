// Bai 14: Base class Employee. Extend Manager va Developer voi phuong thuc rieng
class Employee {
  constructor(protected name: string, protected salary: number) {}

  getInfo(): string {
    return `${this.name} - Luong: ${this.salary}`;
  }
}

class Manager extends Employee {
  manageTeam(): void {
    console.log(`${this.name} dang quan ly doi nhom`);
  }
}

class Developer extends Employee {
  writeCode(): void {
    console.log(`${this.name} dang viet code`);
  }
}

// Demo
const manager1 = new Manager("Pham Van E", 2000);
const dev1 = new Developer("Hoang Thi F", 1800);
console.log(manager1.getInfo());
manager1.manageTeam();
console.log(dev1.getInfo());
dev1.writeCode();

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
