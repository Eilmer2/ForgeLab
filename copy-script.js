// copy-script.js
const fs = require('fs-extra');
const path = require('path');

const sourceDir = process.env.CODEBUILD_SRC_DIR;
const destinationDir = path.join(sourceDir, 'destination');

async function copyFiles() {
  try {
    await fs.copy(sourceDir, destinationDir, {
      overwrite: true,
      errorOnExist: false,
    });
    console.log('Files copied successfully!');
  } catch (error) {
    console.error('Error copying files:', error);
    process.exit(1);
  }
}

copyFiles();
