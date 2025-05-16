let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let totalDesconto = 0;
let somaPrecosAposDesconto = 0;
let tamanho = precos.length;

let precosDesconto = [];

for (let i = 0; i < tamanho; i++) {
  if (precos[i] > 100) { // Usei o if para calcular os 10% e ver o total de descontos
    let desconto = precos[i] * 0.1; 
    precosDesconto[i] = precos[i] - desconto; 
    totalDesconto += desconto; 
  } else {
    precosDesconto[i] = precos[i]; // mantém o preço original
  }
  somaPrecosAposDesconto += precosDesconto[i]; // soma o preço (com ou sem desconto)
}

// calcula o valor médio dos produtos após os descontos
let mediaPrecosAposDesconto = somaPrecosAposDesconto / tamanho;

console.log("Preços com desconto aplicado:", precosDesconto);
console.log("Total perdido com descontos:", totalDesconto.toFixed(2));
console.log(
  "Valor médio dos produtos após descontos:",
  mediaPrecosAposDesconto.toFixed(2)
);
