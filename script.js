// para sabermos qual a altura(X) e largura(Y) do browser, iremos usar o window. Porém, como não atualiza e fica fixo o valor, mesmo que o usuario redimensione a tela, entao teremos que prever isso e fazer com que recarregue toda vez que o usuário mexer. Logo teremos que fazer dentro de uma função para assim acrescentar mais umas coisas.

var alt = 0;
var larg = 0;

function ajustarTamanho() {
    alt = window.innerHeight;
    larg = window.innerWidth;

    console.log(larg, alt);
}

ajustarTamanho();

var posicaoX = Math.floor(Math.random() * larg);
var posicaoY = Math.floor(Math.random() * alt);
console.log(posicaoX, posicaoY);

//criando o elemento html

var mosq = document.createElement('img'); //de fato, criando o elemento
mosq.src = 'image/mosca.png'; //atribuindo os atributos que queremos
document.body.appendChild(mosq); //acessando o body da page e incluindo o que acabamos de criar

