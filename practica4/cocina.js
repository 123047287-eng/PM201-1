const prompt = require("prompt-sync")();
let productos = [
    {nombre:"expresso",categoria:"bebida",ingredientes:"Leche entera con café de grano molido veracruzano",precio:55,
        disponible:true
    },
    {nombre:"Oatmealcookie",categoria:"postre",ingredientes:"Galleta hecha con miel y arandanos 3pz", precio:40,
        disponible:false
    },
    {nombre:"Tea Green",categoria:"bebida", ingredientes:"Té verde caliente endulzado con miel",precio:55,
        disponible:false
    },
    {nombre:"Cheese Salad Sándwich",categoria:"entrada", ingredientes:"Pan de centeno relleno de queso blanco y chedar junto con aderezo especial de la casa con agucate y lechuga", precio:55,
        disponible:true
    },
    {nombre:"Chocolate Cupcake",categoria:"postre",ingredientes:"Pan de chocolate especial de la casa con arandanos y nuez",precio:35,
        disponible:true
    },
    {nombre:"Expresso Doble",categoria:"bebida",ingredientes:"Café veracruzano intenso",precio:55,
        disponible:false
    },
    {nombre:"Cheesecake",categoria:"postre",ingredientes:"Queso crema, vainilla",precio:40,
        disponible:true },
    {nombre:"Pay de Limón",categoria:"postre",ingredientes:"Limón, galleta, leche condensada",precio:60,
        disponible:true
    },
    {nombre:"Papas Gajo",categoria:"snack",ingredientes:"Papa sazonada, especias",precio:45,
        disponible:true
    },
    {nombre:"Nachos con Queso",categoria:"snack",ingredientes:"Totopos, queso cheddar",precio:65,
        disponible:true
    },
    {nombre:"Dedos de Queso",categoria:"snack",ingredientes:"Queso mozzarella empanizado",precio:75,
        disponible:true
    },
    {nombre:"Panini Jamón y Queso",categoria:"entrada",ingredientes:"Jamón, queso manchego",precio:75,
        disponible:true
    },
    {nombre:"Milkshake Oreo",categoria:"bebida",ingredientes:"Helado, Oreo, crema",precio:110,
        disponible:true
    },
    {nombre:"Club Sandwich",categoria:"plato fuerte",ingredientes:"Pollo, jamón, tocino",precio:145,
        disponible:true
    },
    {nombre:"Hamburguesa Gourmet",categoria:"plato fuerte",ingredientes:"Doble carne, queso suizo",precio:190,
        disponible:true
    }
];
function menuCocina(){
let opcion;

    while (opcion !== 0) {
    console.log("----------COCINA------------");
    console.log("1. Agregar");
    console.log("2. Listar");
    console.log("3. Editar");
    console.log("4. Eliminar");
    console.log("5. Buscar ");
    console.log("6. Buscar Producto ");
    console.log("7. Filtrar precios");
    console.log("0. Salir");

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
            let tabla1 = productos.map(producto => ({Nombre: producto.nombre,Categoria: producto.categoria,
            Ingredientes: producto.ingredientes.slice(0,40) + "...",Precio: `$${producto.precio}`}));
            console.table(tabla1);
            console.log("Producto agregado...");           
        break;
        case 2:
            let tabla2 = productos.map(producto => ({Nombre: producto.nombre,Categoria: producto.categoria,
            Ingredientes: producto.ingredientes.slice(0,40) + "...",Precio: `$${producto.precio}`}));
            console.table(tabla2);
        break;

        case 3:
           let tabla5 = productos.map((producto) => ({Nombre: producto.nombre,}));
            console.table(tabla5);
            let indexEditar = parseInt(prompt("Ingresa número: "));
            if(indexEditar >= 0 && indexEditar < productos.length){
                productos[indexEditar].nombre = prompt("Nombre:");
                productos[indexEditar].categoria = prompt("Categoria:");
                productos[indexEditar].ingredientes = prompt("Ingredientes:");
                productos[indexEditar].precio = parseInt(prompt("Precio:"));               
                let tabla9 = productos.map(producto => ({Nombre: producto.nombre,Categoria: producto.categoria,
            Ingredientes: producto.ingredientes.slice(0,40) + "...",Precio: `$${producto.precio}`}));
            console.table(tabla9);
                console.log("Actualizado!! :)");
            }           
            else {console.log("Ingresa valores bien");}
            break;   
        case 4:
            let tabla6 = productos.map((producto) => ({Nombre: producto.nombre,}));
            console.table(tabla6);
            let index2 = parseInt(prompt("Producto a eliminar: "));
            productos.splice(index2, 1);
            let tabla7 = productos.map(producto => ({Nombre: producto.nombre,Categoria: producto.categoria,
            Ingredientes: producto.ingredientes.slice(0,40) + "...",Precio: `$${producto.precio}`}));
            console.table(tabla7);           
        break;
        case 5:
            let buscar = prompt("Buscar categoria (bebida, postre, snack, entrada o plato fuerte): ");
            let encontrados = productos.filter(producto => producto.categoria === buscar);
            if(encontrados.length > 0){let tabla3 = encontrados.map(producto => ({
                Nombre: producto.nombre,
                Categoria: producto.categoria,
                Ingredientes: producto.ingredientes.slice(0,40) + "...",
                Precio:`$${producto.precio}`}));
                console.table(tabla3);
                } else {console.log("NO ENCONTRADO..");}
                 break;
        case 6:
            let buscarProducto = prompt("Buscar producto: ");
            let encontrado = productos.find(producto => producto.nombre.toLowerCase() === buscarProducto.toLowerCase());
            if(encontrado){let tabla = [{Nombre: encontrado.nombre,
                Ingredientes: encontrado.ingredientes.slice(0,40) + "...",
                Precio: `$${encontrado.precio}`,}];
                console.table(tabla);} 
                else {console.log("NO ENCONTRADO");}
                break;

        case 7:
                let tipo = prompt("baratos o caros: ");
                if(tipo === "baratos"){
                    let baratos = productos.filter(producto => producto.precio < 100 );
                    console.log("PRODUCTOS BARATOS");
                    let tabla = baratos.map(producto => ({
                         Nombre: producto.nombre,
                         Precio: `$${producto.precio}`}));
                         console.table(tabla);}                 
                    else if(tipo === "caros"){let caros = productos.filter(producto => producto.precio >= 100);
                    console.log("PRODUCTOS CAROS");
                    let tabla = caros.map(producto => ({
                         Nombre: producto.nombre,
                         Precio: `$${producto.precio}`}));
                         console.table(tabla);}
                    else {console.log("Solo baratos o caros");}
                    break;
            case 0:
            console.log("Cerrando...");
            break;
            default:
    console.log("Opción inválida");
       
    }
}}  



function prepararCafe(){
    return new Promise((resolve, reject) => {
        console.log(`Preparando café...`);
         setTimeout(() => {let estado = Math.random();  
            if(estado > 0.6){
                resolve("Café preparado correctamente");
            }
            else if(estado > 0.3){
                reject("Falta ingrediente");
            }
            else{
                reject("Error en cocina");
            }
        }, 3000);
    });
}

function prepararAlimento(){
    return new Promise((resolve, reject) => {
        console.log(`Preparando...`);
         setTimeout(() => {let estado = Math.random();  
            if(estado > 0.6){
                resolve("LISTO!!....");
            }
            else if(estado > 0.3){
                reject("No hay en stock :((");
            }
            else{
                reject("Problemas con la preparación...");
            }
        }, 3000);
    });
}
        function promociones(){ 
    let promos = [
        {nombre:"Cafe 2x1",descripcion:"En la compra de un cafe grande, llevate el segundo gratis", vigencia:"2026-05-21",disponible:true},
        {nombre:"Martes de Expresso", descripcion:"2 expressos por $90",vigencia:"2026-07-10",disponible:true},
        {nombre:"Green Mood",descripcion:"Tea Green con 20% de descuento",vigencia:"solo fines de semana",disponible:true},         
    ];
    return promos;
}
module.exports = {
    productos,
    promociones,
    prepararAlimento,
    prepararCafe,
    menuCocina
};











