
console.log('Datos ingresados')

let nombreIngresado = prompt("ingrese su nombre")
let apellidoIngresado = prompt("ingrese su apellido")
const interes = 1.02 // interes compuesto del 2% mensual
let interesTotal = 1


if ((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert('hola'+ ' '+ nombreIngresado + ' ' + apellidoIngresado +"\n Seleccione aceptar y a continuacion Ingrese capital a invertir");
    let datoCapital = prompt("Ingrese el Capital a invertir")
    let capital = parseFloat(datoCapital)
    let datoMeses = prompt("Ingrese periodo en meses que desea invertir")
    let meses = parseInt(datoMeses)
    for (let i = 0; i < meses; i++) {
        interesTotal = interesTotal * interes
    }

    //let capitalReintegro = capital * interesTotal
    alert('capital a reintegrar: '+ capital * interesTotal)
}
else {
    alert('ingrese su nombre y apellido')
}

    

