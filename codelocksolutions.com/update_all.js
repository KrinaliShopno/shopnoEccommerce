const fs = require('fs');
const files = ['about.html', 'services.html', 'contact.html', 'career.html', 'blogs.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`Skipping ${file}, does not exist.`);
        return;
    }
    
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(
        /<div class="achieve-header">[\s\S]*?<h2 class="achieve-title">(.*?)<\/h2>[\s\S]*?<p class="achieve-desc">(.*?)<\/p>[\s\S]*?<\/div>/g,
        '<div class="team-header">\n<span class="team-subheading">&mdash; OUR ACHIEVEMENTS &mdash;</span>\n<h2 class="team-title">$1</h2>\n<p class="team-subtitle">$2</p>\n</div>'
    );

    content = content.replace(
        /<div class="apps-header[^>]*">[\s\S]*?<h2 class="apps-headline">(.*?)<\/h2>[\s\S]*?<p class="apps-desc">(.*?)<\/p>[\s\S]*?<\/div>/g,
        '<div class="team-header">\n<span class="team-subheading">&mdash; SHOPIFY APPS &mdash;</span>\n<h2 class="team-title">$1</h2>\n<p class="team-subtitle">$2</p>\n</div>'
    );

    content = content.replace(
        /<div class="wwd-header">[\s\S]*?<h2 class="wwd-heading">(.*?)<\/h2>[\s\S]*?<p class="wwd-desc">(.*?)<\/p>[\s\S]*?<\/div>/g,
        '<div class="team-header">\n<span class="team-subheading">&mdash; WHAT WE DO &mdash;</span>\n<h2 class="team-title">$1</h2>\n<p class="team-subtitle">$2</p>\n</div>'
    );

    content = content.replace(
        /<div class="process-header">[\s\S]*?<h2 class="process-title"[^>]*>(.*?)<\/h2>[\s\S]*?<p class="process-subtitle">(.*?)<\/p>[\s\S]*?<\/div>/g,
        '<div class="team-header">\n<span class="team-subheading">&mdash; OUR PROCESS &mdash;</span>\n<h2 class="team-title">$1</h2>\n<p class="team-subtitle">$2</p>\n</div>'
    );

    content = content.replace(
        /<div class="testimonials-header[^>]*">[\s\S]*?<h2 class="testimonials-headline">(.*?)<\/h2>[\s\S]*?<p class="testimonials-desc">(.*?)<\/p>[\s\S]*?<\/div>/g,
        '<div class="team-header">\n<span class="team-subheading">&mdash; TESTIMONIALS &mdash;</span>\n<h2 class="team-title">$1</h2>\n<p class="team-subtitle">$2</p>\n</div>'
    );

    content = content.replace(
        /<div class="section-header[^>]*">[\s\S]*?<h2 class="section-headline">(.*?)<span class="gradient-text">(.*?)<\/span><\/h2>[\s\S]*?<p class="section-desc">(.*?)<\/p>[\s\S]*?<\/div>/g,
        '<div class="team-header">\n<span class="team-subheading">&mdash; PORTFOLIO &mdash;</span>\n<h2 class="team-title">$1 $2</h2>\n<p class="team-subtitle">$3</p>\n</div>'
    );

    content = content.replace(
        /<div class="faq-header[^>]*">[\s\S]*?<h2 class="faq-headline">(.*?)<\/h2>[\s\S]*?<p class="faq-desc">(.*?)<\/p>[\s\S]*?<\/div>/g,
        '<div class="team-header">\n<span class="team-subheading">&mdash; FAQ &mdash;</span>\n<h2 class="team-title">$1</h2>\n<p class="team-subtitle">$2</p>\n</div>'
    );

    content = content.replace(
        /<div class="blog-header">[\s\S]*?<h2 class="blog-headline">(.*?)<\/h2>[\s\S]*?<p class="blog-desc">(.*?)<\/p>[\s\S]*?<\/div>/g,
        '<div class="team-header">\n<span class="team-subheading">&mdash; LATEST INSIGHTS &mdash;</span>\n<h2 class="team-title">$1</h2>\n<p class="team-subtitle">$2</p>\n</div>'
    );

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
