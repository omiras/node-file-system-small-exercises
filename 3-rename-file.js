/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */
const fs = require('fs')

fs.rename('./bird.jpg', './pajaro.jpg', (err) => {

    if (err) {
        console.log("Ha ocurrido un error.", err);
    }
}) 