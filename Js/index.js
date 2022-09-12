// CARRITO DE COMPRAS

let ingreso;
let costo;
let producto;
let codigoDescuento = 26945619;

class Personas {
    constructor(producto, costo){
        this.producto = producto,
        this.costo = costo
    }
}

var arr = []

for (let i = 0; i < 3; i++) {
    let ingreso = prompt(`Ingresar producto al carrito \n1- Combo Perro \n2- Combo Gato \n3- Combo Mixto`);
    if (ingreso == 1){
        costo = 100;
        producto = "Combo Perro";
        descuento()
    } else if (ingreso == 2){
        costo = 80;
        producto = "Combo Gato";
        descuento()
    } else if (ingreso == 3){
        costo = 150;
        producto = "Combo Mixto";
        descuento()
    } else {
        alert("Opcion incorrecta")
    }
    var objeto1 = new Personas(producto, costo)
    arr.push(objeto1)
    alert(`Su ${objeto1.producto} cuesta ${objeto1.costo}`)
}

for (let i = 0; i < arr.length; i++){
    alert(`OBJETO ${i+1} \nPRODUCTO ${arr[i].producto} \nPRECIO ${arr[i].costo}`)
}

function descuento(){
    let descuento = prompt("Posee algun descuento?")
    if (descuento == 'si' || (descuento) == "SI" || (descuento) == "Si" ){
        let ingresoDescuento = parseInt(prompt("Ingrese codigo"))
        if (ingresoDescuento == codigoDescuento){
            alert("Su codigo ha sido aceptado!")
            costo = costo - 2
        } else {
            alert("codigo invalido")
        }
    } else if (descuento == 'no' || descuento == 'NO' || descuento == 'No'){

    }
    else {
        alert("Opcion incorrecta")
    }
}

let precioTotal = arr.reduce((acc, e) => acc + e.costo, 0)
alert(`El precio final de su compra es de $${precioTotal}`)


//DOM

let donar = document.getElementById("donar")
for (const i of arr) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<h2>${i.producto}</h2>
                            <p>${i.costo}</p>`
    donar.append(contenedor)
}

let mensajePrecioTotal = document.createElement("h3")
mensajePrecioTotal.innerText = `El costo es de ${precioTotal}`
donar.append(mensajePrecioTotal)

//EVENTO DONACIONES

let botonDonar = document.getElementById("botonDonar")
botonDonar.addEventListener("click", clickDonar)
function clickDonar(){
    alert("Gracias por donar!");
}

// EVENTO SERVICIO DE PASEADORES

let botonPaseo = document.getElementById("botonContactarPaseo")
botonPaseo.addEventListener("click", clickPaseo)
function clickPaseo (i) {
    i.preventDefault()
    alert("Gracias por elegir nuestro servicio de paseo")
}