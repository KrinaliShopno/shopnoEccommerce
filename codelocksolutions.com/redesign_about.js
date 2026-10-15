const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf8');

const newDesign = `
<style>
/* =========================================
   ABOUT PAGE - PREMIUM REDESIGN
   ========================================= */
.about-page-wrapper {
    background: var(--bg-primary);
    background-image: radial-gradient(circle at 10% 20%, rgba(0, 242, 254, 0.05) 0%, transparent 40%),
                      radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 40%);
    color: var(--text-primary);
    padding-bottom: 50px;
    overflow: hidden;
}

[data-theme="light"] .about-page-wrapper {
    background-image: radial-gradient(circle at 10% 20%, rgba(114, 137, 72, 0.08) 0%, transparent 40%),
                      radial-gradient(circle at 90% 80%, rgba(114, 137, 72, 0.05) 0%, transparent 40%);
}

.about-hero-premium {
    padding: 120px 40px 80px;
    position: relative;
    text-align: center;
}

.about-hero-premium h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 25px;
    background: linear-gradient(135deg, #00f2fe 0%, #10b981 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 8s linear infinite;
    background-size: 200% auto;
}

[data-theme="light"] .about-hero-premium h1 {
    background: linear-gradient(135deg, #728948 0%, #374a16 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about-hero-premium p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.about-content-premium {
    padding: 60px 40px 100px;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 80px;
    align-items: center;
}

.about-text-premium h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 30px;
    color: var(--text-primary);
    line-height: 1.2;
}

.about-text-premium h2 span {
    color: var(--accent-primary);
}

.about-text-premium p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 25px;
}

/* Glass Image Box */
.about-image-premium {
    position: relative;
    border-radius: 30px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
    transform: perspective(1000px) rotateY(-5deg);
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

[data-theme="light"] .about-image-premium {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
}

.about-image-premium:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.02);
}

.about-image-premium img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
}

/* Floating Elements */
.about-float-badge {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 15px 25px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    z-index: 10;
    animation: float 6s ease-in-out infinite;
}

[data-theme="light"] .about-float-badge {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.badge-1 { top: -30px; right: -30px; animation-delay: 0s; }
.badge-2 { bottom: -20px; left: -40px; animation-delay: 3s; }

.float-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
}

.float-text strong {
    display: block;
    font-size: 1.2rem;
    color: var(--text-primary);
}

.float-text span {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
@keyframes shine {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
}

@media (max-width: 991px) {
    .about-content-premium {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 60px;
    }
    .about-hero-premium h1 { font-size: 2.5rem; }
    .badge-1, .badge-2 { display: none; }
    .about-image-premium { transform: none; }
    .about-image-premium:hover { transform: scale(1.02); }
}
</style>

<div class="about-page-wrapper">
    <!-- Hero Section -->
    <section class="about-hero-premium">
        <div class="container">
            <h1>We Build Digital Success</h1>
            <p>Codelock Solutions is a premier Shopify development company. We deliver end-to-end e-commerce solutions that empower brands to thrive in the modern digital landscape.</p>
        </div>
    </section>

    <!-- Content Section -->
    <section class="about-content-premium">
        <div class="about-text-premium">
            <h2>Empowering Your <span>Digital Journey</span></h2>
            <p>We harness the power of emerging technologies to help merchants adapt and succeed. Web design is not just a profession for us; it's our passion. We believe the smart design of any website is the starting point of a successful digital presence.</p>
            <p>Our specialized team has been involved in designing professional websites across all categories. In a high-tech modern economy, our custom digital solutions transform businesses and scale revenues globally.</p>
        </div>
        
        <div class="about-image-premium">
            <div class="about-float-badge badge-1">
                <div class="float-icon"><i class="fa fa-code"></i></div>
                <div class="float-text">
                    <strong>100+</strong>
                    <span>Projects Delivered</span>
                </div>
            </div>
            
            <div class="about-float-badge badge-2">
                <div class="float-icon"><i class="fa fa-star"></i></div>
                <div class="float-text">
                    <strong>5.0</strong>
                    <span>Client Rating</span>
                </div>
            </div>

            <!-- Using a real image instead of the broken HTML file -->
            <img src="images/client_working.jpg" alt="Codelock Solutions Team">
        </div>
    </section>
`;

const regex = /<style>\s*\/\* About Page Styles[\s\S]*?<\/section>/;
content = content.replace(regex, newDesign.trim());
content = content.replace(/<\/div>\s*<!-- page end -->/, '</div>\n    </div><!-- page end -->'); // Ensure correct closing tags if needed, but not necessary if we didn't remove .page

fs.writeFileSync('about.html', content);
console.log('about.html redesigned');
