//variable global
let ataqueJugador

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-Fuego')
    boton.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-Agua')
    boton.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-Tierra')
    boton.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
    let inputHipoge = document.getElementById('Hipoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatihueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma= document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
    let spanMascotaJuagador = document.getElementById('mascota-jugador')
    
    if (inputHipoge.checked) {
        //cambiamos los datos del html con los datos que introducimos
       // alert('Seleccionaste Hipoge') 
       spanMascotaJuagador.innerHTML = 'Hipoge'
    } else if (inputCapipepo.checked) {
       // alert('Seleccionaste Capipepo')
       spanMascotaJuagador.innerHTML = 'Capipepo'
    } else if (inputRatihueya.checked) {
        //alert('Seleccionaste Ratihueya')
        spanMascotaJuagador.innerHTML = 'Ratihueya'
    } else if (inputLangostelvis.checked) {
        //alert('Seleccionaste Langostelvis')
        spanMascotaJuagador.innerHTML = 'Langostelvis'
    } else if (inputTucapalma.checked) {
        //alert('Seleccionaste Tucapalma')
        spanMascotaJuagador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked) {
        //alert('Seleccionaste Pydos')
        spanMascotaJuagador.innerHTML = 'Pydos'
    } else  {
        alert('Selecciona una mascota')
    }

     seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let ataqueAleatorio = aleatorio(1,5)
    
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Ratihueya'
    }else if (ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    }else if (ataqueAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    }else if (ataqueAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
}

function ataqueTierra(){
    ataqueJugador = 'Tierra'
}
window.addEventListener('load', iniciarJuego)