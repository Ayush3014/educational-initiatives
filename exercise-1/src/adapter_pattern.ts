// Structural Design Pattern

class ThirdPartyWeatherAPI {
  getWeatherData(): { temp: number; humidity: number; pressure: number } {
    return { temp: 25, humidity: 60, pressure: 1013 };
  }
}

class WeatherApp {
  displayWeather(temperature: number, humidity: number): void {
    console.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%`);
  }
}

class WeatherAdapter {
  constructor(private api: ThirdPartyWeatherAPI) {}

  getFormattedData(): { temperature: number; humidity: number } {
    const data = this.api.getWeatherData();
    return {
      temperature: data.temp,
      humidity: data.humidity,
    };
  }
}

// Usage
const thirdPartyApi = new ThirdPartyWeatherAPI();
const adapter = new WeatherAdapter(thirdPartyApi);
const weatherApp = new WeatherApp();

const formattedData = adapter.getFormattedData();
weatherApp.displayWeather(formattedData.temperature, formattedData.humidity);
