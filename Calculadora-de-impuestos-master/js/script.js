let  impGanancias = 0.35
let  impPais = 0.4
let  impQatar = 0.25
let tax = impGanancias + impPais
let taxQatar = impGanancias + impPais + impQatar
let valorDolar = 193

// funciones generales

function multi(multi1, multi2){
    return multi1 * multi2
}
function suma(suma1, suma2){
    return suma1 + suma2
}
function ordenarMenormayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b)=> a.precio - b.precio)
    verHistorial(menorMayor)
}

function ordenarMayormenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a,b)=> b.precio - a.precio)
    verHistorial(mayorMenor)
}


// Clase constructora

class productos {
    constructor(id, producto, precio, precioIVA){
        this.id = id,
        this.producto = producto,
        this.precio = precio,
        this.precioIVA = precioIVA
    }
}

const productos1= new productos(1,"Arroz",200, 242)

const productos2 = new productos(2,"Atun",700, 847)

const productos3 = new productos(3,"fideos", 500, 605)

const productos4= new productos(4,"papa", 150, 181)


const estanteria = [productos1, productos2, productos3, productos4]


// funciones del menu

function calcularImpuestoUSD(){
    let continuar;
    do{
        let valor = parseInt(prompt("Ingrese el valor a calcular"))
        while(isNaN(valor)){
            valor = parseInt(prompt("ATENCION TIPO DE DATO INCORRECTO, Ingrese el valor a calcular"))
         }
         multi(valorDolar, valor)
         let sImpuestos = multi(valorDolar, valor);
         multi(sImpuestos, tax)
         let cImpuestos = multi(sImpuestos, tax);
         let totalCimp = suma(cImpuestos, sImpuestos);
         alert(`El valor total con impuestos es ${totalCimp}`)
        continuar = prompt("¿Desea calcular nuevamente el impuesto? (si/no)");
    }while(continuar === 'si');
}

function calcularImpuestoUSDQatar(){
    let continuar;
    do {
        let valor = parseInt(prompt("Ingrese el valor a calcular"))
        while(isNaN(valor)){
            valor = parseInt(prompt("ATENCION TIPO DE DATO INCORRECTO, Ingrese el valor a calcular"))
         }
         multi(valorDolar, valor)
         let sImpuestos = multi(valorDolar, valor);
         multi(sImpuestos, tax)
         let cImpuestos = multi(sImpuestos, taxQatar);
         let totalCimpQatar = suma(cImpuestos, sImpuestos);
         alert(`El valor total con impuestos Qatar es ${totalCimpQatar}`)
        continuar = prompt("¿Desea calcular nuevamente el impuesto? (si/no)");
    } while (continuar === 'si');
}

function calcularImpuestoARS(){
    let continuar;
    do {
        let valor = parseInt(prompt("Ingrese el valor a calcular"))
        while(isNaN(valor)){
            valor = parseInt(prompt("ATENCION TIPO DE DATO INCORRECTO, Ingrese el valor a calcular"))
         }
         let cImpuestos = multi(valor, tax);
         let totalCimp = suma(cImpuestos, valor);
         alert(`El valor total con impuestos es ${totalCimp}`)
        continuar = prompt("¿Desea calcular nuevamente el impuesto? (si/no)");
    } while (continuar === 'si');
}

function calcularImpuestoARSQatar(){
    let continuar;
    do {
        let valor = parseInt(prompt("Ingrese el valor a calcular"))
        while(isNaN(valor)){
            valor = parseInt(prompt("ATENCION TIPO DE DATO INCORRECTO, Ingrese el valor a calcular"))
         }
         let cImpuestos = multi(valor, taxQatar);
         let totalCimpQatar = suma(cImpuestos, valor);
         alert(`El valor total con impuestos es ${totalCimpQatar}`)
        continuar = prompt("¿Desea calcular nuevamente el impuesto? (si/no)");
    } while (continuar === 'si');
}


function agregarProducto() {
    let productosCIVA = [estanteria];
    let continuar;
    do {
        let Producto = prompt("Ingrese el nombre del producto:");
        let Precio = parseFloat(prompt("Ingrese el precio del producto:"));
        while(isNaN(Precio)){
            Precio = parseInt(prompt("ATENCION TIPO DE DATO INCORRECTO, Ingrese el valor del producto"))
         }
        let IVA = Precio * 1.21;
        const ProductoNuevo = new productos(estanteria.length+1, Producto, Precio, IVA)
        estanteria.push(ProductoNuevo) 
        continuar = prompt("¿Desea calcular el IVA de otro producto? (si/no)").toLowerCase();
    } while (continuar === 'si');
    console.log(productosCIVA)
}

function verHistorial(array){
    console.log("Bienvenido! su historial es:")
    array.forEach((productos)=>{
        console.log(productos.id, productos.producto, productos.precio, productos.precioIVA)
    })
}

function ordenarHistorial(array) {
    let opcion = parseInt(prompt (`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    `))
    switch (opcion) {
        case 1:
            ordenarMenormayor(array)
        break;
        case 2:
            ordenarMayormenor(array)
        break;
        default:
            console.log("Ingrese una opción correcta")
        break;
    }
}


// let salirMenu = false
// do{
//     let opciones = parseInt(prompt(`Ingrese la opción deseada
//        1 - Calcular impuestos (USD)
//        2 - Calcular impuestos + impuesto Qatar (USD)
//        3 - Calcular impuestos (ARS)
//        4 - Calcular impuestos + impuesto Qatar (ARS)
//        5 - Calcular IVA
//        6 - Ver historial (IVA)
//        7 - ordenar historial (IVA)
//        0 - Salir del menu`))
//     switch(opciones){
//         case 1:
//             calcularImpuestoUSD()
//         break
//         case 2:
//             calcularImpuestoUSDQatar()
//         break
//         case 3:
//             calcularImpuestoARS()
//         break
//         case 4:
//             calcularImpuestoARSQatar()
//         break
//         case 5:
//             agregarProducto() 
//         break
//         case 6:
//             verHistorial(estanteria)
//         break
//         case 7:
//             ordenarHistorial(estanteria)
//         break
//         case 0:
//             alert("gracias por utilizar nuestra app")
//             salirMenu = true
//         break
//         default:
//             console.log("Ingrese una opción correcta")
//         break
//     }
// }while(!salirMenu)`

let historialProductos = document.getElementById("1-r") 


let VERhistorialProductos = document.getElementById("btn-historial") 

let historialdoble = document.getElementById("historial-btn")
let inputProducto = document.getElementById("nombreProducto")
let inputPrecio = document.getElementById("nombrePrecio")

let botonAgregarIVA = document.getElementById("btn-agregarProducto")
botonAgregarIVA.addEventListener("click", () => {cargarProducto(estanteria)})

VERhistorialProductos.onclick = () =>{
    verHistorial(estanteria)
}

historialProductos.onclick = () =>{
    verHistorial(estanteria)
}



function verHistorial(array){
    historialProductos.innerHTML = ""
    for (let productos of array){
        let nuevoProducto = document.createElement("ul")
        nuevoProducto.classList.add("my-2")
        nuevoProducto.innerHTML = `
        <ul class="list-group list-group-horizontal" id="${productos.id}">
        <li class="list-group-item">${productos.id}</li>
        <li class="list-group-item">${productos.producto}</li>
        <li class="list-group-item">${productos.precio}</li>
        <li class="list-group-item">${productos.precioIVA}</li>
      </ul>
        `
        historialProductos.appendChild(nuevoProducto)
    }
}



function cargarProducto(array) {
    let inputProducto = document.getElementById("nombreProducto");
    let inputPrecio = document.getElementById("nombrePrecio")
    let IVA = inputPrecio.value * 1.21;
    const ProductoNuevo = new productos(array.length+1, inputProducto.value, inputPrecio.value, IVA)
    array.push(ProductoNuevo) 
    verHistorial(array)
    inputProducto.value = ""
    inputPrecio.value = ""
}
calculador



// let inputDolarOficial = document.getElementById("inputDolarOficial");
// let inputSinImpuestos = document.getElementById("inputSinImpuestos");
// let inputIMPpais = document.getElementById("inputIMP-pais");
// let inputIMPganancia = document.getElementById("inputIMP-ganancia");
// let inputQatar = document.getElementById("inputQatar");

// function calcularImpuestoUSD(){
//         let inputCalculo= document.getElementById("calculador");
//         multi(inputDolarOficial.value, inputCalculo.value)
//         let sImpuestos = multi(inputDolarOficial.value, inputCalculo.value);
//         multi(sImpuestos, tax)
//         let cImpuestos = multi(sImpuestos, tax);
//         let totalCimp = suma(cImpuestos, sImpuestos);
//         console.log("calcularImpuestoUSD")
