function multi(multi1, multi2){
    return multi1 * multi2
}
function suma(suma1, suma2){
    return suma1 + suma2
}

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


function verHistorial(array){
    console.log("Bienvenido! su historial es:")
    array.forEach((productos)=>{
        console.log(productos.id, productos.producto, productos.precio, productos.precioIVA)
    })
}


function calculoIva() {
    let = productosCIVA = [estanteria];
    do {
        this.Producto = prompt("Ingrese el nombre del producto:");
        this.Precio = parseFloat(prompt("Ingrese el precio del producto:"));
        while(isNaN(this.Precio)){
            this.Precio = parseInt(prompt("ATENCION TIPO DE DATO INCORRECTO, Ingrese el valor del producto"))
         }
        let IVA = this.Precio * 1.21;
        const ProductoNuevo = new productos(estanteria.length+1, this.Producto, this.Precio, IVA)
        estanteria.push(ProductoNuevo) 
        var continuar = prompt("¿Desea calcular el IVA de otro producto? (si/no)").toLowerCase();
    } while (continuar === 'si');
    console.log(productosCIVA)
}


let salirMenu = false
do{
    let  impGanancias = 0.35
    let  impPais = 0.4
    let  impQatar = 0.25
    let tax = impGanancias + impPais
    let taxQatar = impGanancias + impPais + impQatar
    let valorDolar = 190
    let opciones = parseInt(prompt(`Ingrese la opción deseada
       1 - Calcular impuestos (USD)
       2 - Calcular impuestos + impuesto Qatar (USD)
       3 - Calcular impuestos (ARS)
       4 - Calcular impuestos + impuesto Qatar (ARS)
       5 - Calcular IVA
       6 - Ver historial (IVA)
       0 - Salir del menu`))
    switch(opciones){
        case 1:
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
                 var continuar = prompt("¿Desea calcular nuevamente el impuesto? (si/no)");
            }while(continuar === 'si');
        break
        case 2:
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
                 var continuar = prompt("¿Desea calcular nuevamente el impuesto? (si/no)");
            } while (continuar === 'si');
        break
        case 3:
            do {
                let valor = parseInt(prompt("Ingrese el valor a calcular"))
                while(isNaN(valor)){
                    valor = parseInt(prompt("ATENCION TIPO DE DATO INCORRECTO, Ingrese el valor a calcular"))
                 }
                 let cImpuestos = multi(valor, tax);
                 let totalCimp = suma(cImpuestos, valor);
                 alert(`El valor total con impuestos es ${totalCimp}`)
                 var continuar = prompt("¿Desea calcular nuevamente el impuesto? (si/no)");
            } while (continuar === 'si');
        break
        case 4:
            do {
                let valor = parseInt(prompt("Ingrese el valor a calcular"))
                while(isNaN(valor)){
                    valor = parseInt(prompt("ATENCION TIPO DE DATO INCORRECTO, Ingrese el valor a calcular"))
                 }
                 let cImpuestos = multi(valor, taxQatar);
                 let totalCimpQatar = suma(cImpuestos, valor);
                 alert(`El valor total con impuestos es ${totalCimpQatar}`)
                 var continuar = prompt("¿Desea calcular nuevamente el impuesto? (si/no)");
            } while (continuar === 'si');
        break
        case 5:
            calculoIva() 
        break
        case 6:
            verHistorial(estanteria)
        break
        case 0:
            alert("gracias por utilizar nuestra app")
            salirMenu = true
        break
        default:
            console.log("Ingrese una opción correcta")
        break
    }
}while(!salirMenu)





