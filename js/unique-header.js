/**
 * Unique & Professional Header Navigation Controller
 * Handles smooth scrolling, live scrollspy, sticky transition, and mobile menu
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        const header = document.querySelector('.shopno-pro-header');
        const mobileToggle = document.querySelector('.header-mobile-toggle');
        const mobileDrawer = document.querySelector('.mobile-nav-drawer');
        const backdrop = document.querySelector('.mobile-drawer-backdrop');
        const allNavLinks = document.querySelectorAll('.nav-link-btn, .mobile-nav-link, .header-cta-button, .mobile-cta-btn, .clean-link-list a, .footer-nav-link, .footer-link');

        // Target sections for scrollspy and smooth navigation
        const sectionMap = [
            { id: 'hero-section', name: 'Home' },
            { id: 'about-us', name: 'About Us' },
            { id: 'services', name: 'Services' },
            { id: 'process', name: 'Process' },
            { id: 'projects', name: 'Projects' },
            { id: 'blogs', name: 'Blogs' },
            { id: 'contact', name: 'Contact' }
        ];

        /* ── Sticky Header Elevation on Scroll ────────────────────────── */
        function handleScroll() {
            if (window.scrollY > 30) {
                header && header.classList.add('header-scrolled');
            } else {
                header && header.classList.remove('header-scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        /* ── Mobile Drawer Open / Close ───────────────────────────────── */
        function openMobileMenu() {
            mobileToggle && mobileToggle.classList.add('is-active');
            mobileDrawer && mobileDrawer.classList.add('is-open');
            backdrop && backdrop.classList.add('is-open');
            document.body.classList.add('mobile-nav-locked');
        }

        function closeMobileMenu() {
            mobileToggle && mobileToggle.classList.remove('is-active');
            mobileDrawer && mobileDrawer.classList.remove('is-open');
            backdrop && backdrop.classList.remove('is-open');
            document.body.classList.remove('mobile-nav-locked');
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', function (e) {
                e.preventDefault();
                const isOpen = mobileDrawer && mobileDrawer.classList.contains('is-open');
                if (isOpen) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            });
        }

        if (backdrop) {
            backdrop.addEventListener('click', closeMobileMenu);
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        /* ── Smooth Scroll to Section on Click ────────────────────────── */
        allNavLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Check if link is an on-page section hash
                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        e.preventDefault();
                        closeMobileMenu();

                        const headerHeight = header ? header.offsetHeight : 80;
                        const elementPosition = targetSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerHeight + 2;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        // Set active link immediately on click
                        setActiveLink(targetId);

                        // Update URL hash smoothly without jump
                        if (history.pushState) {
                            history.pushState(null, null, href);
                        } else {
                            window.location.hash = href;
                        }
                    }
                }
            });
        });

        // Detect current page
        const currentPath = window.location.pathname;
        const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
        const isIndexPage = (currentPage === '' || currentPage === 'index.html');

        /* ── Set Active Navigation Link State ─────────────────────────── */
        function setActiveLink(activeId) {
            const links = document.querySelectorAll('.nav-link-btn, .mobile-nav-link');
            links.forEach(link => {
                const href = (link.getAttribute('href') || '').trim();

                // On standalone pages (e.g., dropshipping.html, portfolio.html), keep current page link active
                if (!isIndexPage) {
                    const linkPage = href.split('#')[0].split('?')[0].split('/').pop();
                    if (linkPage && linkPage === currentPage) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                    return;
                }

                // On index.html, match section or default home
                if (href === '#' + activeId || href === 'index.html#' + activeId || 
                   (activeId === 'hero-section' && (href === '#' || href === '#hero-section' || href === 'index.html'))) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        /* ── Live Scrollspy Engine ─────────────────────────────────────── */
        let scrollTimeout;
        function updateScrollSpy() {
            if (!isIndexPage) {
                setActiveLink('');
                return;
            }

            const headerHeight = header ? header.offsetHeight : 80;
            const scrollPosition = window.pageYOffset + headerHeight + 50;

            let currentSectionId = '';

            // Check sections from bottom to top or by distance
            for (let i = 0; i < sectionMap.length; i++) {
                const sec = document.getElementById(sectionMap[i].id);
                if (sec) {
                    const top = sec.offsetTop;
                    const height = sec.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        currentSectionId = sectionMap[i].id;
                        break;
                    }
                }
            }

            // Fallback for top of page
            if (window.pageYOffset < 150) {
                currentSectionId = 'hero-section';
            }

            if (currentSectionId) {
                setActiveLink(currentSectionId);
            }
        }

        window.addEventListener('scroll', function () {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function () {
                    scrollTimeout = null;
                    updateScrollSpy();
                }, 40);
            }
        }, { passive: true });

        // Initial check on load
        setTimeout(updateScrollSpy, 150);
    });
})();
