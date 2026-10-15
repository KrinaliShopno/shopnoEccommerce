const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract Header
const headerRegex = /<header id="masthead"[^>]*>[\s\S]*?<\/header><!--header end-->/i;
const headerMatch = indexHtml.match(headerRegex);

// Extract Footer
const footerRegex = /<footer[^>]*>[\s\S]*?<\/footer>[\s]*<!--footer end-->/i;
const footerMatch = indexHtml.match(footerRegex);

// Extract Menu Script
const scriptRegex = /<script>\s*\/\/\s*Set active navigation link based on current page[\s\S]*?<\/script>/i;
const scriptMatch = indexHtml.match(scriptRegex);

if (!headerMatch || !footerMatch) {
    console.error("Could not find header or footer in index.html");
    process.exit(1);
}

const headerContent = headerMatch[0];
const footerContent = footerMatch[0];
const scriptContent = scriptMatch ? scriptMatch[0] : '';

const pages = ['about.html', 'services.html', 'contact.html', 'career.html', 'blogs.html'];

pages.forEach(page => {
    if (!fs.existsSync(page)) return;
    let content = fs.readFileSync(page, 'utf8');
    
    // Replace header
    content = content.replace(/<header id="masthead"[^>]*>[\s\S]*?<\/header><!--header end-->/i, headerContent);
    
    // Replace menu script if it exists
    if (scriptContent) {
        if (content.includes('// Set active navigation link based on current page')) {
            content = content.replace(/<script>\s*\/\/\s*Set active navigation link based on current page[\s\S]*?<\/script>/i, scriptContent);
        } else {
            // Insert after header
            content = content.replace(/(<\/header><!--header end-->)/i, `$1\n\n${scriptContent}`);
        }
    }
    
    // Replace footer
    content = content.replace(/<footer[^>]*>[\s\S]*?<\/footer>[\s]*<!--footer end-->/i, footerContent);
    
    fs.writeFileSync(page, content);
    console.log(`Updated header and footer in ${page}`);
});
