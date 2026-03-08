import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'src', 'assets');
const imagesToConvert = [
    'servicios-laptop-final.png',
    'sobre-wawa-calm.png',
    'contacto-minimalist.png',
    'home-structure-v5.png',
    'wawa_silla_optimized.png'
];

async function convertImages() {
    for (const img of imagesToConvert) {
        const inputPath = path.join(assetsDir, img);
        if (!fs.existsSync(inputPath)) {
            console.log(`File not found: ${inputPath}`);
            continue;
        }

        const outputPath = path.join(assetsDir, img.replace('.png', '.webp'));
        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Successfully converted ${img} to WebP`);
        } catch (err) {
            console.error(`Error converting ${img}:`, err);
        }
    }
}

convertImages();
