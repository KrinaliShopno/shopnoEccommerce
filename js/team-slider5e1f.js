document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    function initHeaderReveal(section) {
        var els = section.querySelectorAll('.team-subheading, .team-title, .team-subtitle');
        if (!els.length) return;

        if (!('IntersectionObserver' in window)) {
            els.forEach(function (el) { el.classList.add('anim-in'); });
            return;
        }

        var obs = new IntersectionObserver(function (entries, o) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-in');
                } else {
                    entry.target.classList.remove('anim-in');
                }
            });
        }, { threshold: 0.2 });

        els.forEach(function (el) { obs.observe(el); });
    }

    function init() {
        document.querySelectorAll('.team-section').forEach(function (section) {
            initHeaderReveal(section);
        });

        // IntersectionObserver for scroll-reveal animations on cards
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                root: null,
                threshold: 0.1,
                rootMargin: '0px'
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const revealItems = entry.target.querySelectorAll('.team-reveal');
                        revealItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('reveal-active');
                            }, index * 80); // Staggered reveal
                        });
                        observer.unobserve(entry.target); // Reveal only once
                    }
                });
            }, observerOptions);

            const grid = document.querySelector('.team-grid-wrapper');
            if (grid) observer.observe(grid);
        } else {
            // Fallback for older browsers
            document.querySelectorAll('.team-member').forEach(m => m.classList.add('reveal-active'));
        }
    }

    init();
});
