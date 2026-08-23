class Account {
  public username: string;
  private password: string;
  readonly accountId: string;

  constructor(username: string, password: string, accountId: string) {
    this.username = username;
    this.password = password;
    this.accountId = accountId;
  }

  checkPassword(input: string): boolean {
    return this.password === input;
  }
}


const acc = new Account("admin", "12345", "ACC-001");
console.log(`Username: ${acc.username}`);
console.log(`Account ID: ${acc.accountId}`);
console.log(`Password dung: ${acc.checkPassword("12345")}`);

export {};
