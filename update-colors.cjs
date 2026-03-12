const fs = require('fs');
const path = require('path');

// 1. Update Servicios.tsx
let serviciosPath = path.join(__dirname, 'src/pages/Servicios.tsx');
let servicios = fs.readFileSync(serviciosPath, 'utf8');
servicios = servicios.replace(/text-muted-foreground(\s+)/g, 'text-black$1');
servicios = servicios.replace(/text-foreground\/80/g, 'text-foreground');
fs.writeFileSync(serviciosPath, servicios, 'utf8');

// 2. Update SobreWawa.tsx
let sobrePath = path.join(__dirname, 'src/pages/SobreWawa.tsx');
let sobre = fs.readFileSync(sobrePath, 'utf8');
// Replace text-muted-foreground with text-foreground font-light
sobre = sobre.replace(/text-muted-foreground(\s+)/g, 'text-foreground font-light$1');
sobre = sobre.replace(/text-muted-foreground/g, 'text-foreground font-light');
fs.writeFileSync(sobrePath, sobre, 'utf8');

console.log('Done script');
