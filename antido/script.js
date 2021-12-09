var selecao = document.querySelector('.selecao')
var telaCesar = document.querySelector('#divCesar')
var radio = document.querySelectorAll('.codificar')
var botao = document.querySelector('.cod-decod')
var mensagem = document.querySelector('#mensagem')
var retorno = document.querySelector('#retorno')

selecao.addEventListener('change', function(){
    if(selecao.value == "cifraCesar"){
        telaCesar.style.display = "block"
    }
})

botao.addEventListener('click', function(event){
    event.preventDefault()
    var texto = mensagem
    
    if(radio[0]){
        retorno.value = btoa('texto')
     }else if(radio[1]){
        alert("teste")
     }
})