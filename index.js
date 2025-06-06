let enviarNivel = document.getElementById("enviarNivel");
enviarNivel.onclick = newEvent;

async function newEvent() {
    let nivelRestante = await mostrarNivel();
    tiempoRestante(nivelRestante);
}

setInterval(newEvent, 1000);

function mostrarNivel() {
    let miNivel = document.getElementById("miNivel").value
    console.log(miNivel)

    let resultado = document.getElementById("resultado")
    let nivelRestante = 100 - miNivel

    //resultado.innerHTML=`Mi nivel : ${miNivel} <br>`
    /* resultado.innerHTML = `Remaining :  ${nivelRestante}% <br>` */

    let minutosTotales = nivelRestante * 30;
    let horas = Math.floor(minutosTotales / 60);
    let minutos = Math.floor(minutosTotales % 60);

    resultado.innerHTML = `Time needed in game : ${horas}h ${minutos}min<br>`;

    return (nivelRestante)
}

function tiempoRestante(nivelRestante) {
    let ahora = new Date;
    let limite = new Date("August 7, 2025 18:00:00")/* 2/1/2023 11:00 AM */
    let diff = limite - ahora

    let resultado = document.getElementById("resultado")
    let dias = Math.floor((diff / 86400000))
    let horas = Math.floor((diff - (dias * 86400000)) / 3600000)
    let minutos = Math.floor((diff - (dias * 86400000) - (horas * 3600000)) / 60000)
    //resultado.innerHTML+=`Tiempo restante : ${dias}d ${horas}h ${minutos}m <br>`

    let nivelDia = ((nivelRestante / diff) * 86400000).toFixed(5)
    let nivelHora = ((nivelRestante / diff) * 3600000).toFixed(5)
    let nivelMinuto = ((nivelRestante / diff) * 60000).toFixed(5)

    resultado.innerHTML += `Levels per day : ${nivelDia}%<br>`
    resultado.innerHTML += `Levels per hour : ${nivelHora}%<br>`
    resultado.innerHTML += `Levels per minute : ${nivelMinuto}% <br>`
}


