window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementoChute = document.getElementById('chute');


const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak);


function onSpeak(e){
    var chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeChuteOChutePossuiUmValorValido(chute);
};

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Voce disse: </div>
        <span class="box"> ${chute}</span>
        <div></div>
    `;
}

recognition.addEventListener('end', () => recognition.start()); //Quando a funcao acabar liga novamente a funcao de voz

