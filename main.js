function arrastarElemento(evento) {
  const elemento = document.getElementById("arrastavel");
  const segundoElemento = document.getElementById("benja");
  let posicaoXInicial = 0, posicaoYInicial = 0, diferencaX = 0, diferencaY = 0;

  evento = evento || window.event;
  evento.preventDefault();
  posicaoXInicial = evento.clientX;
  posicaoYInicial = evento.clientY;

  document.onmouseup = finalizarArrasteElemento;
  document.onmousemove = arrastarElementoMouse;

  function arrastarElementoMouse(evento) {
      evento = evento || window.event;
      evento.preventDefault();

      diferencaX = posicaoXInicial - evento.clientX;
      diferencaY = posicaoYInicial - evento.clientY;
      posicaoXInicial = evento.clientX;
      posicaoYInicial = evento.clientY;

      elemento.style.top = (elemento.offsetTop - diferencaY) + "px";
      elemento.style.left = (elemento.offsetLeft - diferencaX) + "px";

      // Verificar si el centro del elemento arrastrable está dentro del segundo elemento
      const centroX = elemento.offsetLeft + elemento.offsetWidth / 2;
      const centroY = elemento.offsetTop + elemento.offsetHeight / 2;
      if (elemento.offsetLeft >= segundoElemento.offsetLeft &&
        elemento.offsetTop >= segundoElemento.offsetTop &&
        elemento.offsetLeft + elemento.offsetWidth <= segundoElemento.offsetLeft + segundoElemento.offsetWidth &&
        elemento.offsetTop + elemento.offsetHeight <= segundoElemento.offsetTop + segundoElemento.offsetHeight) {
        console.log("Hola mundo");
    }
    
  }

  function finalizarArrasteElemento() {
      document.onmouseup = null;
      document.onmousemove = null;
  }
}

function mousePasaEncima() {
  document.getElementById("burbuja").style.display = "block";
}