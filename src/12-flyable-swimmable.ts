
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly(): void {
    console.log("Chim dang bay tren troi");
  }
}

class Fish implements Swimmable {
  swim(): void {
    console.log("Ca dang boi duoi nuoc");
  }
}

class Duck implements Flyable, Swimmable {
  fly(): void {
    console.log("Vit dang bay");
  }
  swim(): void {
    console.log("Vit dang boi");
  }
}

const bird1 = new Bird();
const fish1 = new Fish();
const duck1 = new Duck();
bird1.fly();
fish1.swim();
duck1.fly();
duck1.swim();

export {};
