/*
Você conseguiu um estágio na equipe de marketing de uma loja de aplicativos para celular
e seu primeiro trabalho é analisar os dados dos 10 aplicativos mais baixados do mês.

Os dados são:
Nomes: ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"]
Downloads (em milhões): [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]
Avaliações (de 1 a 5 estrelas): [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]
Categorias: ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]
Seu gerente quer um relatório detalhado com as seguintes informações:

1. Mostre todos os dados em formato de tabela (nome, downloads, avaliação e categoria)
2. Encontre o aplicativo com maior número de downloads e sua categoria
3. Encontre o aplicativo com a melhor avaliação e sua categoria
4. Calcule a média de downloads dos aplicativos
5. Crie um novo array apenas com os nomes dos aplicativos que têm avaliação maior que 4.5
6. Calcule o total de downloads de todos os aplicativos da categoria "Social"
7. Verifique qual categoria tem mais aplicativos no Top 10
Esta análise será apresentada na reunião de marketing na próxima semana e ajudará
a definir as estratégias de promoção da loja.
*/








const aplicativos = ['Tiktok', 'Instagram', 'WhatsApp' , 'Snapchap' , 'Spotify' , 'Netflix' , 'Youtube' , 'VSCO' , 'BeReal' , 'Uber']
const downloads = [2.5 , 2.2, 1.8 , 1.5, 1.3 , 1.2 , 1.1 , 0.9 , 0.8 , 0.7]
const avaliacoes = [4.7 , 4.8 , 4.5 , 3.9 , 4.6 , 4.3 , 4.9 , 4.2 , 3.8 , 4.1]
const categorias = ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]

let maiorNumeroDeDowloads = downloads[0]
let categoriaMaiorDownloads = categorias[0]
let aplicativosMaiorDownloads = aplicativos[0]


let maiorAvaliacao = avaliacoes[0]
let categoriaMaiorAvaliacao = categorias[0]
let aplicativosMaiorAvaliacao = aplicativos[0]



let somaTotalDownloads = 0
let mediaDownloads = 0


let novoArray = [ ]
let contadorDeArray = 0


let totalDownloadsSocial = 0



let categoriaMaisAplicativos = ""
let maiorContagem = 0
let contadorCategorias = 0

for (let i = 0; i < aplicativos.length; i++) {
   if (downloads[i] > downloads) {
    maiorNumeroDeDowloads = downloads[i]
     categoriaMaiorDownloads = categorias[i]
     aplicativosMaiorDownloads = aplicativos[i]
   }
    if (avaliacoes[i] > maiorAvaliacao) {
       maiorAvaliacao = avaliacoes[i] 
       categoriaMaiorAvaliacao = categorias[i]
        aplicativosMaiorAvaliacao = aplicativos[i]
     }
     somaTotalDownloads += downloads[i]


     if (avaliacoes[i] > 4.5) {
      novoArray[contadorDeArray] = aplicativos[i]
      contadorDeArray++
     }

     if (categorias[i] === "Social") {
      totalDownloadsSocial += downloads[i]
     }

   
    }

for (let categoria in contadorCategorias ) {
   if (contadorCategorias[categoria > maiorContagem])
      maiorContagem =  contadorCategorias[categoria]
   categoriaMaisAplicativos = categoria
   console.log(`o tento de categorias é ${contadorCategorias}`);
   {
      
   }
   
}



mediaDownloads = somaTotalDownloads / downloads.length








        //console.table(aplicativos)
        //console.table(downloads)
        //console.table(avaliacoes)
        //console.table(categorias)

console.log(`o maior numero de downloads é ${maiorNumeroDeDowloads} o aplicativo é ${aplicativosMaiorDownloads} da categoria ${categoriaMaiorDownloads}`);
console.log(`o aplicativo com a maior avaliacao é ${aplicativosMaiorAvaliacao} de categoria ${categoriaMaiorAvaliacao}`);
console.log(`a media de downloads é ${mediaDownloads}M`);
console.log(`os aplicativos com mais que 4.5 estrelas de avaliações são: ${novoArray}`);
console.log(`o total de aplicativos de categoria social é de: ${totalDownloadsSocial}M`);




