//Los arrays para el e-commerce

function Acetato (nombre, modelo, precio, img){
    this.nombre = nombre,
    this.precio = precio,
    this.modelo = modelo,
    this.img = img,
    this.say = function(){console.log (this.nombre + `el valor es de $` + this.precio)};
}

const acetato = new Acetato ("Acetato Verde limon", 250, "modelo0")
    let acetatoAzul = new Acetato ("Acetato Azul", 250, "modelo 1")
    let acetatoRojo = new Acetato ("Acetato Rojo", 250, "modelo 2")
    let acetatoMorado = new Acetato ("Acetato Morado", 250, "Modelo 3")
    let acetatoRosa = new Acetato ("Acetato Rosa", 250, "modelo 4")
    let acetatoNaranja = new Acetato ("Acetato Naranja", 250,"modelo 5")
    let acetatoVerde = new Acetato ("Acetato Verde", 250, "modelo 6")

    let arrayAcetato = [acetatoAzul, acetatoRojo, acetatoMorado, acetatoRosa, acetatoVerde, acetatoNaranja];

//lentes sol---->
function LentesSol (nombre, modelo, precio, img){
    this.nombre = nombre,
    this.precio = precio,
    this.modelo = modelo,
    this.img = img,
    this.say = function(){console.log (this.nombre + `el valor es de $` + this.precio)};
}

const lentessol = new LentesSol ("tornasol", 120, "modelo 7")
    let lentessolBambu = new LentesSol ("Banmbu", 120, "Modelo 8")
    let lentessolMadera = new LentesSol ("Madera", 120, "modelo 9")
    let lentessolImitacionBambu = new LentesSol ("Imitacion Bambu", 120, "modelo 10")
    let lentessolRojos = new LentesSol ("Color Rojo", 120, "modelo 11")
    let lentessolNaranjas = new LentesSol ("Color Naranja", 120, "modelo 12")


    let arrayLentessol = [lentessol, lentessolBambu, lentessolImitacionBambu, lentessolMadera, lentessolNaranjas,lentessolRojos];

// Codigo para cliente

let arrayMenu = arrayAcetato.concat(arrayLentessol)

function buscarporprecio(){
    let buscarPrecio = prompt("ingresa el monto a gastar")
    
    let precioBusqueda = array.filter((Acetato)=>Acetato.precio <= buscarPrecio)

    if(precioBusqueda == 0) {
        console.log("no existen productos con ese precio")
    }else{
        console.log("los productos con ese precio son:")
        for (let precioEncontrado of precioBusqueda){
            precioEncontrado.say()
        }
    }
}

let nombreCliente = promt ("Ingrese su nombre y apellido");
alert(`bienvenido ${nombreCliente} ingrese un numero para conocer nuestro catalogo`)

let menu = parseInt(prompt("1 - Acetato, 2 - Lentes de sol"))

switch (menu){
    case 1:
        for (Acetato of arrayAcetato){Acetato.say();}
        break;
    
    case 2:
        for (LentesSol of arrayLentessol){Acetato.say();}
    
    default:
        menu = parseInt(prompt(`Ingrese un nuemero del 1 al 2 para continuar`))
}
