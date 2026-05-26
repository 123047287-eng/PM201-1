const prompt = require("prompt-sync")();
const cliente = require("./cliente");
const cocina = require("./cocina");
let productos = cocina.productos;
let pedidos = cliente.pedidos || [];
let totalAcumulado = 0;

function agregarPedido(idProducto, cantidad, callback){

    let productoEncontrado = productos.find(
        (producto, index) => index === idProducto
    );

    if(productoEncontrado){

        let subtotal = productoEncontrado.precio * cantidad;

        let pedido = {
            producto: productoEncontrado.nombre,
            precio: productoEncontrado.precio,
            cantidad: cantidad,
            subtotal: subtotal
        };       
        pedidos.push(pedido);
        totalAcumulado += subtotal;

        console.log(`
*******PEDIDO REGISTRADO EN CAJA*******

Producto: ${pedido.producto}

Precio unitario: $${pedido.precio}

Cantidad: ${pedido.cantidad}

Subtotal: $${pedido.subtotal}

TOTAL ACUMULADO: $${totalAcumulado}
`);     
        let resultado = Math.random() > 0.3
            ? "pedido listo"
            : "pedido cancelado";

        
        callback(resultado);
    }
    else{

        callback("Producto no encontrado");
    }
}


function notificar(estado){

    console.log(`
===== NOTIFICACIÓN =====

${estado}
`);
}

function menuCaja(){

    let opcion = 0;

    while(opcion !== 4){

        console.log(`
******* BIENVENIDO A CAJA *******

1. Ver menú
2. Agregar pedido
3. Ver ticket
4. Salir
`);

        opcion = parseInt(
            prompt("Selecciona una opción: ")
        );

        switch(opcion){

            case 1:

                console.log(`
******* PRODUCTOS DISPONIBLES *******
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

                console.table(

                    productos.map((producto,index)=>({

                        ID:index,

                        Nombre:producto.nombre,

                        Precio:`$${producto.precio}`
                    }))
                );

                let id = parseInt(
                    prompt("Ingresa ID del producto: ")
                );

                let cantidad = parseInt(
                    prompt("Cantidad: ")
                );

            
                agregarPedido(id, cantidad, notificar);

            break;

            case 3:

                console.log(`
****** TICKET ******
`);

                if(pedidos.length === 0){

                    console.log(
                        "No hay pedidos registrados"
                    );

                    break;
                }

                pedidos.forEach((pedido,index)=>{

                    const {
                        producto,
                        precio,
                        cantidad,
                        subtotal
                    } = pedido;

                    console.log(`
Pedido #${index+1}

Producto: ${producto}

Precio unitario: $${precio}

Cantidad: ${cantidad}

Subtotal: $${subtotal}
`);
                });

                let subtotalGeneral = pedidos.reduce(

                    (acumulador,pedido)=>

                    acumulador + pedido.subtotal,

                    0
                );

                let iva = subtotalGeneral * 0.16;

                let totalFinal =
                    subtotalGeneral + iva;

                console.log(`
================================

Subtotal: $${subtotalGeneral}

IVA (16%): $${iva.toFixed(2)}

TOTAL A PAGAR: $${totalFinal.toFixed(2)}

================================
`);

                notificar("Ticket generado correctamente");

            break;

            case 4:

                console.log(
                    "Saliendo de caja..."
                );

            break;

            default:

                console.log(
                    "Opción inválida"
                );
        }
    }
}

module.exports = {

    menuCaja,

    pedidos,

    agregarPedido
};