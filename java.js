let interesAnual = 1.05
let interesMensual = 1.004074111
let interesDiario = 1.000135537

let interesArray = [interesAnual, interesMensual, interesDiario]


document.html.write(interesAnual);



function inversionIni() {


    let inversionInicial = document.getElementById("inicial");
    let resultado = document.getElementById("resultado");
    let monto = parseInt(inversionInicial.value);
    let calculo = monto * interesAnual;
    let mensajeFinal = "con una inversion de " + monto + " en 12 meses tendras: $" + calculo;

    let nuevoLi = document.createElement("H2");
    nuevoLi.innerHTML = mensajeFinal;


    resultado.appendChild(nuevoLi);

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
nuevoInversor.calcular();

*/