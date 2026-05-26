const prompt = require("prompt-sync")();
const caja = require("./caja");
const cocina = require("./cocina");
let productos = cocina.productos;

function estadoPedido(producto){
    console.log(`
Pedido recibido: ${producto.nombre}
`);
    setTimeout(() => {
        console.log(`
Preparando pedido...
`);
       
        if(producto.categoria === "bebida"){
            cocina.prepararCafe()
            .then((mensaje) => {
                console.log(mensaje);
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            cocina.prepararAlimento()
            .then((mensaje) => {
                console.log(mensaje);
            })
           .catch((error) => {
             console.log(error);
            });
        }
    }, 2000);

    setTimeout(() => {
        console.log(`
Empacando pedido...
`);

    }, 4000);

    setTimeout(() => {

        let entregado = Math.random() > 0.3;

        if(entregado){

            console.log(`
Pedido entregado 
`);

        } else {

            console.log(`
Pedido cancelado 
`);

        }

    }, 6000);
}


function menuCliente(){

    let opcion = 0;

    while(opcion !== 4){

        console.log(`
======= CLIENTE =======

1. Ver menú
2. Realizar pedido
3. Ver promociones
4. Salir
`);

        opcion = parseInt(
            prompt("Selecciona una opción: ")
        );

        switch(opcion){

            case 1:

                console.log(`
======= MENÚ =======
`);

                console.table(

                    productos.map((producto,index)=>({
                        
                        ID:index,

                        Nombre:producto.nombre,

                        Categoria:producto.categoria,

                        Precio:`$${producto.precio}`
                    }))
                );

            break;

            case 2:

                console.log(`
======= HACER PEDIDO =======
`);

                console.table(

                    productos.map((producto,index)=>({
                        
                        ID:index,

                        Nombre:producto.nombre,

                        Precio:`$${producto.precio}`
                    }))
                );

                let id = parseInt(
                    prompt("Selecciona ID del producto: ")
                );

                let cantidad = parseInt(
                    prompt("Cantidad: ")
                );

                let productoSeleccionado =
                productos[id];

                if(productoSeleccionado){

                  
                    caja.agregarPedido(

                        id,
                        cantidad,

                        (estado)=>{

                            console.log(`
===== NOTIFICACIÓN =====

${estado}
`);
                        }
                    );

                   
                    estadoPedido(productoSeleccionado);

                } else {

                    console.log(`
Producto inválido
`);
                }

            break;

            case 3:

                console.log(`
======= PROMOCIONES =======

• 2x1 en Expresso
• 20% en Tea Green
• Cupcake gratis en compras mayores a $200
`);

            break;

            case 4:

                console.log(`
Gracias por tu compra :)
`);

            break;

            default:

                console.log(`
Opción inválida
`);
        }
    }
}


module.exports = {

    menuCliente
};


