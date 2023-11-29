// copy-script.js
const fs = require('fs');
const path = require('path');

const sourceDir = process.env.CODEBUILD_SRC_DIR;
const destinationDir = path.join(sourceDir, 'destination'); // Reemplaza 'destination' con el directorio de destino real

// Implementa la lógica de copia o cualquier operación que necesites
// Aquí, simplemente copiamos el contenido de una carpeta a otra
const copyFiles = () => {
    fs.readdirSync(sourceDir).forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destinationDir, file);
        fs.copyFileSync(sourcePath, destPath);
    });
};

copyFiles();
console.log('Copia completada.');
