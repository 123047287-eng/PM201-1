const prompt = require("prompt-sync")();
let productos = [
    {id:1, nombre:"expresso",ingredientes:"Leche entera con café de grano molido veracruzano",precio:55},
    {id:2,nombre:"Oatmealcookie",ingredientes:"Galleta hecha con miel y arandanos 3pz", precio:40},
    {id:3, nombre:"Tea Green", ingredientes:"Té verde caliente endulzado con miel",precio:55},
    {id:4, nombre:"Cheese Salad Sándwich", ingredientes:"Pan de centeno relleno de queso blanco y chedar junto con aderezo especial de la casa con agucate y lechuga", precio:55},
    {id:5,nombre:"Chocolate Cupcake",ingredientes:"Pan de chocolate especial de la casa con arandanos y nuez",precio:35}
];



let id = parseInt(prompt("id:"));
let nombre = prompt("nombre:");
let ingredientes = prompt("Ingredientes:");
let precio = parseInt(prompt("precio:"));

let productoNuevo = {
    id: id,
    nombre: nombre,
    ingredientes: ingredientes,
    precio: precio
};
productos.push(productoNuevo);

productos.forEach(producto => {
    console.log(producto.nombre,':' ,producto.ingredientes,'$',producto.precio);
});


let buscar = parseInt(prompt("id:"));
let producto2 = productos.find(producto => producto.id === buscar);
if(productoEncontrado){
    productoEncontrado.nombre =
        prompt("nombre:");

    productoEncontrado.ingredientes =
        prompt("ingredientes:");

    productoEncontrado.precio =
        parseFloat(prompt("precio:"));
} else {

    console.log("No se ha encontrado el id");

}

productos.forEach(producto => {
    console.log(producto.nombre,':' ,producto.ingredientes,'$',producto.precio);
});

let eliminar = parseInt(prompt("Eliminar id:"));
productos = productos.filter(producto => producto.id !== eliminar);
productos.forEach(producto => {
    console.log(producto.nombre,':' ,producto.ingredientes,'$',producto.precio);
});