const fs = require('fs');
let content = fs.readFileSync('e:/krinali/shopno_shopify/codelocksolutions.com/index.html', 'utf8');

// The style block we want to remove starts with this exact sequence and ends with </style>
const regex = /<style>\s*\/\* ==========================================================================\s*1\. CORE SECTION LAYOUT & DESIGN SYSTEM VARIABLES[\s\S]*?<\/style>/;

if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync('e:/krinali/shopno_shopify/codelocksolutions.com/index.html', content);
    console.log('Style block successfully removed.');
} else {
    console.log('Style block not found.');
}
