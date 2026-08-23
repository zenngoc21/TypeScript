// Bai 17: Singleton Logger class ghi log ra console
class Logger {
  private static instance: Logger;

  // Constructor private de ngan tao instance tu ben ngoai
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

// Demo
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Ung dung da khoi dong");
console.log(`logger1 === logger2: ${logger1 === logger2}`); // true, chi co 1 instance

export {}; // Bien file nay thanh module de tranh xung dot ten class giua cac file
