const fs = require('fs');
const lines = fs.readFileSync('src/components/Hero.tsx', 'utf8').split('\n');
lines[130] = '            <span className="font-arabic text-xs text-amber-300 font-bold">بِسْمِ اللَّهِ</span>';
lines[294] = '            <span className="font-arabic text-lg text-amber-300 drop-shadow">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>';
fs.writeFileSync('src/components/Hero.tsx', lines.join('\n'), 'utf8');
console.log('Done!');
