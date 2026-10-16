/* ================================================================
   process-carousel.js — Scroll Reveal & Interactive Flow
   ================================================================ */
(function () {
    'use strict';

    /* ── Header element scroll-reveal ── */
    function initHeaderReveal(section) {
        var els = section.querySelectorAll('.process-header-center, .process-subheading, .process-title, .process-subtitle, .proc-meta-ribbon');
        if (!els.length) return;

        if (!('IntersectionObserver' in window)) {
            els.forEach(function (el) { el.classList.add('anim-in'); });
            return;
        }

        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-in');
                }
            });
        }, { threshold: 0.15 });

        els.forEach(function (el) { obs.observe(el); });
    }

    /* ── Card Grid & Callout Scroll Reveal ── */
    function initCardGrid(timeline) {
        var grid = timeline.querySelector('.process-cards-grid');
        if (!grid) grid = timeline;

        var items = timeline.querySelectorAll('.reveal-item');
        if (!items.length) {
            timeline.querySelectorAll('.process-card, .proc-bottom-callout').forEach(function (c) {
                c.style.opacity = '1';
                c.style.transform = 'none';
            });
            return;
        }

        if (!('IntersectionObserver' in window)) {
            items.forEach(function (item) { item.classList.add('reveal-active'); });
            return;
        }

        var revealObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    items.forEach(function (item, i) {
                        setTimeout(function () {
                            item.classList.add('reveal-active');
                        }, i * 110);
                    });
                    revealObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

        revealObs.observe(timeline);
    }

    /* ── Boot ── */
    function init() {
        document.querySelectorAll('.process-section').forEach(function (section) {
            initHeaderReveal(section);
        });

        document.querySelectorAll('.process-timeline, .proc-timeline-wrapper').forEach(function (tl) {
            initCardGrid(tl);
        });

        // Also reveal bottom callout if standalone
        document.querySelectorAll('.proc-bottom-callout.reveal-item').forEach(function (callout) {
            if (!('IntersectionObserver' in window)) {
                callout.classList.add('reveal-active');
                return;
            }
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            obs.observe(callout);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();