const prompt = require("prompt-sync")();

let productos = [
    {nombre:"expresso",categoria:"bebida",ingredientes:"Leche entera con café de grano molido veracruzano",precio:55},
    {nombre:"Oatmealcookie",categoria:"postre",ingredientes:"Galleta hecha con miel y arandanos 3pz", precio:40},
    {nombre:"Tea Green",categoria:"bebida", ingredientes:"Té verde caliente endulzado con miel",precio:55},
    {nombre:"Cheese Salad Sándwich",categoria:"entrada", ingredientes:"Pan de centeno relleno de queso blanco y chedar junto con aderezo especial de la casa con agucate y lechuga", precio:55},
    {nombre:"Chocolate Cupcake",categoria:"postre",ingredientes:"Pan de chocolate especial de la casa con arandanos y nuez",precio:35},
    {nombre:"Expresso Doble",categoria:"bebida",ingredientes:"Café veracruzano intenso",precio:55},
    {nombre:"Cheesecake",categoria:"postre",ingredientes:"Queso crema, vainilla",precio:40},
    {nombre:"Pay de Limón",categoria:"postre",ingredientes:"Limón, galleta, leche condensada",precio:60},
    {nombre:"Papas Gajo",categoria:"snack",ingredientes:"Papa sazonada, especias",precio:45},
    {nombre:"Nachos con Queso",categoria:"snack",ingredientes:"Totopos, queso cheddar",precio:65},
    {nombre:"Dedos de Queso",categoria:"snack",ingredientes:"Queso mozzarella empanizado",precio:75},
    {nombre:"Panini Jamón y Queso",categoria:"entrada",ingredientes:"Jamón, queso manchego",precio:75},
    {nombre:"Milkshake Oreo",categoria:"bebida",ingredientes:"Helado, Oreo, crema",precio:110},
    {nombre:"Club Sandwich",categoria:"plato fuerte",ingredientes:"Pollo, jamón, tocino",precio:145},
    {nombre:"Hamburguesa Gourmet",categoria:"plato fuerte",ingredientes:"Doble carne, queso suizo",precio:190}
];

let opcion = 0;
if(require.main === module){
    while (opcion !== 7) {
    console.log("----------COCINA------------");
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Editar");
    console.log("4. Eliminar");
    console.log("5. Buscar categoria");
    console.log("6. Filtrar precios");
    console.log("7. Salir");

    opcion = parseInt(prompt("Elige una opción:"));
    switch (opcion) {
        case 1:
            let ProductoNuevo = {
                nombre: prompt("Nombre:"),
                categoria: prompt("Categoria:"),
                ingredientes: prompt("Ingredientes:"),
                precio: parseInt(prompt("Precio:"))
            };

            productos.push(ProductoNuevo);
            console.log("Producto agregado...");
            productos.forEach(producto => {console.log(`
                Nombre: ${producto.nombre}
                Categoria: ${producto.categoria}
                Ingredientes: ${producto.ingredientes.slice(0,40)}...
                Precio: $${producto.precio}
                ========================`); });
        break;
        case 2:
            productos.forEach(producto => {
                console.log(`
                    Nombre: ${producto.nombre}
                    Categoria: ${producto.categoria}
                    Ingredientes: ${producto.ingredientes.slice(0,40)}...
                    Precio: $${producto.precio}
                




========================
`);

            });

        break;

        case 3:
productos.forEach((producto, index) => {
console.log(`${index} - ${producto.nombre}`);});
 let indexEditar = parseInt(prompt("Ingresa el número del producto"));
 if(indexEditar >= 0 && indexEditar < productos.length){
 productos[indexEditar].nombre = prompt("Nombre:");
productos[indexEditar].categoria = prompt("Categoria:");
productos[indexEditar].ingredientes = prompt("Ingredientes:");
productos[indexEditar].precio = parseInt(prompt("Precio:"));
console.log("Se ha actualizado...");
 } else { console.log("No válido"); }
break;
    case 4:
    productos.forEach((producto, index) => {
     console.log(`${index} - ${producto.nombre}`); });
      let index2 = parseInt(prompt("Producto a eliminar"));
    productos.splice(index2, 1);
     console.log("Producto eliminado");

        break;
    case 5:
    let buscar = prompt("Buscar categoria (bebida/postre): ");
    let encontrado = productos.find(
    producto => producto.categoria === buscar );
    if(encontrado){console.log(`
Nombre: ${encontrado.nombre}
Categoria: ${encontrado.categoria}
Ingredientes: ${encontrado.ingredientes}
Precio: $${encontrado.precio}
`);} else {
     console.log("No se encontró esa categoria");
            }
        break;
        case 6:
            let tipo = prompt("baratos o caros: ");
            if(tipo === "baratos"){
            let baratos = productos.filter(
            producto => producto.precio <= 60
                );
    console.log("PRODUCTOS BARATOS");
 baratos.forEach(producto => {console.log(`${producto.nombre} - $${producto.precio}`);});
 } else if(tipo === "caros"){let caros = productos.filter(producto => producto.precio >= 100);
console.log("PRODUCTOS CAROS");
caros.forEach(producto => {console.log(`${producto.nombre} - $${producto.precio}`);});}
 else {console.log("Solo baratos o caros");}
break;
    case 7: console.log("Saliendo...."); break;
    default: console.log("Solo opciones válidas");
    }
}}

function promociones(){
    let promociones = [
        {
            nombre:"Cafe 2x1",
            descripcion:"En la compra de un cafe grande, llevate el segundo gratis",
            vigencia:"2026-05-21",
            disponible:true
        },

        {
            nombre:"Martes de Expresso",
            descripcion:"2 expressos por $90",
            vigencia:"2026-07-10",
            disponible:true
        },

        {
            nombre:"Green Mood",
            descripcion:"Tea Green con 20% de descuento",
            vigencia:"solo fines de semana",
            disponible:true
        },
    ];

    return promociones;
}
module.exports = {
    productos,
    promociones
};