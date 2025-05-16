//questao 1

let valor = 540;
let EhDiaPromocao = true;
let temCartaoFidelidade = true;
let percentualDesconto = 0;

if (valor >= 540) {
  percentualDesconto += 10;
  console.log("Compra acima de R$200. Você ganhou 10% de desconto");
}
if (EhDiaPromocao) {
  percentualDesconto += 15;
  console.log("hoje é dia de promoção. Você ganhou 15% de desconto");
}
if (temCartaoFidelidade) {
  percentualDesconto += 5;
  console.log("Você esta usando cartão fidelidade. Você ganhou 5% de desconto");
}

let valorDesconto = valor * (percentualDesconto / 100);
let valorFinal = valor - valorDesconto;

console.log(`valor original: R$${valor.toFixed(2)}`);
console.log(
  `Total desconto: ${percentualDesconto}% (R$${valorDesconto.toFixed(2)})`
);
console.log(`Valor final:R$${valorFinal.toFixed(2)}`);

//02

let idd = 18;
let passouExameTeorico = true;
let passouExamePratico = true;
let elegivel;

if (idd >= 18 && passouExameTeorico && passouExamePratico) {
  elegivel = "aprovado";
} else {
  elegivel = "reprovado";
}

console.log(`${elegivel}`);
