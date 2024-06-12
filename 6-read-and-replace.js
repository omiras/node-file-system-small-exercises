/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html"   
 */
const fs = require('fs');

function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    const fileContent = fs.readFileSync(htmlFilePath, "utf-8");
    const replacedContent = fileContent.replaceAll(textToSearch, textToReplace);
    fs.writeFileSync("result.html", replacedContent);
}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");
