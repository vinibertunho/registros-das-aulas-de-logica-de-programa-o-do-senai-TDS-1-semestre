const pessoas = ['João', 'Maria', 'Pedro', 'Ana'];

const gastos = [100, 200, 50, 150];

const media = gastos.reduce((acc, current) => acc + current, 0) / gastos.length;

for (let i=0; i < pessoas.length; i++) { const diferenca = gastos[i] - media; console.log('${pessoas [i]} gastou R$$ {gastos[i]}. Diferença em relação à média: R$$ {diferenca.toFixed(2)}`); 
    }


const pessoas = ['João', 'Maria', 'Pedro', 'Ana']; const gastos = [100, 200, 50, 150];

const media gastos.reduce((acc, current) => acc + current, 0) / gastos.length;

pessoas.forEach((pessoa, index) => { const diferenca = gastos [index] media; console.log('${pessoa} gastou R$$ {gastos [index]}. Diferença em relação à média: R$${diferenca.toFixed(2)}`); 
    });