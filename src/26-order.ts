// Bai 26: Class Order voi danh sach san pham, method tinh tong tien
class Product {
  constructor(public name: string, public price: number) {}
}

class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

// Demo
const order = new Order();
order.addProduct(new Product("Ao thun", 150));
order.addProduct(new Product("Quan jean", 300));
console.log(`Tong tien don hang: ${order.getTotal()}`);

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
