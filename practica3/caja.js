const prompt = require("prompt-sync")();
const cocina = require("./cocina");

let productos = cocina.productos;
let pedidos = [];

function agregarPedido(idProducto, cantidad) {

   
    let productoEncontrado = productos.find(
        producto => producto.id === idProducto
    );

  
    if (productoEncontrado) {

       
        let subtotal = productoEncontrado.precio * cantidad;

       
        let pedido = {

            producto: productoEncontrado.nombre,

            precio: productoEncontrado.precio,

            cantidad: cantidad,

            subtotal: subtotal
        };

     
        pedidos.push(pedido);

        console.log(`

PEDIDO AGREGADO

Producto: ${pedido.producto}

Precio unitario: $${pedido.precio}

Cantidad: ${pedido.cantidad}

Subtotal: $${pedido.subtotal}
`);
    }

    else {

        console.log("Producto no encontrado");
    }
}

let opcion = 0;

while (opcion !== 4) {

    console.log(`
        CAJA

1. Ver Menu
2. Agregar pedido
3. Ver pedidos
4. Salir
`);

    opcion = parseInt(
        prompt("Selecciona una opción: ")
    );

    switch (opcion) {

        case 1:

            console.log(`MENÚ`);

            productos.forEach(producto => {

                console.log(`
                            ID: ${producto.id}

                            Producto: ${producto.nombre}

                            Precio: $${producto.precio}
                            `);
            });

        break;

        case 2:

            let id = parseInt(
                prompt("Ingresa el ID del producto: ")
            );

            let cantidad = parseInt(
                prompt("Ingresa la cantidad: ")
            );

            agregarPedido(id, cantidad);

        break;

        case 3:

            console.log(`LISTA DE PEDIDOS`);

            if (pedidos.length === 0) {

                console.log("No hay pedidos registrados");
            }

            else {

                pedidos.forEach((pedido, index) => {

                    // Destructuring
                    const { producto, precio, cantidad, subtotal } = pedido;

                    console.log(`
                                Pedido #${index + 1}
                                Producto: ${producto}
                                Precio unitario: $${precio}
                                Cantidad: ${cantidad}
                                Subtotal: $${subtotal}
                                `);
                });

                // Subtotal general usando reduce()
                let subtotalGeneral = pedidos.reduce(
                    (acumulador, pedido) =>
                        acumulador + pedido.subtotal,
                    0
                );

                // IVA
                let iva = subtotalGeneral * 0.16;

                // Total final
                let totalFinal = subtotalGeneral + iva;

                console.log(`
                        Subtotal: $${subtotalGeneral}
                        IVA (16%): $${iva}
                        TOTAL A PAGAR: $${totalFinal}
                        `);
            }

        break;

        case 4:

            console.log("Saliendo del sistema...");

        break;

        default:

            console.log("Solo opciones del 1 al 4");
    }
}