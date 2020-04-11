var limInferior = 0;
var limSuperior = 100;
var tentativa = 0;

function iniciar(){
    sorteado = Math.floor(Math.random()*99) +1;    
    document.getElementById("sorteado").innerHTML = "?";
    document.getElementById("palpite").value = "";    
}

function verificaNumero(){
    var novoJogo = document.getElementById("bigMensagem").innerHTML
    if(novoJogo == "Ganhou!!!" || novoJogo=="Perdeu!!!"){
        window.location.href = window.location.href;
        return true; 
    }
    
    document.getElementById("bigMensagem").innerHTML = "ERROU !!! Insira seu palpite!";    

    var palpite = parseInt(document.getElementById("palpite").value);


    if(palpite <= limInferior ||  palpite >= limSuperior){
        document.getElementById("sorteado").innerHTML = sorteado;
        mensagem("Palpite fora do intervalo (<strong>"+limInferior
            +"~"+limSuperior+"</strong> ) BEBA DUAS DOSES!", true);
        document.getElementById("bigMensagem").innerHTML = "Perdeu!!!";    
        return true;
        }
        
        if(palpite == sorteado){
        document.getElementById("sorteado").innerHTML = sorteado;
        document.getElementById("bigMensagem").innerHTML = "Ganhou!!!";    
        mensagem("Adivinhão, comeu carne de pavão!!! Agora BEBA uma dose!");
        return true;
        } else if (palpite < sorteado){
        limInferior = palpite;        
        } else if (palpite > sorteado){
        limSuperior = palpite;       
        }
        mensagem("Qual o número entre <strong>"+limInferior+"</strong> e <strong>"+limSuperior+"</strong>?");
        return false;
}

function mensagem(msg){
    var mensagem = document.getElementById("mensagem");
    tentativa++;
    mensagem.innerHTML = "Msg: " + msg;
    document.getElementById("tentativa").innerHTML = "Tentativa(s): <strong>"+tentativa+"</strong>";
}

function delPalpite(){
    document.getElementById("palpite").value = "";
}

function teclouEnter(event){

   if(event.keyCode == 13){
        var finalizado = verificaNumero();
        if(!finalizado){
            delPalpite();
        }
    }
}
