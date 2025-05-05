interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
  render(): void {
    console.log("Render a button in Windows style");
  }
  onClick(f: Function): void {
    console.log("Click a button in Windows style");
    f();
  }
}

class WindowsCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in Windows style");
  }

  public toggle(): void {
    this.button.onClick(() => {
      console.log("Toggle a checkbox in Windows style");
    });
  }
}

class MacOSButton implements Button {
  render(): void {
    console.log("Render a button in MacOS style");
  }
  onClick(f: Function): void {
    console.log("Click a button in MacOS style");
    f();
  }
}

class MacOSCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in MacOS style");
  }

  public toggle(): void {
    this.button.onClick(() => {
      console.log("Toggle a checkbox in MacOS style");
    });
  }
}

class WindowsFactory implements GUIFactory {
  public createButton(): Button {
    return new WindowsButton();
  }

  public createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button);
  }
}

class MacOSFactory implements GUIFactory {
  public createButton(): Button {
    return new MacOSButton();
  }

  public createCheckbox(button: Button): Checkbox {
    return new MacOSCheckbox(button);
  }
}

// Client code

function renderUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => {
    console.log("Click a button in MacOS style");
  });

  checkbox.toggle();
}

renderUI(new WindowsFactory());
renderUI(new MacOSFactory());
