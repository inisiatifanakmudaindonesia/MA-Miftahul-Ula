const fs = require('fs');
let c = fs.readFileSync('src/components/Hero.tsx', 'utf8');

c = c.replace(/Ø¨Ù Ø³Ù’Ù…Ù  Ø§Ù„Ù„ÙŽÙ‘Ù‡Ù  Ø§Ù„Ø±ÙŽÙ‘Ø.Ù’Ù…ÙŽÙ°Ù†Ù  Ø§Ù„Ø±ÙŽÙ‘Ø.Ù ÙŠÙ…Ù /g, 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ');
c = c.replace(/Ø¨Ù Ø³Ù’Ù…Ù  Ø§Ù„Ù„ÙŽÙ‘Ù‡Ù /g, 'بِسْمِ اللَّهِ');

fs.writeFileSync('src/components/Hero.tsx', c, 'utf8');
console.log('Fixed Arabic text.');
