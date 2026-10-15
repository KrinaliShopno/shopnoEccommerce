// Theme Toggle & Per-Section Scroll-Reveal Functionality
document.addEventListener('DOMContentLoaded', function () {

    /* ── Theme Toggle ──────────────────────────────────────────────────── */
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    let savedTheme = 'light';
    try {
        savedTheme = localStorage.getItem('theme');
        if (!savedTheme || savedTheme === 'dark') {
            savedTheme = 'light';
            localStorage.setItem('theme', 'light');
        }
    } catch (e) {
        savedTheme = 'light';
    }
    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            try { localStorage.setItem('theme', newTheme); } catch (e) {}
        });
    }

    /* ── Per-Section Scroll-Reveal Observer ────────────────────────────── */

    /**
     * Selectors mapped to their threshold — lower threshold means the
     * animation fires sooner when the element starts entering the viewport.
     * Each selector group gets its own observer config for fine control.
     */
    const observerGroups = [
        {
            // 1. Page-title breadcrumbs / hero labels – fade-in-up
            selector: '.fade-in-up',
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        },
        {
            // 2. Hero text columns – fade-in-left
            selector: '.hero-content-col',
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        },
        {
            // 3. Hero mockup / visual columns – fade-in-right
            selector: '.hero-visual-col, .mockup-container',
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        },
        {
            // 4. Section titles – zoom-in from centre
            selector: '.redesign-section-title',
            threshold: 0.2,
            rootMargin: '0px 0px -30px 0px'
        },
        {
            // 5. Capability cards – flip-in on Y-axis, staggered via CSS nth-child
            selector: '.capability-card',
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        },
        {
            // 6. Roadmap steps – bounce-in, staggered via CSS nth-child
            selector: '.roadmap-step',
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        },
        {
            // 7. Tech badges – pop-in wave, staggered via CSS nth-child
            selector: '.tech-badge',
            threshold: 0.05,
            rootMargin: '0px 0px -10px 0px'
        },
        {
            // 8. CTA Banner – slide-in from top + blur
            selector: '.redesign-cta-banner',
            threshold: 0.2,
            rootMargin: '0px 0px -30px 0px'
        },
        {
            // 9. Contact page – section intro zoom reveal
            selector: '.ct-section-intro',
            threshold: 0.2,
            rootMargin: '0px 0px -30px 0px'
        },
        {
            // 10. Contact page – enquiry form slide-up
            selector: '.contact-form-container',
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        },
        {
            // 11. Contact page – map card scale-in
            selector: '.contact-map-card',
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
        },
        {
            // 12. Contact page – response time badge slide-up
            selector: '.ct-response-badge',
            threshold: 0.2,
            rootMargin: '0px 0px -20px 0px'
        }
    ];

    /**
     * Build one IntersectionObserver per group so each section can have
     * its own threshold/rootMargin without polluting other groups.
     */
    observerGroups.forEach(function (group) {
        const elements = document.querySelectorAll(group.selector);
        if (!elements.length) return;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Element entering viewport – trigger animation
                    entry.target.classList.add('visible-reveal');
                } else {
                    // Element leaving viewport – reset so it re-animates next time
                    entry.target.classList.remove('visible-reveal');
                }
            });
        }, {
            root: null,
            threshold: group.threshold,
            rootMargin: group.rootMargin
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    });

    /* ── Stagger re-trigger: re-apply nth-child delays on scroll-out ───── */
    // When cards/steps leave viewport and lose visible-reveal, the CSS
    // :not(.visible-reveal) rule already resets transition-delay to 0s,
    // so re-entry stagger fires correctly without JS intervention.

});