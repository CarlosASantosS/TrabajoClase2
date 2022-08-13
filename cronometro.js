let referencia = Date.now()
let empezar = false
let contador = 0
function inicio()   {empezar = true}
function detener()  {empezar = false}
function reinicio() {contador = 0}
setInterval(() => 
{
    let tiempo = document.getElementById("cronometro")
    if (empezar) {contador += Date.now() - referencia}
    referencia = Date.now()
    tiempo.innerHTML = ordenarMS(contador)
}, 1000 / 60);
function ordenarMS(tiempo_ms) 
{
    let MS = tiempo_ms % 1000
    let cuenta = Math.floor(((tiempo_ms - MS) / 1000))
    let Segundos = Math.floor(((tiempo_ms - MS) / 1000)%60)
    let Minutos = Math.floor((cuenta / 60) % 60)
    let Horas = Math.floor((cuenta/60 / 60))
    Number.prototype.digitos = function (n) {return (this + "").padStart(n, 0)}
    return Horas.digitos(2) + ":" + Minutos.digitos(2) + ":" + Segundos.digitos(2)         
}
    