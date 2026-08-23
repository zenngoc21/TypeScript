// Bai 8: Class Product voi name, price. Mang product va loc gia > 100
class Product {
  constructor(public name: string, public price: number) {}
}

// Demo
const products: Product[] = [
  new Product("Ban phim", 120),
  new Product("Chuot", 80),
  new Product("Man hinh", 250),
  new Product("Tai nghe", 60),
];

const expensiveProducts = products.filter((p) => p.price > 100);
console.log("San pham co gia > 100:");
expensiveProducts.forEach((p) => console.log(`- ${p.name}: ${p.price}`));

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
