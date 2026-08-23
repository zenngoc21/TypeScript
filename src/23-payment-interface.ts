
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

const payments: Payment[] = [new CashPayment(), new CardPayment()];
payments.forEach((p) => p.pay(100));

export {};
