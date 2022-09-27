function verificaSeChuteOChutePossuiUmValorValido(chute){
    const numero = +chute; //transforma o numero STRING em INTEIRO add +


    if(chuteForInvalido(numero)){ //se o numero é um valor numero e nao NaN
        elementoChute.innerHTML += `<div>Valor invalido</div>`
        return
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era o ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="botao-jogar">Jogar novamente</button>
        `
    }
    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
    else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {

    if(evento.target.id == 'jogar-novamente'){
        window.location.reload(); //reload na pagina
    }
});
