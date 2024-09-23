# Design Patterns in TypeScript

This repository demonstrates six software design patterns implemented in TypeScript, categorized into Behavioral, Creational, and Structural patterns.

## 1. Behavioral Design Patterns

### a. Observer Pattern

**Use Case**: A weather station that notifies multiple displays when the temperature changes.

- **Classes**: `WeatherStation`, `Display`
- **Key Interfaces**: `Subject`, `Observer`

### b. Strategy Pattern

**Use Case**: A shopping cart that can switch between different payment methods.

- **Classes**: `ShoppingCart`, `CreditCardPayment`, `PhonePePayment`
- **Key Interface**: `PaymentStrategy`

## 2. Creational Design Patterns

### a. Singleton Pattern

**Use Case**: A single instance database connection across the application.

- **Class**: `DatabaseConnection`

### b. Factory Method Pattern

**Use Case**: A system to create different document types (PDF, Word).

- **Classes**: `PDFCreator`, `WordCreator`, `PDFDocument`, `WordDocument`
- **Key Interface**: `CustomDocument`

## 3. Structural Design Patterns

### a. Adapter Pattern

**Use Case**: Integrating a third-party weather API with a weather app.

- **Classes**: `ThirdPartyWeatherAPI`, `WeatherAdapter`, `WeatherApp`

### b. Decorator Pattern

**Use Case**: Enhancing a coffee order with additional ingredients like milk and sugar.

- **Classes**: `SimpleCoffee`, `Milk`, `Sugar`
- **Key Interface**: `Coffee`

## How to Run

1. **Install Dependencies**: `npm install`
2. **Run the Code**: Use `tsc -b` to build, and then, use `node dist/<filename.ts>` to run individual files.
