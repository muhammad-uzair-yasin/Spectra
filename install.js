#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get paths
const spectraSource = path.join(__dirname, '.spectra');
const npmPrefix = process.env.npm_config_prefix || process.cwd();
const projectRoot = process.env.INIT_CWD || process.cwd();
const spectraTarget = path.join(projectRoot, '.spectra');

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

try {
  // Only copy if .spectra doesn't already exist
  if (!fs.existsSync(spectraTarget) && fs.existsSync(spectraSource)) {
    copyDir(spectraSource, spectraTarget);
    console.log('✅ Spectra: .spectra folder installed to project root');
  }
} catch (error) {
  // Silently fail - don't break npm install
  process.exit(0);
}
