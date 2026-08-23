// Bai 6: Class Book voi title, author, year
class Book {
  constructor(private title: string, private author: string, private year: number) {}

  display(): void {
    console.log(`"${this.title}" - ${this.author} (${this.year})`);
  }
}

// Demo
const book1 = new Book("Doc Manh Va Nhanh", "Nguyen Van C", 2020);
book1.display();

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
