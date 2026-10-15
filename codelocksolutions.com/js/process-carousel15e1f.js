/* ================================================================
   process-carousel.js — Updated for new .process-card grid layout
   ================================================================ */
(function () {
    'use strict';

    /* ── Header element scroll-reveal ── */
    function initHeaderReveal(section) {
        var els = section.querySelectorAll('.process-subheading, .process-title, .process-subtitle');
        if (!els.length) return;

        if (!('IntersectionObserver' in window)) {
            els.forEach(function (el) { el.classList.add('anim-in'); });
            return;
        }

        var obs = new IntersectionObserver(function (entries) {
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

    /* ── Card Grid Scroll Reveal ── */
    function initCardGrid(timeline) {
        var grid  = timeline.querySelector('.process-cards-grid');
        if (!grid) return; // fallback — no new grid found

        var cards = grid.querySelectorAll('.reveal-item');
        if (!cards.length) {
            // Make everything visible immediately as fallback
            grid.querySelectorAll('.process-card').forEach(function (c) {
                c.style.opacity = '1';
                c.style.transform = 'none';
            });
            return;
        }

        if (!('IntersectionObserver' in window)) {
            // No IntersectionObserver support — show all immediately
            cards.forEach(function (card) { card.classList.add('reveal-active'); });
            return;
        }

        var revealObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Staggered reveal — each card with a delay
                    cards.forEach(function (card, i) {
                        setTimeout(function () {
                            card.classList.add('reveal-active');
                        }, i * 140);
                    });
                    revealObs.unobserve(entry.target); // trigger once only
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

        revealObs.observe(grid);
    }

    /* ── Boot ── */
    function init() {
        document.querySelectorAll('.process-section').forEach(function (section) {
            initHeaderReveal(section);
        });

        document.querySelectorAll('.process-timeline').forEach(function (tl) {
            initCardGrid(tl);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();