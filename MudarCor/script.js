let listaCores = ["#000", "#F00", "#FFE4E1", "#FFD700", "#00F"];

var button = document.getElementById("botao");
var button2 = document.getElementById("botao2");

button.addEventListener("click", function () {
  let Valor = Math.floor(Math.random() * 5);
  document.body.style.backgroundColor = listaCores[Valor];
});

button2.addEventListener("click", function () {
  let valor = document.getElementById("cores");
  let selecionado = valor.options[valor.selectedIndex].value;
  document.body.style.backgroundColor = listaCores[selecionado];
});
