// Lista de contactos con datos predefinidos
let listaDeContactos = [
    {
    id: 1,
    nombres:"Brayan" ,
    apellidos: "moguea",
    telefono:"123456789",
    ubicaciones: {
        ciudad: "Bogotà",
        direccion: "Calle 130"
      }
    },
    {
        id: 2,
        nombres: "Nicole",
        apellidos: "cobos",
        telefono: "987654321",
        ubicaciones: {
          ciudad: "Soacha",
          direccion: "Avenida 9"
        }
      },
      {
        id: 3,
        nombres: "Berlin",
        apellidos: "niño",
        telefono: "321456789",
        ubicaciones: {
          ciudad: "Bogotà",
          direccion: "calle 170"
        }
      },
      {
        id: 4,
        nombres: "Luis",
        apellidos: "moguea",
        telefono: "33203972107",
        ubicaciones: {
          ciudad: "Soacha",
          direccion: "avenida 9"
        }
      },
    ];
    
// Función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
    listaDeContactos.push(contacto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
 listaContactos = listaContactos.filter(contacto => contacto.id !== id);
}

// Función para imprimir los contactos presentes en la lista
function imprimirContactos() {
    console.log("Lista de contactos:");
    listaContactos.forEach(contacto => {
      console.log(`ID: ${contacto.id}, Nombres: ${contacto.nombres}, Apellidos: ${contacto.apellidos}, Teléfono: ${contacto.telefono}, Ubicación: ${contacto.ubicaciones.ciudad}, ${contacto.ubicaciones.direccion}`);
    });
  }
  
  // Ejemplo de uso
  console.log("Lista inicial:");
  imprimirContactos();
  
  const nuevoContacto = {
    id: 4,
    nombres: "Luis",
    apellidos: "moguea",
    telefono: "33203972107",
    ubicaciones: {
      ciudad: "Soacha",
      direccion: "avenida 9"
    }
  };
  
  agregarContacto(nuevoContacto);
  
console.log("Lista después de agregar un nuevo contacto:");
imprimirContactos();

  borrarContacto(2);
  
  console.log("Lista después de borrar un contacto:");
  imprimirContactos();
