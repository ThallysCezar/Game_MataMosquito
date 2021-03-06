// para sabermos qual a altura(X) e largura(Y) do browser, iremos usar o window. Porém, como não atualiza e fica fixo o valor, mesmo que o usuario redimensione a tela, entao teremos que prever isso e fazer com que recarregue toda vez que o usuário mexer. Logo teremos que fazer dentro de uma função para assim acrescentar mais umas coisas.

var alt = 0;
var larg = 0;
var vidas = 1;
var tempo = 15;

var criarMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'easy'){
    //1500
    criarMosquitoTempo = 1500;

} else if(nivel === 'normal') {
    //1000
    criarMosquitoTempo = 1000;

} else {
    //750
    criarMosquitoTempo = 750;
}

function ajustarTamanho() {
    alt = window.innerHeight;
    larg = window.innerWidth;


    console.log(larg, alt);
}

ajustarTamanho();

var cronometro = setInterval(function(){
    tempo -=1
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        window.location.href = 'win.html';
    } else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
},
1000);

function posicaoRandom() {

    // remover o mosquito, para que nao fique poluindo a tela, caso exista.
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if (vidas > 3){
            window.location.href = 'game_over.html';
        } else {
            document.getElementById('v' + vidas).src="/image/coracao_vazio.png";
            vidas++;
        }

    }
    

    var posicaoX = Math.floor(Math.random() * larg) - 90; // limitando com esse -90, para nao estourar e a imagem passar
    var posicaoY = Math.floor(Math.random() * alt) - 90;
    console.log(posicaoX, posicaoY);

    
    posicaoX = posicaoX < 0 ? 0 : posicaoX; // isso é para nao ficar na posicao 0 e nao aparecer a imagem, para nao acontecer isso, tem que fazer essa atribuição com operador ternario.
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //criando o elemento html

    var mosquito = document.createElement('img'); //de fato, criando o elemento
    mosquito.src = 'image/mosca.png'; //atribuindo os atributos que queremos
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio(); //atribuindo uma classe desejada
    mosquito.style.left = posicaoX + 'px'; // em pixel, a esquerda
    mosquito.style.top = posicaoY + 'px'; // em pixel, ao topo
    mosquito.style.position = 'absolute'; // posição absoluta
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove();
    } //remover o html pelo click, por causa disso o jogador nao perderá vida.

    document.body.appendChild(mosquito); //acessando o body da page e incluindo o que acabamos de criar

}

// criando função para tamanhos aleatorios do mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch(classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch(classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}

