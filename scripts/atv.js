let amigos = ["Bertunho", "Alves", "Bryan", "Ferian", "Felipin"];
console.table(amigos);
let gastosIndividuais = [25, 75, 30, 55, 45];

let gastoTotal = 0;
let soma = 0;

for (let i = 0; i < gastosIndividuais.length; i++) {
  soma += gastosIndividuais[i];
}

console.log(`gasto total: ${soma}`);

let valorMedio = soma / amigos.length;

console.log(`Valor medio: ${valorMedio}`);

for (let i = 0; i < amigos.length; i++) {
  let gastos = 0;

  gastos = valorMedio - gastosIndividuais[i];

  console.log(`${amigos[i]} gastou:  ${gastos} em relação a media`);
}
