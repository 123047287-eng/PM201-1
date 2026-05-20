const prompt = require("prompt-sync")();
let productos = [
    {id:1, nombre:"expresso",ingredientes:"Leche entera con café de grano molido veracruzano",precio:55},
    {id:2,nombre:"Oatmealcookie",ingredientes:"Galleta hecha con miel y arandanos 3pz", precio:40},
    {id:3, nombre:"Tea Green", ingredientes:"Té verde caliente endulzado con miel",precio:55},
    {id:4, nombre:"Cheese Salad Sándwich", ingredientes:"Pan de centeno relleno de queso blanco y chedar junto con aderezo especial de la casa con agucate y lechuga", precio:55},
    {id:5,nombre:"Chocolate Cupcake",ingredientes:"Pan de chocolate especial de la casa con arandanos y nuez",precio:35}
];

let opcion = 0;

while (opcion !== 5) {

    console.log("----------COCINA------------");
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Editar");
    console.log("4. Eliminar ");
    console.log("5. Salir");

    opcion = parseInt(prompt("Elige una opción: "));

    switch (opcion) {
        case 1:
            let ProductoNuevo = {
                id: parseInt(prompt("id:")),
                nombre: prompt("nombre:"),
                ingredientes: prompt("ingredientes:"),
                precio: parseInt(prompt("precio:"))
            };
            productos.push(ProductoNuevo);
            break;
        case 2:
             productos.forEach(producto => {
                console.log(producto.nombre,':' ,producto.ingredientes,'$',producto.precio);
                });
            break;
        case 3:
            let buscar = parseInt(prompt("id:"));
            let producto2 = productos.find(producto => producto.id === buscar);

            if(producto2){
                producto2.nombre =   prompt("nombre:");
                producto2.ingredientes =  prompt("ingredientes:");
                producto2.precio = parseInt(prompt("precio:"));
        } else {
            console.log("No se ha encontrado el id");
        }
        break;
        case 4:
            let eliminar = parseInt(prompt("id:"));
            productos = productos.filter(producto => producto.id !== eliminar);        
            break;

        case 5:
            console.log("Saliendo....");
            break;

        default:
            console.log("Solo opciones de 1-5");
    }
}