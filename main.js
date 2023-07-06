const ListaDeAudio = document.querySelectorAll("audio");

//som tecla dinâmica..............................................
function tocaSom(index){
    const som = ListaDeAudio[index];
console.log(som)

    if (som != undefined ){
         som.play();
    }
 else {
        console.log('Elemento não encontrado ou seletor inválido.');
    } 
        
}
const ListaDeTeclas = document.querySelectorAll('.tecla');
for (let index = 0; index < ListaDeTeclas.length; index++) {
    const botao = ListaDeTeclas[index];
    botao.addEventListener('click', function (evento) {
 
         tocaSom(index)
    });
    botao.onkeydown = function (evento) {

        console.log(evento.code == 'NumpadEnter')

        if (evento.code === 'Space'|| evento.code === 'NumpadEnter') {
            botao.classList.add('ativa');
        }

    }
    botao.onkeyup = function ()  {
            botao.classList.remove('ativa');
        }
}