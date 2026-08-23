// Bai 23: Interface Payment voi pay(amount). Implement CashPayment va CardPayment
interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Thanh toan ${amount} bang tien mat`);
  }
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Thanh toan ${amount} bang the`);
  }
}

// Demo
const payments: Payment[] = [new CashPayment(), new CardPayment()];
payments.forEach((p) => p.pay(100));

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
