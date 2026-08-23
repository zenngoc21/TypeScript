// Bai 21: Generic Repository class voi add(), getAll()
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

// Demo
interface Task {
  title: string;
  done: boolean;
}

const taskRepo = new Repository<Task>();
taskRepo.add({ title: "Hoc TypeScript", done: false });
taskRepo.add({ title: "Lam bai tap OOP", done: true });
console.log(taskRepo.getAll());

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
