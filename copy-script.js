// copy-script.js
const fs = require('fs');
const path = require('path');

const sourceDir = process.env.CODEBUILD_SRC_DIR;
const destinationDir = path.join(sourceDir, 'destination');

// Implementa la lógica de copia o cualquier operación que necesites
// Aquí, simplemente copiamos el contenido de una carpeta a otra
const copyFiles = () => {
    console.log(`Directorio de origen: ${sourceDir}`);
    console.log(`Directorio de destino: ${destinationDir}`);

    fs.readdirSync(sourceDir).forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destinationDir, file);

        // Verificar si el archivo existe antes de copiar
        if (fs.existsSync(sourcePath)) {
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copiado: ${file}`);
        } else {
            console.log(`¡Advertencia! El archivo no existe: ${file}`);
        }
    });
};

copyFiles();
console.log('Copia completada.');
