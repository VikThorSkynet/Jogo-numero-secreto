function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if (chuteNaoForNumero(numero)){
        elementoChute.innerHTML +=`<div>Valor Inválido</div>`;
        return
    }

    if(seONumeroForMaiorouMenorQueOPermitido(numero)){
        elementoChute.innerHTML +=`
        <div>Valor Inválido: O número esta entre ${menorNumero} e ${maiorNumero}</div>`
        return   
    }

    if(numero === numeroSecreto){
        document.body.innerHTML =`
            <h2>ACERTOU MISERAVI</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>
            <button id='jogar-novamente' class='btn-jogarnovamente'>Jogar Novamente</button>
            `

    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O Número Secreto é menor <i class="fa-solid fa-angle-down"></i></div> 
        ` 
    } else {
        elementoChute.innerHTML += `
         <div>O Número Secreto é maior <i class="fa-solid fa-angle-up"></i></div>
         `
    }
};

function chuteNaoForNumero(numero){
        return Number.isNaN(numero)
};

function seONumeroForMaiorouMenorQueOPermitido(numero){
    return numero > maiorNumero || numero < menorNumero
};

document.body.addEventListener('click', (e) =>{

    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})

