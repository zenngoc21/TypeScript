// Bai 10: Class Account voi public, private va readonly fields
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

// Demo
const acc = new Account("admin", "12345", "ACC-001");
console.log(`Username: ${acc.username}`);
console.log(`Account ID: ${acc.accountId}`);
console.log(`Password dung: ${acc.checkPassword("12345")}`);
// acc.password  -> Loi: 'password' la private, khong truy cap duoc tu ben ngoai
// acc.accountId = "ACC-002" -> Loi: 'accountId' la readonly

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
