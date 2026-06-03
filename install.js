#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the project root (where npm install was run)
const projectRoot = process.cwd();
const spectraSource = path.join(__dirname, '.spectra');
const spectraTarget = path.join(projectRoot, '.spectra');

// Only copy if .spectra doesn't already exist in project root
if (!fs.existsSync(spectraTarget) && fs.existsSync(spectraSource)) {
  try {
    // Recursive copy function
    const copyDir = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        if (fs.statSync(srcPath).isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };

    copyDir(spectraSource, spectraTarget);
    console.log('✅ Spectra: .spectra folder installed to project root');
  } catch (error) {
    console.warn('⚠️ Spectra: Could not copy .spectra folder:', error.message);
  }
}
