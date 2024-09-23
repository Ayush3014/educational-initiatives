// Structural Design Pattern

interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 2;
  }

  description(): string {
    return 'Simple Coffee';
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

class Milk extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.5;
  }

  description(): string {
    return `${this.coffee.description()}, Milk`;
  }
}

class Sugar extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.2;
  }

  description(): string {
    return `${this.coffee.description()}, Sugar`;
  }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.description()}: $${coffee.cost()}`);

coffee = new Milk(coffee);
console.log(`${coffee.description()}: $${coffee.cost()}`);

coffee = new Sugar(new Milk(new SimpleCoffee()));
console.log(`${coffee.description()}: $${coffee.cost()}`);
