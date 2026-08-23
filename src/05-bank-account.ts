
class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("So tien nap phai lon hon 0");
      return;
    }
    this.balance += amount;
    console.log(`Da nap ${amount}. So du hien tai: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("So du khong du de rut");
      return;
    }
    this.balance -= amount;
    console.log(`Da rut ${amount}. So du hien tai: ${this.balance}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(`So du cuoi cung: ${account.getBalance()}`);

export {};
