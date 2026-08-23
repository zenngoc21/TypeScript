// Bai 29: Interface Movable voi move(). Implement trong Car va Robot
interface Movable {
  move(): void;
}

class Car implements Movable {
  move(): void {
    console.log("Xe hoi di chuyen bang banh xe tren duong");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot di chuyen bang chan co khi");
  }
}

// Demo
const movables: Movable[] = [new Car(), new Robot()];
movables.forEach((m) => m.move());

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
