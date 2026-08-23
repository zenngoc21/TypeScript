// Bai 16: Generic class Box co the luu bat ky kieu du lieu nao
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }

  setContent(content: T): void {
    this.content = content;
  }
}

// Demo
const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Xin chao");
console.log(numberBox.getContent());
console.log(stringBox.getContent());

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
