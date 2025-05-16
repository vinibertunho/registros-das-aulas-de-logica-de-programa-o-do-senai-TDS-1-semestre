let valorPago;
let valorCobrado;
let troco;

valorPago = 25
valorCobrado = 15

troco = valorPago-valorCobrado;

if (valorPago> valorCobrado) {
    console.log(`Troco de ${troco}`);
    console.log('obrigado pela compra');
    

    
}else {
    console.log('obrigado pela compra');
    
}

        //questão 2

let TC;
let fht;

TC = 20

fht = TC /5 *9 +32

console.log(`${TC}° em Fahrenheit é ${fht}`);

//questao 3

let escolheAno;
let diasAno;

escolheAno = 2035
diasAno = 365
if (diasAno == 366) {
    console.log(`o ano ${escolheAno} é bissexto`);
    
} else {
    console.log(`o ano ${escolheAno} não é bissexto`);
    
}

 // questão 04

 let notas1 = 9;
 let notas2 = 2;
 let nota3 = 9;
 let mediaSomada;
 let mediaFinal;
 let mediaParaSerAprovado
mediaSomada = notas1 + notas2 + nota3
mediaFinal = mediaSomada / 3

if (mediaFinal>= 6){
    console.log(`Parabens você foi aprovado!! sua nota foi ${mediaFinal}`);
    
} else {
    console.log(`Que pena!! você foi Reprovado sia nota foi ${mediaFinal}`);
    
}

//questao 05

let minutosTotais;
let horas;

minutosTotais = 150
horas = minutosTotais / 60

    console.log(`${minutosTotais} é igual a ${horas} horas`);
    
 
    // questão 06

    let valorDoProduto;
    let Desconto
    let valorComDesconto;

    valorDoProduto = 150;
    Desconto = 20;
    valorComDesconto = valorDoProduto - (valorDoProduto * Desconto / 100);
    console.log(`O valor do produto vai ser ${valorComDesconto}`);

    //questão 07

    let numero;
    let verificacaoSeONumeroEdivisivelPor2;

    numero = 24
    verificacaoSeONumeroEdivisivelPor2 = numero % 2

    if (verificacaoSeONumeroEdivisivelPor2 == 0) {
    console.log(`O numero ${numero} é duivisuvel por 2`);
    
    } else {
        log(`o numero ${numero} não é divisivel por 2`)
    }
    
    //questao 08

    let palavra;
    let contarVogais;

    palavra = 'paralelepipedo'
    contarVogais = palavra.match(/[aeiou]/gi).length
    console.log(`a palavra ${palavra} tem ${contarVogais} vogais`)

    //questao 09

    let peso;
    let altura;
    let IMC;

    peso = 105
    altura = 2.10
    IMC = peso / (peso * altura)
    console.log(`o IMC é ${IMC}`)
        

    //questao10

    let senha
    let confirmaSenhaForte

    senha = '4747474'
    
    if (senha.length >= 8) {
        console.log('senha forte');
    } else {
        console.log('colocar uma senha mais forte');
    }


    //questao11

    let kmRodados;
    let combustivelGasto;

    kmRodados = 135
    combustivelGasto = 27
    console.log (`o consumo de combustivel foi de ${kmRodados/combustivelGasto} km/l`)

    //questao 12

    let idade;
    let idadeEmDias;

    idade = 47
    idadeEmDias = idade * 365
   console.log(`a idade em dias é ${idadeEmDias}`);

   //questao13

   let valorInicial;
   let taxaDeJuros;
   let tempo;

   valorInicial = 1500
   taxaDeJuros = 0.05
   tempo = 5

   console.log(`o valor final é ${valorInicial * (1 + taxaDeJuros) ** tempo}`);

   //quetao 14

   let numero1;
   let numero2;
   let numero3;
   let numeroMaior;

   numero1 = 30
   numero2 = 31
   numero3 = 88
   numeroMaior = Math.max(numero1, numero2, numero3)
   console.log(`o maior numero é ${numeroMaior}`);

   //questao 15

   let receberNumero
   let verificarSeEImpar

   receberNumero = 21
   
   verificarSeEImpar = receberNumero  % 2
    

   if (verificarSeEImpar == 1) {
    console.log(`os numeros ${receberNumero} são impar`)
    

   } else {
    console.log(`os numeros ${receberNumero} nao sao impar`);
    
   }




//questao 16

let receberPrecoProduto1 = 34
let receberPrecoProduto2 = 23
let receberPrecoProduto3 = 19
let receberPrecoProduto4 = 29
let verificarMelhorCusto;
verificarMelhorCusto = Math.min(receberPrecoProduto1, receberPrecoProduto2, receberPrecoProduto3, receberPrecoProduto4)

console.log(`o melhor preço é ${verificarMelhorCusto}`);

//questao 17

let lado1 = 30
let lado2 = 43
let perimetro = lado1 + lado2

console.log(`o resultado do retangulo é ${perimetro}`);

// questao 18

let distanciaViagem = 350
let velocidade = 120
let tempoViagem = distanciaViagem / velocidade

console.log(`o tempo estimado da viagem sera de ${tempoViagem} horas`);


//questao 19

let listaDoSorteio = 40
let numerosSorteados = 5

if (listaDoSorteio == 40 && numerosSorteados == 5) {
    console.log('parabéns você ganhou o sorteio');
    
}


//questao 20

let receberNotaNumerica1 = 10
let notaEmLetra

if (receberNotaNumerica1 >= 9 && receberNotaNumerica1 <= 10) {
    notaEmLetra = 'A'
} else if (receberNotaNumerica1 >= 8 && receberNotaNumerica1 < 9) {
    notaEmLetra = 'B'
} else if (receberNotaNumerica1 >= 7 && receberNotaNumerica1 < 8) {
    notaEmLetra = 'C'
} else if (receberNotaNumerica1 >= 6 && receberNotaNumerica1 < 7) {
    notaEmLetra = 'D'
} else if (receberNotaNumerica1 >= 0 && receberNotaNumerica1 < 6) {
    notaEmLetra = 'F'
} 
    console.log(`a nota em letra é ${notaEmLetra}`);
    
    




