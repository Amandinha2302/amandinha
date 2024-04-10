const botoes=document.querySelectorAll(".botao");
const textos=document.querySelectorAll(".botao");

for(let i=0;i<botoes.lenght;i++){
  contadores[0].textContent = calculaTempo(tempos[i]);

  botoes[i].onclick=function(){

    for(let j=0;j<botoes.lenght;j++{
      botoes[j].classlist.remove("ativo");
      textos[j].classlist.remove("ativo");
    }
    botoes[i],classlist.add("ativo");
    textos[i],classlist.add("ativo");
  }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-19T00:00:00");
const tempoObjetivo2 = new Date("2025-01-06T00:00:00");
const tempoObjetivo3 = new Date("2025-02-23T00:00:00");
const tempoObjetivo4 = new Date("2025-03-23T00:00:00");
let tempoAtual = new Date();

const tempo= [tempoObijetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4]

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}

function atualizaCronometro(){
  for(let i=0; i<contadores.lenght; i++){
    contadores[i].textContent = calculaTempo(tempos[i]);
  }
}
function comecaCronometro(){
  atualizaCronometro();
  setInterval(atualizaCronometro,1000);
}
comecaCronometro();
