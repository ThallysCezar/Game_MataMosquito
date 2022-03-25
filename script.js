// para sabermos qual a altura(X) e largura(Y) do browser, iremos usar o window. Porém, como não atualiza e fica fixo o valor, mesmo que o usuario redimensione a tela, entao teremos que prever isso e fazer com que recarregue toda vez que o usuário mexer. Logo teremos que fazer dentro de uma função para assim acrescentar mais umas coisas.

var alt = 0;
var larg = 0;

function ajustarTamanho() {
    alt = window.innerHeight;
    larg = window.innerWidth;

    console.log(alt, larg);
}

ajustarTamanho();

