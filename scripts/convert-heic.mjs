// Convert HEIC showroom images to JPEG using heic-convert
import heicConvert from 'heic-convert';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const heicFiles = [
  '20260904_113812.heic',
  '20260904_113918.heic',
  '20260904_114012.heic',
  '20260904_114035.heic',
  '20260904_114051.heic',
  '20260904_114121.heic',
];

const outputNames = [
  'showroom-01.jpg',
  'showroom-02.jpg',
  'showroom-03.jpg',
  'showroom-04.jpg',
  'showroom-05.jpg',
  'showroom-06.jpg',
];

const outputDir = join(projectRoot, 'public', 'showroom');

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

async function convertImages() {
  for (let i = 0; i < heicFiles.length; i++) {
    const filename = heicFiles[i];
    const outputName = outputNames[i];
    const outputPath = join(outputDir, outputName);

    // Try public/ first, then root
    let inputPath = join(projectRoot, 'public', filename);
    if (!existsSync(inputPath)) {
      inputPath = join(projectRoot, filename);
    }

    if (!existsSync(inputPath)) {
      console.log(`✗ Not found: ${filename}`);
      continue;
    }

    try {
      const inputBuffer = readFileSync(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.92,
      });
      writeFileSync(outputPath, Buffer.from(outputBuffer));
      console.log(`✓ Converted: ${filename} → public/showroom/${outputName}`);
    } catch (err) {
      console.error(`✗ Failed to convert ${filename}: ${err.message}`);
    }
  }
  console.log('\n✓ Conversion complete. Output in: public/showroom/');
}

convertImages();
