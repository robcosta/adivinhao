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
    if(novoJogo == "Ganhou!!! Beba UMA!" || novoJogo=="Perdeu!!! Beba DUAS!"){
        window.location.href = window.location.href;
    }
    
    var palpite = parseInt(document.getElementById("palpite").value);

    //Verifica se o palpite está dentro do limite
    if(palpite <= limInferior ||  palpite >= limSuperior){
        document.getElementById("sorteado").innerHTML = sorteado;
        document.getElementById("bigMensagem").innerHTML = "Perdeu!!! Beba DUAS!";
        adicionaTentativa();
        return true;    
    }
    //Verifica se acertou o número    
    if(palpite == sorteado){
        document.getElementById("sorteado").innerHTML = sorteado;
        document.getElementById("bigMensagem").innerHTML = "Ganhou!!! Beba UMA!";    
        adicionaTentativa(); 
        return true;       
    } else if (palpite < sorteado){
        limInferior = palpite;
        document.getElementById("limite_inferior").style.color = "#ff0000";      
        document.getElementById("limite_superior").style.color = "#000000";

    } else if (palpite > sorteado){
        limSuperior = palpite;
        document.getElementById("limite_inferior").style.color = "#000000";      
        document.getElementById("limite_superior").style.color = "#ff0000";       
    }
    document.getElementById("limite_superior").innerHTML = limSuperior;
    document.getElementById("limite_inferior").innerHTML = limInferior;
    document.getElementById("bigMensagem").innerHTML = "ERROU !!! Insira seu palpite!";   
    adicionaTentativa();
    return false;
}

function adicionaTentativa(){
    tentativa++;
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
        } else {
            document.getElementById("tentativa").innerHTML = "Tentativa(s): <strong>"+tentativa+"</strong>&emsp;&emsp;&emsp;&emsp;<span style='color:#ff0000'>Tecle ENTER para reiniciar</span>.";
        }
    }
}

//Aceita somente numeros e bloqueia mais de dois dígitos
function doisDigitos(e){
    var valor = document.getElementById('palpite').value;
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
    if(valor.length >= 2){
        return false;
    }
    return true;
}
