const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove preloader block
    const updatedContent = content.replace(/<!-- preloader start -->[\s\S]*?<!-- preloader end -->/g, '');
    
    if (content !== updatedContent) {
        fs.writeFileSync(file, updatedContent);
        console.log(`Removed preloader from ${file}`);
    }
});
