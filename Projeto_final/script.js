var $lista = document.querySelector('ul')
var $atividade = document.querySelector('#addat')
var $botao = document.querySelector('#btn')
var $botao2 = document.querySelector('#remo')

$botao.addEventListener('click', addat);

function addat() {
    var item = '<li>' + $atividade.value + '</li>';
    $lista.innerHTML += item;
    $atividade.value = ''
    $atividade.focus();
}

$atividade.addEventListener('keyup', function(e) {
      console.log(e.keyCode);
       if(e.keyCode === 13) {
           addat() 
       }
}) 


$botao2.addEventListener('click' , remover);

function remover() {
    var item = $atividade.value
    $lista.innerHTML = item;
    item = ''
}