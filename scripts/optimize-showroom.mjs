import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const dir = path.join(projectRoot, 'public', 'showroom');

const files = ['showroom-01.jpg', 'showroom-02.jpg', 'showroom-03.jpg', 'showroom-04.jpg', 'showroom-05.jpg', 'showroom-06.jpg'];

async function run() {
  for (const file of files) {
    const src = path.join(dir, file);
    if (!fs.existsSync(src)) continue;
    
    // Backup original if not already backed up
    const backup = path.join(dir, file + '.orig');
    if (!fs.existsSync(backup)) {
      fs.copyFileSync(src, backup);
    }
    
    const buffer = fs.readFileSync(backup);
    const optimized = await sharp(buffer)
      .resize(2048, 2048, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true })
      .toBuffer();
      
    fs.writeFileSync(src, optimized);
    console.log(`Optimized ${file}: ${buffer.length} -> ${optimized.length} bytes`);
  }
  console.log('All showroom images optimized successfully!');
}

run().catch(console.error);
