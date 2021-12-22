let interesAnual = 1.05
let interesMensual = 1.004074111
let interesDiario = 1.000135537

let interesArray = [interesAnual, interesMensual, interesDiario]



//let boton = document.getElementById("boton");
let boton = $("#boton");
//boton.addEventListener("click", inversionIni);
$(boton).click(inversionIni)

function inversionIni() {
    let inversionInicial = document.getElementById("inicial");
    console.log(inversionInicial.value);
    let monto = parseInt(inversionInicial.value);
    let calculo = monto * interesAnual;
    let mensajeFinal = "con una inversion de " + monto + " en 12 meses tendras: $" + calculo;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ` <p> ${mensajeFinal}`;

}


class Usuario {
    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass;

    }
}
// usuarioRegistrado no anda si no se carga previamente
// let usuarioRegistrado = JSON.parse(localStorage.getItem("1"));
let usuarioRegistrado = [];
let botonReg = document.getElementById("botonReg");
let botonLog = document.getElementById("botonLog");



botonReg.addEventListener("click", registrar);
//botonLog.addEventListener("click", logear);


function registrar() {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    let nuevoUsuario = new Usuario(usuario, pass);
    usuarioRegistrado.push(nuevoUsuario);
    usuarioJSON = JSON.stringify(usuarioRegistrado);
    localStorage.setItem("1", usuarioJSON);


}


function logear() {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    let array = localStorage.getItem("usuarioRegistrado");
    let arrayParse = JSON.parse(array);
    console.log(array);
    console.log(arrayParse);
    console.log(usuario);
    console.log(pass);
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let arreglo = localStorage.getItem(clave);
        console.log(arreglo);
    }



}