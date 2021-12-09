var selecao = document.querySelector('.selecao')
var telaCesar = document.querySelector('#divCesar')
var radio = document.querySelectorAll('#codificar')
var botao = document.querySelector('.cod-decod')
var mensagem = document.querySelector('#mensagem')
var retorno = document.querySelector('#retorno')
var inputCesar = document.querySelector('.inputCesar')
selecao.addEventListener('change', function(){
    if(selecao.value == "cifraCesar"){
        telaCesar.style.display = "block"
    }
})

botao.addEventListener("click", function (event) {
    event.preventDefault();
    var selecao = document.querySelector(".selecao");
    var numeroPasso = parseInt(inputCesar.value);
    
    if (selecao.value == "cifraCesar" && radio[0].checked) {
      var texto = mensagem.value.split("");
      retorno.value = cifraCod(texto, numeroPasso);
    } else if (selecao.value == "cifraCesar" && radio[1].checked) {
      var texto = mensagem.value.split("");
      retorno.value = decodifica(texto, numeroPasso);
    } else if (selecao.value == "base64" && radio[0].checked) {
      var texto = mensagem.value;
      retorno.value = btoa(texto);
    } else {
      var texto = mensagem.value;
      retorno.value = atob(texto);
    }
  });

function base(){
    var texto = mensagem.value
    if(radio[0].checked){
        retorno.value = btoa(texto)
     }else if(radio[1].checked){
        retorno.value = atob(texto)
     
    }
}

function cifraCod(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return String.fromCharCode(((code - 65 + key) % 26) + 65)
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 + key) % 26) + 97)
        } else return c
    }).join('')
}

function decodifica(texto, chave){ 
    return texto.map((str)=>{ 
    var cripto = str.charCodeAt();
    if(cripto >= 65 && cripto <= 90){ 
    return (cripto - 65 - chave < 0)?String.fromCharCode(((cripto - 65 - chave +26)%26)+65):String.fromCharCode(((cripto -65 -chave)%26)+65) 
}else if(cripto >= 97 && cripto <= 122){ 
    return (cripto - 97 - chave < 0)?String.fromCharCode(((cripto - 97 - chave +26)%26)+97):String.fromCharCode(((cripto -97 -chave)%26)+97) 
}else{
    return str } }).join('') }
   