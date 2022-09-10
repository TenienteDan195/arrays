

let nombre =  "cliente"
    console.log("bienvenido " + nombre);


const producto = [
    {id: 1,  nombre: "lente", precio: 30},
    {id: 1,  nombre: "micas", precio: 120},
    {id: 1,  nombre: "funda", precio: 70},
    {id: 1,  nombre: "trapo", precio: 90},
];

for(const item of producto){
    console.log(item.nombre);
    console.log(item.precio);
};


const product = ["modelo 1", "modelo 2", "modelo 3", "modelo 4"];
    console.log(product.length);
    console.log(product.push("modelo 5"));
    console.log(product.pop(3));