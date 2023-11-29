const fs = require('fs-extra');

const sourceDirectory = '/codebuild/output/src1218721962/src/github.com/Eilmer2/ForgeLab';
const destinationDirectory = '/codebuild/output/src1218721962/src/github.com/Eilmer2/ForgeLabDestination';

// Asegúrate de que el directorio de destino exista antes de copiar los archivos
fs.ensureDirSync(destinationDirectory);

try {
    fs.copySync(sourceDirectory, destinationDirectory);
    console.log('Files copied successfully!');
} catch (err) {
    console.error('Error copying files:', err);
    process.exit(1);
}
