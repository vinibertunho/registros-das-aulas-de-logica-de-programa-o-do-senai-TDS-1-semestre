let notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let mediaTurma = 0;
let acimaDaMedia = 0;
let abaixoDaMedia = 0;
for (let i = 0; i < notas.length; i++) {
  // usei o for para somar as notas da sala
  mediaTurma += notas[i] / 10;
  if (notas[i] >= 7.75) {
    // o if foi para comparar as medias
    acimaDaMedia++;
  } else {
    abaixoDaMedia++;
  }
}

console.log(`${mediaTurma}`);
console.log(
  `a quantidade de pessoas que estão acima da media são ${acimaDaMedia}`
);
console.log(
  `a quantidade de pessoas que estão abaixo da media são ${abaixoDaMedia}`
);
