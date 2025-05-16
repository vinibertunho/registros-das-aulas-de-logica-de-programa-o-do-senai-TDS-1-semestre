let dias = ["domingo", "seg", "ter", "qua", "qui", "sex", "sabado"];
console.table(dias);
let temperatura = [28, 31, 27, 29, 30, 32, 33];
let maiorDia = "";
let menorDia = "";
console.table(temperatura);
let soma = 0;
for (let i = 0; i < temperatura.length; i++) {
  soma += temperatura[i];
}
console.log(`tempertura total da semana: ${soma}`);

let temperaturaMediaDaSemana = soma / dias.length;
console.log(`a media da temperatura da semana é: ${temperaturaMediaDaSemana}`);

let tempMaxima = temperatura[0];
for (let i = 0; i < temperatura.length; i++) {
  if (temperatura[i] > tempMaxima) {
    tempMaxima = temperatura[i];
    maiorDia = dias[i];
  }
}

console.log(
  `a maior temperatura foi de: ${tempMaxima}°C, ela anconteceu no ${maiorDia}`
);

let tempMinima = temperatura[0];
for (let i = 0; i < temperatura.length; i++) {
  if (temperatura[i] < tempMinima) {
    tempMinima = temperatura[i];
    menorDia = dias[i];
  }
}

console.log(
  `a menor temperatura foi de: ${tempMinima}°C, ela anconteceu na ${menorDia}`
);
