let palabraIngresada = prompt("Jugador 1, ingrese una palabra:");

let palabraAdivinar = [];
for (let index = 0; index < palabraIngresada.length; index++) {
    palabraAdivinar[index] = " _ ";
}

function ahorcado(palabra) {
    vidas = 6;
    while(vidas != 0){
        banderaLetraEncontrada = false;
        let letra = prompt("Palabra: " + palabraAdivinar + "\n" + "Te quedan " + vidas + " intentos" + "\n" + "Jugador 2, ingrese una letra:");
        for (let index = 0; index < palabraIngresada.length; index++) {
            if(letra == palabraIngresada[index]){
                palabraAdivinar[index] = palabraIngresada[index];
                banderaLetraEncontrada = true;
            }
        }
        if(banderaLetraEncontrada == false){
            vidas = vidas - 1;
            if(vidas == 0){
                return "Game Over";
            }
        } else {
            banderaGanar = true;
            for(let index = 0; index < palabraAdivinar.length; index++) {
                if (palabraAdivinar[index] == " _ ") {
                    banderaGanar = false;
                }
            }
            if(banderaGanar == true){
                return "You Win"
            }
        }
    }
}

alert(ahorcado(palabraIngresada));

