let idades = [17, 21, 16, 25, 19];

  
let maiorDeIdade = 0;
let menorDeIdade = 0;

// loop para verificar cada idade o "i" é do for ele serve para contar
for (let i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    // para comparar as idades d emaior e de menos
    maiorDeIdade++;
  } else {
    menorDeIdade++;
  }
}

console.log("Quantidade de pessoas maiores de idade:", maiorDeIdade);
console.log("Quantidade de pessoas menores de idade:", menorDeIdade);
