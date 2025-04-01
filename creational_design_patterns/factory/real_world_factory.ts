abstract class PaymentProcessor {
  constructor(public amount: number) {}
  abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing paypal payment of ${this.amount}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing stripe payment of ${this.amount}`);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processing bank transfer payment of ${this.amount}`);
  }
}

class PaymentProcessorFactory {
  public createprocessor(
    type: "paypal" | "stripe" | "banktransfer",
    amount: number
  ): PaymentProcessor {
    switch (type) {
      case "paypal":
        return new PaypalProcessor(amount);
      case "stripe":
        return new StripeProcessor(amount);
      case "banktransfer":
        return new BankTransferProcessor(amount);
    }
  }
}

const processorFactory = new PaymentProcessorFactory();
const paypal = processorFactory.createprocessor("paypal", 100);
paypal.processPayment();
