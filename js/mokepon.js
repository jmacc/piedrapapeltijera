function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipoge = document.getElementById('Hipoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatihueya = document.getElementById('Ratigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma= document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')

    if (inputHipoge.checked) {
        alert('Seleccionaste Hipoge')
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste Capipepo')
    }else if (inputRatihueya.checked) {
        alert('Seleccionaste Ratihueya')
    }else if (inputLangostelvis.checked) {
        alert('Seleccionaste Langostelvis')
    } if (inputTucapalma.checked) {
        alert('Seleccionaste Tucapalma')
    }
     if (inputPydos.checked) {
        alert('Seleccionaste Pydos')
    } else  {
        alert('Selecciona una mascota')
    }

}

window.addEventListener('load', iniciarJuego)