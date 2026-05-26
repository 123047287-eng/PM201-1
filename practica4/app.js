const prompt = require("prompt-sync")();

let opcion = 0;

while(opcion !== 4){

    console.log(`
===== CAFETERÍA =====

1. Cliente
2. Cocina
3. Caja
4. Salir
`);

    opcion = parseInt(
        prompt("Selecciona una opción: ")
    );

    switch(opcion){

        case 1:

            delete require.cache[
                require.resolve("./cliente")
            ];

            const cliente = require("./cliente");

            cliente.menuCliente();


        break;

        case 2:

           delete require.cache[
                require.resolve("./cocina")
            ];

            const cocina = require("./cocina");

            cocina.menuCocina();

        break;

        case 3:
            delete require.cache[
                require.resolve("./caja")
            ];

            const caja = require("./caja");

            caja.menuCaja();
        break;

        case 4:

            console.log("Saliendo...");

        break;
    }
}