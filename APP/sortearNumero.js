const menorNumero = 1;
const maiorNumero = 100;

const numeroSecreto = numeroAleatorio();

function numeroAleatorio(){
    return parseInt(Math.random() * maiorNumero + 1);
};

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorNumero;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorNumero;

console.log(numeroSecreto);
