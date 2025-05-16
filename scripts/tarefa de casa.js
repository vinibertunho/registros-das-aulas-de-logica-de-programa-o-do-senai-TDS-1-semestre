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

//03

let idade = 98;
let EhFeriado = true;
let CartaoDesconto = true;
let precoIngresso = 0;

if (idade <= 10) {
  precoIngresso = 20;
  console.log(`por ser menor que 10 anos paga ${precoIngresso}`);
} else if (idade >= 60) {
  precoIngresso = 25;
  console.log(`por ser maoir que 60 anos voce paga ${precoIngresso}`);
} else {
  preçoIngresso = 40;
}

if (EhFeriado) {
  let acrescimoF = precoIngresso * 0.2;
  precoIngresso += acrescimoF;
  console.log(
    `acrescime de 20%  , pois hoje é feriado +R$ ${acrescimoF.toFixed(2)}`
  );
}

let dd;
if (CartaoDesconto) {
  dd = precoIngresso * 0.15;
  precoIngresso -= dd;

  console.log(
    `Desconto de 15% por ter o cartão: R$ ${precoIngresso.toFixed(2)}`
  );
}

//04

let iddd = 18;
let classificacaoDoFilme = 14;
let acompanhadoResponsavel = true;
let ingresso = true

if (iddd >= 14) {
  console.log("voce pode assistir o filme desta classificação");
} else if (iddd <= 14) {
  console.log("so pode entra acompanhado com os pais");
} else if (acompanhadoResponsavel <= 14) {
  console.log("pode entra voce esta acompanhados com os pais");
}
if (ingresso >=1) {
  console.log('voce tem ingresso');
  
} else {
  console.log('voce não tem ingresso');
  
}

// 05

let pb = 100
let mltcPontos = 4
let completouTempRecord = true
let coletouTodosOsItens = true
pb = pb * mltcPontos
if (completouTempRecord) {
  pb = pb *2
  
}
if (coletouTodosOsItens) {
  pb = pb + 150
  
}
console.log(`o total de pontos somados da partida foi ${pb}`);

// 06

let tempeAtual = 23; 
let preferenciaColorida = false
let preferenciaEstampa = false

if (tempeAtual <=25) {
  console.log(`Hoje esta ${tempeAtual}°`);
}

let ocasiao = 'fasta'
switch (ocasiao) {
  case 'casual' :
    console.log('roupa mais casual pode usar roupas coloridas e com estampas ');
    console.log('camisa , bermuda chinelo total= 80');
    
    
    
    break;

    case 'formal':

    console.log('por uma roupa mais formal roupas mais neutras ');
    console.log ('camisa social, calça alfaiataria, sapato social, rologio, paleto total = 950 ')    
    
    break;

    case 'fasta':
      console.log('por uma roupa de festa dependendo da roupa pode usar colorida e com estampa ');
      console.log('camiseta, short/calça, boné, corrente/ relogio total = 120 ');
      
      break;

  default:
    console.log('nao tem essa opção');
    
    break;
}
