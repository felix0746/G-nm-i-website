const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './images';
const outputDir = './images';

// 確保輸出目錄存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('無法讀取圖片目錄:', err);
        return;
    }

    files.forEach(file => {
        const inputPath = path.join(inputDir, file);
        const fileExt = path.extname(file).toLowerCase();

        if (fileExt === '.jpg' || fileExt === '.jpeg' || fileExt === '.png') {
            const outputFilename = `${path.basename(file, fileExt)}.webp`;
            const outputPath = path.join(outputDir, outputFilename);

            sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath, (err, info) => {
                    if (err) {
                        console.error(`轉換失敗: ${file}`, err);
                    } else {
                        console.log(`成功轉換: ${file} -> ${outputFilename}`, info);
                    }
                });
        }
    });
});
