/**
 * @autor jmacc <tianalytics.com.mx>
 */
/**
 * Funcion Iniciar juego
 */
const botonMascotaJugador = document.getElementById('boton-mascota')
const seccionReinicionar = document.getElementById('sec-reiniciar')
const  botonAgua = document.getElementById('boton-Agua')
const  botonTierra = document.getElementById('boton-Tierra')
const  botonReinicar = document.getElementById('boton-reiniciar')
const  seccionSeleccionAtaque = document.getElementById('seleccionar-ataque')

const  seccionSeleccionMascota = document.getElementById('seleccionar-mascota')

const  inputHipoge = document.getElementById('Hipoge')
const  inputCapipepo = document.getElementById('Capipepo')
const  inputRatihueya = document.getElementById('Ratigueya')
const  inputLangostelvis = document.getElementById('Langostelvis')
const  inputTucapalma = document.getElementById('Tucapalma')
const  inputPydos = document.getElementById('Pydos')
const  spanMascotaJuagador = document.getElementById('mascota-jugador')

const  spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const  sectionMensajes = document.getElementById('mensajes')

const  resultadoJugador = document.getElementById('resultado-jugador')

const  resultadoEnemigo = document.getElementById('resultado-enemigo')
const botonFuego = document.getElementById('boton-Fuego')


/**
 * vidas  son llamadas por las funciones
 * @type {Array}  Mokepones.- Los moquepones
 */
let Mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3
/**
 * Clase para crear mokepon
 */
class Mokepon{
    /** 
     * @constructs 
     * @param {string} nombre Nombre de la mascota
     * @param {string} foto Url de la imagen
     * @param {Number} vida Cantidad de vidas de la mascota
     * @type {Array} ataques
    */
    constructor(nombre, foto, vida){
        /** @private */
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Hipoge = new Mokepon('Hipoge','img/Hipoge.png',5)
let Capipepo = new Mokepon('Capipepo','img/Capipepo.png',5)
let Ratigueya = new Mokepon('Ratigueya','img/Ratigueya.png',5)
let Langostelvis = new Mokepon('Langostelvis','img/Langostelvis.png',5)
let Tucapalma = new Mokepon('Tucapalma','img/Tucapalma.png',5)
let Pydos =new Mokepon('Pydos','img/Pydos.png',5)

//ingresamos valores de ataques al arreglo

Hipoge.ataques.push(
    {ataques: '🔥', id: 'boton-Fuego'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '🌱', id: 'boton-Tierra'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '💧', id: 'boton-Agua'},
)

Capipepo.ataques.push(
    {ataques: '🔥', id: 'boton-Fuego'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '🌱', id: 'boton-Tierra'},
    {ataques: '🔥', id: 'boton-Fuego'},
    {ataques: '🔥', id: 'boton-Fuego'},
)

Ratigueya.ataques.push(
    {ataques: '🌱', id: 'boton-Tierra'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '🌱', id: 'boton-Tierra'},
    {ataques: '🌱', id: 'boton-Tierra'},
    {ataques: '🔥', id: 'boton-Fuego'},
)

Langostelvis.ataques.push(
    {ataques: '🔥', id: 'boton-Fuego'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '🌱', id: 'boton-Tierra'},
    {ataques: '🌱', id: 'boton-Tierra'},
    {ataques: '🌱', id: 'boton-Tierra'},
)

Tucapalma.ataques.push(
    {ataques: '🔥', id: 'boton-Fuego'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '🌱', id: 'boton-Tierra'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '🔥', id: 'boton-Fuego'},
)

Pydos.ataques.push(
    {ataques: '🔥', id: 'boton-Fuego'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '🔥', id: 'boton-Fuego'},
    {ataques: '💧', id: 'boton-Agua'},
    {ataques: '🌱', id: 'boton-Tierra'},
)

Mokepones.push(Hipoge,Capipepo,Ratigueya,Langostelvis,Tucapalma,Pydos)

function iniciarJuego() {
    seccionSeleccionAtaque.style.display = 'none'
    seccionReinicionar.style.display = 'none'

    Mokepones.forEach((Mokepon) => {
       opcionDeMokepones = ''
    } )

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReinicar.addEventListener('click', reiniciarJuego)
}
/**
 * Mostramos el menu para seleccion de Mascotas
 */
function seleccionarMascotaJugador() {
    /** 
     * Visualizacion de las secciones
    */
    seccionSeleccionMascota.style.display = 'none'
    seccionSeleccionAtaque.style.display = 'flex'
   
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
    
    let parrafo = document.createElement('div')

    parrafo.innerHTML = resultado
    sectionMensajes.appendChild(parrafo)
}
/**
 * Obtiene el ataque del jugador
 */
function crearMensajeAtaquesJugador(){
    
    let parrafo = document.createElement('div')

    parrafo.innerHTML = '<div class="losAtaques">'+ ataqueJugador
    resultadoJugador.appendChild(parrafo)
}

/**
 * Obtiene el ataque del enemigo
 */
function crearMensajeAtaqueEnemigo(){
    
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
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    botonFuego.disabled = true

    botonAgua.disabled = true
    
    botonTierra.disabled = true

    seccionReinicionar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)