// Bai 15: Class Library luu tru Book va User, co method them sach
class Book {
  constructor(public title: string, public author: string) {}
}

class User {
  constructor(public name: string) {}
}

class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Da them sach: ${book.title}`);
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`Da them nguoi dung: ${user.name}`);
  }

  listBooks(): void {
    console.log("Danh sach sach:");
    this.books.forEach((b) => console.log(`- ${b.title} boi ${b.author}`));
  }
}

// Demo
const library = new Library();
library.addBook(new Book("Clean Code", "Robert Martin"));
library.addUser(new User("Vo Thi G"));
library.listBooks();

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
