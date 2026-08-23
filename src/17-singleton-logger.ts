
class Logger {
  private static instance: Logger;

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
console.log(`logger1 === logger2: ${logger1 === logger2}`);

export {};
