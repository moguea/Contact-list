// Lista de contactos con datos predefinidos
let listaDeContactos = [
    "Brayan moguea "
    "Nicole cobos"
    "Berlin"
    "Luis moguea"
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreCompleto) {
    listaDeContactos.push(nombreCompleto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreCompleto) {
let index = listaContactos.indexOf(nombreCompleto);
if (index !== -1) {
    listaContactos.splice(index, 1);
}
}

// Función para imprimir los contactos presentes en la lista
function imprimirContactos(){
    console.log("listaDeContactos:");
    listaContactos.forEach((contacto, index) => {
        console.log(`${index + 1}. ${contacto}`);

    });
}

// Ejemplo de uso
console.log("lista inicial:");
imprimirContactos();
agregarContacto("Brayan moguea ");
agregarContacto("Nicole cobos");
agregarContacto("Berlin");

console.log("Lista después de agregar nuevos contactos:");
imprimirContactos();

borrarContacto("Luis moguea");

console.log("Lista después de borrar un contacto:");
imprimirContactos();
