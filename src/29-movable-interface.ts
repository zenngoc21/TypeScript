
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

const movables: Movable[] = [new Car(), new Robot()];
movables.forEach((m) => m.move());

export {};
