// Singleton Log Class
// log method
// Can have multiple methods

class Log {
  private static instance: Log;

  private constructor() {}

  private static _logMessage: string;

  public static initializeLogging(): Log {
    if (!Log.instance) {
      Log.instance = new Log();
    }
    return Log.instance;
  }

  public logMessage(message: string) {
    Log._logMessage = message;
    console.log(`${Log._logMessage}`);
  }
}

let logger = Log.initializeLogging();

logger.logMessage("Message");

// Application is tightly coupled with the log class
class Application {
  constructor(private logger: Log) {}

  public run(): void {
    this.logger.logMessage("The application is runnning");
  }
}

let app: Application = new Application(logger);
app.run();
