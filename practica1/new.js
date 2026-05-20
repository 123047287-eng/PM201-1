// 1. Crear un arreglo vacío
let usuarios = [];

// 2. Crear los objetos
let usuario1 = { nombre: "Ana", edad: 25 };
let usuario2 = { nombre: "Luis", edad: 30 };

// 3. Guardarlos en el arreglo
usuarios.push(usuario1);
usuarios.push(usuario2);


// Resultado: [{nombre: 'Ana', edad: 25}, {nombre: 'Luis', edad: 30}]
usuarios.forEach(usuario1=>{
    console.log(usuario1.nombre);
});