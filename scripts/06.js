let produtos = ["Teclado", "Mouse", "Monitor", "Gabinete", "Headset", "Mousepad"]
let precos = [120, 80, 450, 350, 200, 35]
let quantidades = [15, 25, 8, 5, 10, 30]
let produtosMaisCaros = produtos[0]
let precoProdutoMaisCaro = 0
let produtosMaisBaratos = 0

for (let i = 0; i < precos.length; i++) { // usei o for para fazer um loop
    if (precos[i] > precoProdutoMaisCaro) { // usei o if para compara os preços
       produtosMaisCaros = produtos[i]
       precoProdutoMaisCaro = precos[i]
    }
    
}
console.log(produtosMaisCaros);