let repeticionTiradas = prompt ("¿Cuántas veces deseas tirar los dados?")

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let dado1 = 0;
  let dado2 = 0;
  let sumaLanzamientos = 0;
  let numerosTotales = [];
  let numerosObtenidos = [];
  
  function tiradaDados() {
      dado1 = numeroAleatorio(1,7);
      dado2 = numeroAleatorio(1,7);
      numerosTotales.push(dado1, dado2);
      sumaLanzamientos = sumaLanzamientos + dado1 + dado2;
      numerosObtenidos.push(sumaLanzamientos)
  }
  