/**
 * @autor jmacc <tianalytics.com.mx>
 */

/**
 * vidas  son llamadas por las funciones
 * @global {string} vidas de los jugadores
 */
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seccionSeleccionAtaque = document.getElementById('seleccionar-ataque').style.display = 'none'
    let seccionReinicionar = document.getElementById('sec-reiniciar').style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-Fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-Agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-Tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReinicar = document.getElementById('boton-reiniciar')
    botonReinicar.addEventListener('click', reiniciarJuego)
}
/**
 * Mostramos el menu para seleccion de Mascotas
 */
function seleccionarMascotaJugador() {
    /**  */
    let seccionSeleccionMascota = document.getElementById('seleccionar-mascota').style.display = 'none'
    let seccionSeleccionAtaque = document.getElementById('seleccionar-ataque').style.display = 'flex'

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

/**
 * 
 * @param {number} min Minimo 1
 * @param {number} max Maximo 5
 * @returns 
 */
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/**
 * El jugador elige su ataque y de manera aleatoria el enemigo genera su ataque
 * para las funciones fuego, agua y tierra
 */
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

/**
 * Nos permite tener un elemento aleatorio dentro de un rango
 */
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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    // COMBATE
    if (ataqueEnemigo == ataqueJugador) {
       crearMensaje("EMPATE")
       crearMensajeAtaquesJugador()
       crearMensajeAtaqueEnemigo()
      } else if (ataqueEnemigo == 'FUEGO' && ataqueJugador == 'TIERRA') {
        crearMensaje("GANASTE")
        crearMensajeAtaquesJugador()
        crearMensajeAtaqueEnemigo()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
     } else if (ataqueEnemigo == 'AGUA' && ataqueJugador == 'TIERRA') {
        crearMensaje("GANASTE")
        crearMensajeAtaquesJugador()
        crearMensajeAtaqueEnemigo()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
      } else if (ataqueEnemigo == 'TIERRA' && pataqueJugador == 'AGUA') {
        crearMensaje("GANASTE")
        crearMensajeAtaquesJugador()
        crearMensajeAtaqueEnemigo()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML =vidasEnemigo
      } else {
        crearMensaje("PERDISTE")
        crearMensajeAtaquesJugador()
        crearMensajeAtaqueEnemigo()
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
      
      }
      revisarVidas()
}

/**
 * Verifica que Jugador llega a 0
 */
function revisarVidas(){
    if (vidasEnemigo == 0){
crearFinal(" Felicidades Ganaste Esta Ronda ")
    } else if(vidasJugador == 0){
crearFinal(" Perdiste Esta Ronda ")
    }
}

/** todo el resultado en un solo bloque  */
/**
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('div')
    parrafo.innerHTML = '<div class="cajaMensajes"> Tu mascota atacó con <p id="nameAtaque">'+ ataqueJugador +',</p> las mascota del enemigo atacó con <p id="nameAtaque">' + ataqueEnemigo + 
    '</p> Resultado: <p id="nameAtaque"> '+ resultado +'</p>  </div>'
    sectionMensajes.appendChild(parrafo)
}
*/

/**
 * 
 * @param {String} resultado Obtiene si perdiste o ganaste 
 */

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('div')

    parrafo.innerHTML = resultado
    sectionMensajes.appendChild(parrafo)
}
/**
 * Obtiene el ataque del jugador
 */
function crearMensajeAtaquesJugador(){
    let resultadoJugador = document.getElementById('resultado-jugador')
    let parrafo = document.createElement('div')

    parrafo.innerHTML = '<div class="losAtaques">'+ ataqueJugador
    resultadoJugador.appendChild(parrafo)
}

/**
 * Obtiene el ataque del enemigo
 */
function crearMensajeAtaqueEnemigo(){
    let resultadoEnemigo = document.getElementById('resultado-enemigo')
    let parrafo = document.createElement('div')
    
   parrafo.innerHTML = '<div class="losAtaques">'+ ataqueEnemigo
   resultadoEnemigo.appendChild(parrafo)
}

/**
 * Se deshabilita los botones de ataque al llegar un jugador a 0
 * @param {String} resultadoFinal Muestras si pierdes o ganas
 * Se ahbilitado el boton de reinicio
 */
function crearFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-Fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-Agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-Tierra')
    botonTierra.disabled = true

    let seccionReinicionar = document.getElementById('sec-reiniciar').style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)