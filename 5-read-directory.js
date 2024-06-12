/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'
 */

const fs = require('fs');

// Synchronize listing of files in a directory
const files = fs.readdirSync('./backup-files');
console.log("Todos los ficheros en formato array: ", files);

for (f of files) {
    console.log(f);
}
