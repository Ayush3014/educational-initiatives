// Behavioral Design Pattern

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number): void {
    this.temperature = temp;
    this.notify();
  }
}

interface Observer {
  update(temperature: number): void;
}

class Display implements Observer {
  update(temperature: number): void {
    console.log(`Current temperature: ${temperature}°C`);
  }
}

// Usage
const weatherStation = new WeatherStation();
const display1 = new Display();
const display2 = new Display();

weatherStation.attach(display1);
weatherStation.attach(display2);

weatherStation.setTemperature(25);
