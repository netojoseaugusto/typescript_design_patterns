interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  public operationA(): string {
    const result = "This is the result of Operation A";
    console.log(result);
    return result;
  }
}

class ProductB implements IProductB {
  public operationB(): string {
    const result = "This is the result of Operation B";
    console.log(result);
    return result;
  }
  public combinedOperation(collaborator: IProductA): string {
    const result =
      this.operationB() + " combined with " + collaborator.operationA();
    console.log(result);
    return result;
  }
}

class Factory implements IFactory {
  public createProductA(): IProductA {
    return new ProductA();
  }
  public createProductB(): IProductB {
    return new ProductB();
  }
}

const factory = new Factory();
const productA = factory.createProductA();
const productB = factory.createProductB();

productA.operationA();
productB.operationB();
