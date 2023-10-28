let listaDeNumeros = [];
let limiteDeNumerosNaLista = 10;
let tentativas = 1


function gerarNumeroAleatorio() {   
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumerosNaLista + 1);
    let numeroDeElementosNaLista = parseInt(listaDeNumeros.length)
    if (numeroDeElementosNaLista === limiteDeNumerosNaLista){
        listaDeNumeros =[];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }
}

let numeroSecreto = gerarNumeroAleatorio();

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function menssagemInicial(){
    exibirNaTela('h1', 'Jogo do Número secreto');
    exibirNaTela('p', 'Digite um número de 1 a 10');
}

menssagemInicial()

function limparcampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (chute === numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let menssagemAcerto = `você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
        exibirNaTela('h1', 'Acertou!');
        exibirNaTela('p', menssagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (chute > numeroSecreto) {
        exibirNaTela('p', 'O número é menor');
    }else {
        exibirNaTela('p', 'O número é maior');
    }
    tentativas++;
    limparcampo();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    menssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}