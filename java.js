let interesAnual = 1.05
let interesMensual = 1.004074111
let interesDiario = 1.000135537

let interesArray = [interesAnual, interesMensual, interesDiario]



let boton = document.getElementById("boton");
boton.addEventListener("click", inversionIni);



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




/*
function inversionIni() {


    let inversionInicial = document.getElementById("inicial");
    let resultado = document.getElementById("resultado");
    let mensaje = inversionInicial.value + " hola mundo";

    let nuevoLi = document.createElement("H2");
    nuevoLi.innerHTML = mensaje;


    resultado.appendChild(nuevoLi);

}

*/




/*
function listaCompras() {
    let valor = document.getElementById("elemento");
    let lista = document.getElementById("lista");

    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = valor.value;
    lista.appendChild(nuevoLi);


}

function borrarElemento() {
    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild)

}
*/





/*

class interes {
    constructor(nombre, dinero, moneda, periodo, cantidadPeriodos) {
        this.nombre = nombre;
        this.dinero = dinero;
        this.moneda = moneda;
        this.periodo = periodo;
        this.cantidadPeriodos = cantidadPeriodos;

    }

    //metodo
    calcular() {
        //llamo al array interesArray
        let elevado = interesArray[1] ** this.cantidadPeriodos;
        let interesTotal = Math.round(this.dinero * elevado);
        let interesGanado = Math.round(interesTotal - this.dinero);
        let porcentaje = Math.round((elevado - 1) * 100);

        console.log(interesTotal)
        console.log(interesGanado)
        console.log(elevado)
        console.log(porcentaje)

        alert("Hola " + this.nombre + ", si invierte $" + this.dinero + " en un periodo de " +
            this.cantidadPeriodos + " " + this.periodo + " obtendra una ganancia de $" + interesGanado +
            " y el capital total acumulado al final de la inversion sera de $" + interesTotal + ", representando " +
            "una ganancia del " + porcentaje + "% sobre su capital inicial.")
    }
}

let nombreInversor = prompt("Ingrese su nombre:");
let cantidadInvertir = parseInt(prompt("Ingrese cantidad a invertir:"));
let cantidadMeses = parseInt(prompt("Ingrese la cantidad de meses que durara su inversion:"));
let nuevoInversor = new interes(nombreInversor, cantidadInvertir, "pesos", "meses", cantidadMeses);

//llamo a la funcion
nuevoInversor.calcular(); */