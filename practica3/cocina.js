const prompt = require("prompt-sync")();
let productos = [
    {nombre:"expresso",ingredientes:"Leche entera con café de grano molido veracruzano",precio:55},
    {nombre:"Oatmealcookie",ingredientes:"Galleta hecha con miel y arandanos 3pz", precio:40},
    {nombre:"Tea Green", ingredientes:"Té verde caliente endulzado con miel",precio:55},
    {nombre:"Cheese Salad Sándwich", ingredientes:"Pan de centeno relleno de queso blanco y chedar junto con aderezo especial de la casa con agucate y lechuga", precio:55},
    {nombre:"Chocolate Cupcake",ingredientes:"Pan de chocolate especial de la casa con arandanos y nuez",precio:35}
];



 let opcion = 0;

while (opcion !== 5) {
    
    console.log("----------COCINA------------");
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Editar");
    console.log("4. Eliminar ");
    console.log("5. Salir");

    opcion = parseInt(prompt("Elige una opción:"));

    switch (opcion) {
        case 1:
            let ProductoNuevo = {
                nombre: prompt("nombre:"),
                ingredientes: prompt("ingredientes:"),
                precio: parseInt(prompt("precio:"))
            };
            productos.push(ProductoNuevo);
            console.log("Producto agregado...")
            console.table(productos.map(producto => ({Nombre: producto.nombre,Ingredientes:        producto.ingredientes.slice(0, 40) + "...",Precio: `$${producto.precio}` }))  
);
            break;
        case 2:
             console.table(productos.map(producto => ({Nombre: producto.nombre,Ingredientes:        producto.ingredientes.slice(0, 40) + "...",Precio: `$${producto.precio}` }))  
            
); break;
        case 3:
        productos.forEach((producto, index) => {console.log(`${index} - ${producto.nombre}`);});
        let indexEditar = parseInt(prompt("Ingresa el número del producto"));
         if(indexEditar >= 0 && indexEditar < productos.length){
            productos[indexEditar].nombre = prompt("Nombre:");
            productos[indexEditar].ingredientes = prompt("Ingredientes");
            productos[indexEditar].precio = parseInt(prompt("Precio:"));
        console.log("Se ha actualizado...");
        console.table(productos.map(producto => ({Nombre: producto.nombre,Ingredientes:              producto.ingredientes.slice(0, 40) + "...",Precio: `$${producto.precio}` }))  
        
);
        } else {console.log("Índice no válido");}
        break;
        case 4:
            productos.forEach((producto, index) => {console.log(`${index} - ${producto.nombre}`);});
            let index2 = parseInt(prompt("Producto a eliminar"));
            productos.splice(index2, 1);
            break;
        case 5:
            console.log("Saliendo....");
            break;

        default:
            console.log("Solo opciones de 1-5");
    }
}


promociones(){
    let promociones = [
        {nombre:"Cafe 2x1", descripcion:"En la compra de un cafe grande, llevate el segundo gratis",vigencia:"2026-05-21"},
        {nombre:"Martes de Expresso", descripcion:"2 expressos por $90",vigencia:"2026-07-10"},
        {nombre:"Green Mood", descripcion:"Tea Green con 20% de descuento",vigencia:"solo fines de semana"},
    ];
}