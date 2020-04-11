var limInferior = 0;
var limSuperior = 100;
var tentativa = 0;

function iniciar(){
    sorteado = Math.floor(Math.random()*99) +1;    
    document.getElementById("sorteado").innerHTML = "?";
    document.getElementById("palpite").value = "";    
}

function verificaNumero(){
    var novoJogo = document.getElementById("button").innerHTML
    if(novoJogo == "Jogar Novamente?"){
        window.location.href = window.location.href;
        return; 
    }
    
    var palpite = parseInt(document.getElementById("palpite").value);


    if(palpite <= limInferior ||  palpite >= limSuperior){
        mensagem("Perdeu!!! Palpite fora do intervalo (<strong>"+limInferior
            +"~"+limSuperior+"</strong> ) BEBA DUAS DOSES!", true);
        return;
    }

    if(palpite == sorteado){
        document.getElementById("sorteado").innerHTML = sorteado;
        mensagem("Adivinhão, comeu carne de pavão!!! Agora BEBA uma dose!", true);
        return;
    } else if (palpite < sorteado){
        limInferior = palpite;        
    } else if (palpite > sorteado){
        limSuperior = palpite;       
    }
    mensagem("Errou!!! Qual o número entre <strong>"+limInferior+
    "</strong> e <strong>"+limSuperior+"</strong>?");
    return
}

function mensagem(msg, flag=false ){
    var mensagem = document.getElementById("mensagem");
    tentativa++;
    mensagem.innerHTML = "Msg: " + msg;
    document.getElementById("tentativa").innerHTML = "Tentativa(s): <strong>"+tentativa+"</strong>";

    if(flag){        
        document.getElementById("button").innerHTML = "Jogar Novamente?";
    }

}

function delPalpite(){
    document.getElementById("palpite").value = "";
}