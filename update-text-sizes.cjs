const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages');

function replaceInFolder(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) return console.log('Unable to scan directory: ' + err);
        
        files.forEach((file) => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                replaceInFolder(filePath);
            } else if (file.endsWith('.tsx')) {
                let content = fs.readFileSync(filePath, 'utf8');
                const originalContent = content;
                
                // Replace general paragraph sizes
                content = content.replace(/text-lg md:text-xl/g, 'text-xl md:text-2xl leading-relaxed');
                
                if (content !== originalContent) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Updated ${file}`);
                }
            }
        });
    });
}

replaceInFolder(directoryPath);
