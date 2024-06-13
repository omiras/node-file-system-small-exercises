/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html"   
 */

const fs = require('fs');

function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {

    fs.readFile(htmlFilePath, "utf-8", function (err, data) {
        const replacedContent = data.replaceAll(textToSearch, textToReplace);
        fs.writeFile("result.html", replacedContent, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            // si no hay error, hacer otra operación 
        });
    });


}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");