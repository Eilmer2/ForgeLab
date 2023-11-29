const fse = require('fs-extra');
const path = require('path');

const sourceDir = '/codebuild/output/src1218721962/src/github.com/Eilmer2/ForgeLab';
const destinationDir = '/codebuild/output/src1218721962/src/github.com/Eilmer2/ForgeLabDestination';

console.log('Directorio de origen:', sourceDir);
console.log('Directorio de destino:', destinationDir);

async function copyFiles() {
  try {
    await fse.copy(sourceDir, destinationDir);
    console.log('¡Archivos copiados con éxito!');
  } catch (err) {
    console.error('Error copying files:', err);
    process.exit(1);
  }
}

copyFiles();
