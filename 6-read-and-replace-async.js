/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html"   
 */

const fs = require('fs');


async function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    // 1. Leemos el fichero que nos pasan por parámetro y guardamos su contenido que es de tipo stirng en la variable fileContent 
    const fileContent = await fs.promises.readFile(htmlFilePath, "utf-8");
    
    // 2. Utilizamos el método de strig replaceAll para cambiar todas las ocurrencias de este string (en nuestro caso el contenido del HTML) del valor de la variable textToSearch por el valor de la variable textToReplace
    const replacedContent = fileContent.replaceAll(textToSearch, textToReplace);


    // Escribir un fichero de nombre "result.html" con el valor de la variable replacedContent
    await fs.promises.writeFile("result.html", replacedContent);
}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");
