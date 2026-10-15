const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const oldStyleRegex = /<style>\s*\/\* Premium Achievements Section Design \*\/[\s\S]*?<\/style>/;

const premiumStyle = `<style>
            /* Ultra-Premium Achievements Section Design */
            .achievements-section {
                background: var(--bg-primary);
                padding: 120px 20px;
                position: relative;
                overflow: hidden;
                font-family: inherit;
                transition: background 0.3s ease;
            }

            .achieve-bg-shape {
                position: absolute;
                z-index: 0;
                filter: blur(100px);
                opacity: 0.5;
            }

            .achieve-shape-left {
                top: -100px;
                left: -100px;
                width: 500px;
                height: 500px;
                background: radial-gradient(circle, rgba(246, 187, 50, 0.15) 0%, transparent 70%);
                border-radius: 50%;
            }

            .achieve-shape-right {
                bottom: -100px;
                right: -100px;
                width: 600px;
                height: 600px;
                background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
                border-radius: 50%;
            }

            [data-theme="light"] .achieve-shape-left {
                background: radial-gradient(circle, rgba(246, 187, 50, 0.3) 0%, transparent 70%);
            }
            [data-theme="light"] .achieve-shape-right {
                background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
            }

            /* Unified Stats Bar Layout */
            .achieve-grid {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: rgba(255, 255, 255, 0.02);
                backdrop-filter: blur(24px);
                -webkit-backdrop-filter: blur(24px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 40px;
                padding: 50px 40px;
                box-shadow: 0 40px 80px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                position: relative;
                z-index: 2;
                max-width: 1200px;
                margin: 0 auto;
            }

            [data-theme="light"] .achieve-grid {
                background: rgba(255, 255, 255, 0.85);
                border: 1px solid rgba(0, 0, 0, 0.05);
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1);
            }

            .achieve-card {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                position: relative;
                padding: 10px 20px;
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: default;
                background: transparent;
                border: none;
                box-shadow: none;
            }

            .achieve-card:hover {
                transform: translateY(-12px);
            }

            /* Dividers between stats */
            .achieve-card:not(:last-child)::after {
                content: '';
                position: absolute;
                right: 0;
                top: 15%;
                height: 70%;
                width: 1px;
                background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.15), transparent);
            }

            [data-theme="light"] .achieve-card:not(:last-child)::after {
                background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), transparent);
            }

            .achieve-icon-box {
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, rgba(246,187,50,0.15) 0%, rgba(246,187,50,0) 100%);
                border: 1px solid rgba(246,187,50,0.3);
                border-radius: 50%;
                padding: 18px;
                margin-bottom: 25px;
                position: relative;
                z-index: 1;
                transition: all 0.5s ease;
                box-shadow: 0 10px 25px rgba(246,187,50,0.1);
            }
            
            [data-theme="light"] .achieve-icon-box {
                background: linear-gradient(135deg, rgba(246,187,50,0.2) 0%, rgba(246,187,50,0.05) 100%);
                border: 1px solid rgba(246,187,50,0.4);
                box-shadow: 0 15px 30px rgba(246,187,50,0.15);
            }

            .achieve-card:hover .achieve-icon-box {
                transform: scale(1.15) rotate(10deg);
                box-shadow: 0 15px 35px rgba(246,187,50,0.3);
                border-color: rgba(246,187,50,0.6);
            }

            .achieve-content {
                display: flex;
                flex-direction: column;
                position: relative;
                z-index: 1;
            }

            .achieve-number {
                font-size: 48px;
                font-weight: 900;
                color: var(--text-primary);
                line-height: 1;
                margin-bottom: 12px;
                background: linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: -1px;
                filter: drop-shadow(0 4px 8px rgba(245, 158, 11, 0.2));
            }
            
            [data-theme="light"] .achieve-number {
                background: linear-gradient(135deg, #d97706 0%, #eab308 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                filter: drop-shadow(0 4px 6px rgba(217, 119, 6, 0.15));
            }

            .achieve-label {
                font-size: 15px;
                color: var(--text-secondary);
                line-height: 1.4;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            @media (max-width: 1024px) {
                .achieve-grid {
                    flex-wrap: wrap;
                    gap: 40px 20px;
                    padding: 40px 20px;
                    border-radius: 30px;
                }
                .achieve-card {
                    flex: 1 1 40%;
                }
                .achieve-card:nth-child(2)::after {
                    display: none;
                }
                .achieve-card:not(:last-child)::after {
                    height: 100%;
                    top: 0;
                }
            }

            @media (max-width: 600px) {
                .achieve-grid {
                    flex-direction: column;
                    gap: 40px;
                }
                .achieve-card {
                    flex: 1 1 100%;
                    width: 100%;
                }
                .achieve-card:not(:last-child)::after {
                    width: 60%;
                    height: 1px;
                    right: 20%;
                    top: 100%;
                    margin-top: 20px;
                    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15), transparent);
                }
                [data-theme="light"] .achieve-card:not(:last-child)::after {
                    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
                }
            }
        </style>`;

if (oldStyleRegex.test(content)) {
    content = content.replace(oldStyleRegex, premiumStyle);
    fs.writeFileSync('index.html', content);
    console.log("Updated to Ultra-Premium achievements CSS in index.html");
} else {
    console.log("Could not find the regex match.");
}
