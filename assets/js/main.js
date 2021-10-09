//Variables Jugador y computadora
let puntaje_jugador = 0;
let puntaje_computadora = 0;

const cantidadDeJuegos = document.getElementById("valor_1");
console.log(cantidadDeJuegos);

//Declarando una variable Auxiliar
let numeroDeJugadasAux = 0;
function cargar_val() {
  numeroDeJugadasAux = cantidadDeJuegos.value;
  console.log(numeroDeJugadasAux);
}
//Eleccion Usuario
function gamble(jugadaUsuario) {
  console.log(numeroDeJugadasAux);

  if (numeroDeJugadasAux > 0) {
    //Generando un numero Random como jugada de la maquina
    let jugadaMaquina = Math.floor(Math.random() * 3) + 1;

    //Indicando casos
    switch (jugadaUsuario) {
      case 1:
        if (jugadaMaquina == 1) {
          alert("Empate");
        } else if (jugadaMaquina == 2) {
          alert("Gana el Jugador");
          puntaje_jugador++;
        } else {
          alert("Gana la Computadora");
          puntaje_computadora++;
        }
        break;
      case 2:
        if (jugadaMaquina == 1) {
          alert("Gana  la Computadora");
          puntaje_computadora++;
        } else if (jugadaMaquina == 2) {
          alert("Empate");
        } else {
          alert("Gana el Jugador");
          puntaje_jugador++;
        }
        break;

      case 3:
        if (jugadaMaquina == 1) {
          alert("Gana Jugador");
          puntaje_jugador++;
        } else if (jugadaMaquina == 2) {
          alert("Gana Computadora");
          puntaje_computadora++;
        } else {
          alert("Empate");
        }
        break;
    }
    numeroDeJugadasAux--;
  }

  //Comparando resultados
  if (numeroDeJugadasAux <= 0) {
    if (puntaje_jugador > puntaje_computadora) {
      document.write("Gana el Jugador");
    } else if (puntaje_jugador == puntaje_computadora) {
      document.write("Empate");
    } else {
      document.write("Gana la Computadora");
    }
  }
}
