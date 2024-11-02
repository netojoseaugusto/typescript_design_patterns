// In this case, it would be better to create 3 interfaces.
interface Machine {
  print(document: Document): void;
  scan(document: Document): void;
  fax(document: Document): void;
}

class MultiFunctionPrinter implements Machine {
  print(document: Document): void {
    console.log("The Machine is printing");
  }
  scan(document: Document): void {
    console.log("The Machine is scanning");
  }
  fax(document: Document): void {
    console.log("The Machine is sending a fax");
  }
}

interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class MultiMachine implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    console.log("The Machine is printing");
  }
  scan(document: Document): void {
    console.log("The Machine is scanning");
  }
  fax(document: Document): void {
    console.log("The Machine is sending a fax");
  }
}
