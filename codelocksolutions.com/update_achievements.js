const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const oldStyleRegex = /<style>\s*\.achievements-section {[\s\S]*?\.achieve-title {\s*font-size: 30px;\s*}\s*}\s*<\/style>/;

const newStyle = `<style>
            /* Premium Achievements Section Design */
            .achievements-section {
                background: var(--bg-primary);
                padding: 100px 20px;
                position: relative;
                overflow: hidden;
                font-family: inherit;
                transition: background 0.3s ease;
            }

            .achieve-bg-shape {
                position: absolute;
                background: radial-gradient(circle, rgba(246, 187, 50, 0.05) 0%, transparent 60%);
                z-index: 0;
            }

            [data-theme="light"] .achieve-bg-shape {
                background: radial-gradient(circle, rgba(246, 187, 50, 0.15) 0%, transparent 70%);
            }

            .achieve-shape-left {
                top: -150px;
                left: -150px;
                width: 600px;
                height: 600px;
                border-radius: 50%;
            }

            .achieve-shape-right {
                bottom: -200px;
                right: -200px;
                width: 800px;
                height: 800px;
                border-radius: 50%;
            }

            .achieve-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 25px;
                position: relative;
                z-index: 2;
            }

            .achieve-card {
                display: flex;
                align-items: center;
                gap: 20px;
                padding: 24px 30px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(15px);
                border-radius: 20px;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: default;
                position: relative;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }

            [data-theme="light"] .achieve-card {
                background: #ffffff;
                border: 1px solid rgba(0, 0, 0, 0.05);
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
            }

            .achieve-card::before {
                content: '';
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                background: linear-gradient(135deg, rgba(246,187,50,0.1) 0%, transparent 100%);
                opacity: 0;
                transition: opacity 0.4s ease;
                z-index: 0;
            }

            .achieve-card:hover {
                transform: translateY(-10px);
                border-color: rgba(246, 187, 50, 0.3);
                box-shadow: 0 20px 40px rgba(246, 187, 50, 0.15);
            }

            .achieve-card:hover::before {
                opacity: 1;
            }

            .achieve-icon-box {
                width: 65px;
                height: 65px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                background: rgba(246, 187, 50, 0.1);
                border-radius: 15px;
                padding: 12px;
                position: relative;
                z-index: 1;
                transition: transform 0.4s ease;
            }
            
            [data-theme="light"] .achieve-icon-box {
                background: rgba(246, 187, 50, 0.15);
            }

            .achieve-card:hover .achieve-icon-box {
                transform: scale(1.1) rotate(5deg);
            }

            .achieve-content {
                display: flex;
                flex-direction: column;
                position: relative;
                z-index: 1;
            }

            .achieve-number {
                font-size: 36px;
                font-weight: 900;
                color: var(--text-primary);
                line-height: 1;
                margin-bottom: 8px;
                background: var(--gradient-primary);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: flex;
                align-items: center;
            }
            
            [data-theme="light"] .achieve-number {
                background: linear-gradient(135deg, #d97706 0%, #eab308 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .achieve-label {
                font-size: 13px;
                color: var(--text-secondary);
                line-height: 1.4;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1.5px;
            }

            @media (max-width: 1200px) {
                .achieve-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 25px;
                }
            }

            @media (max-width: 580px) {
                .achieve-grid {
                    grid-template-columns: 1fr;
                }
                .achieve-card {
                    padding: 20px;
                }
            }
        </style>`;

if (oldStyleRegex.test(content)) {
    content = content.replace(oldStyleRegex, newStyle);
    fs.writeFileSync('index.html', content);
    console.log("Updated achievements CSS in index.html");
} else {
    console.log("Could not find the regex match.");
}
