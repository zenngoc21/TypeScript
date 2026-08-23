
class Book {
  constructor(private title: string, private author: string, private year: number) {}

  display(): void {
    console.log(`"${this.title}" - ${this.author} (${this.year})`);
  }
}


const book1 = new Book("Doc Manh Va Nhanh", "Nguyen Van C", 2020);
book1.display();

export {};
