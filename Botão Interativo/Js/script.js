let BotaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");

BotaoNao.addEventListener("click", function(){
  let posX = Math.random() * (window,innerWidth - BotaoNao.offsetWidth)
  let posY = Math.random() * (window.innerHeight - BotaoNao.offsetHeight)

  botaoNao.style.position = "absolute";
  botaoNao.style.left = posX + "px";
  botaoNao.style.top = posY  + "px";
  
  mensagemErro.style.display = "block";
});

botaoSim.addEventListener("click", function(){
 alert("Ótima escolha! Vamos almoçar!");
});


