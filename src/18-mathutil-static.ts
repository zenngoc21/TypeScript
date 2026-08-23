// Bai 18: Static class MathUtil voi add(), subtract(), multiply(), divide()
class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Khong the chia cho 0");
    }
    return a / b;
  }
}

// Demo
console.log(MathUtil.add(5, 3));
console.log(MathUtil.subtract(5, 3));
console.log(MathUtil.multiply(5, 3));
console.log(MathUtil.divide(6, 3));

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
