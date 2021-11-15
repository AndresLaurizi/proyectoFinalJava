let interesAnual = 1.05
let interesMensual = 1.004074111
let interesDiario = 1.000135537

let interesArray = [interesAnual, interesMensual, interesDiario]

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