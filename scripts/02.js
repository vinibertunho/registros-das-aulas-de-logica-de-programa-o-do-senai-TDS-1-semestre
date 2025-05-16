// declarando variaveis
let numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let pares = 0;
let impar = 0;
let numerosMaiorQue20 = 0;

for (let i = 0; i < numeros.length; i++) {
  // o for é um loop para contar o array
  if (numeros[i] % 2 == 0) {
    // o if é para comparar e diferenciar os numeros e numeros pares
    pares++;
  } else {
    impar++;
  }
  if (numeros[i] >= 20) {
    numerosMaiorQue20++;
  }
}

console.log("Quantidade de numeros pares são:", pares);
console.log("Quantidade de numeros impares são:", impar);
console.log("Quantidade de numeros maiores que 20 são:", numerosMaiorQue20);
