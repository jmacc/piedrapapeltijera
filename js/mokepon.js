//variable global
let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-Fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-Agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-Tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
    let inputHipoge = document.getElementById('Hipoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatihueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
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
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let mascotaAleatorio = aleatorio(1, 5)

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Ratihueya'
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego() {

    ataqueJugador = 'FUEGO'
    ataqueAlatorioEnemigo()
    // alert('Ataque Fuego')
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAlatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAlatorioEnemigo()
}

function ataqueAlatorioEnemigo() {

    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate(){
    // COMBATE
    if (ataqueEnemigo == ataqueJugador) {
       crearMensaje("EMPATE")
      } else if (ataqueEnemigo == 'FUEGO' && ataqueJugador == 'TIERRA') {
        crearMensaje("GANASTE")
     } else if (ataqueEnemigo == 'AGUA' && ataqueJugador == 'TIERRA') {
        crearMensaje("GANASTE")
      } else if (ataqueEnemigo == 'TIERRA' && pataqueJugador == 'AGUA') {
        crearMensaje("GANASTE")
      } else {
        crearMensaje("PERDISTE")
      
      }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '-' + resultado
    sectionMensajes.appendChild(parrafo)
}

window.addEventListener('load', iniciarJuego)