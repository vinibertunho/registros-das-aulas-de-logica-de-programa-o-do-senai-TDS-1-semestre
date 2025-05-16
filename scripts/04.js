let TemperaturaCelcius = [0, 10, 20, 30, 40];
let TemperaturaFahrenheit = [];

for (let i = 0; i < TemperaturaCelcius.length; i++) {
  // Usei o for para transformar celcius em fahrenehit
  const celcius = TemperaturaCelcius[i];
  const fahrenheit = (celcius * 9) / 5 + 32;
  TemperaturaFahrenheit[i] = fahrenheit;
}

console.table(TemperaturaCelcius);
console.table(TemperaturaFahrenheit);
