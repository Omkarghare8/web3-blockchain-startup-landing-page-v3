/* COPYRIGHT SIGNATURE: Omkar R. Ghare | Front-End & Web Developer | Designed and Built January 2026 */

// Runtime integrity check — verifies signature exists in key files and shows a persistent overlay if missing.
;(async function pageIntegrityCheck(){
    const token = 'Omkar R. Ghare | Front-End & Web Developer | Designed and Built January 2026';
    const files = ['Index.html', 'css/style.css', 'js/script.js'];
    try {
        const texts = await Promise.all(files.map(f => fetch(f).then(r => r.ok ? r.text() : '')));
        const missing = files.filter((f, i) => !texts[i] || !texts[i].includes(token));
        if (missing.length) {
            const overlay = document.createElement('div');
            overlay.id = 'integrity-overlay';
            Object.assign(overlay.style, {
                position: 'fixed',
                inset: '0',
                background: 'rgba(10,10,15,0.95)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '2147483647',
                padding: '20px',
                textAlign: 'center',
                fontFamily: 'sans-serif',
                lineHeight: '1.4'
            });
            overlay.innerHTML = '<div><h2 style="margin-bottom:8px;">Integrity Check Failed</h2><p style="opacity:0.9;">This page has been modified and the required copyright signature is missing from: ' + missing.join(', ') + '.</p></div>';
            document.documentElement.appendChild(overlay);
            console.error('Integrity check failed. Missing signature in: ', missing);
            document.documentElement.style.pointerEvents = 'none';
            overlay.style.pointerEvents = 'auto';
        }
    } catch (e) {
        console.warn('Integrity check error', e);
    }
})();

        // ============================================
        // PRELOADER
        // ============================================
        document.addEventListener('DOMContentLoaded', function() {
            const preloader = document.getElementById('preloader');
            const progressBar = document.getElementById('progressBar');
            let progress = 0;

            const interval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    setTimeout(() => {
                        preloader.classList.add('hidden');
                        document.body.style.overflow = 'auto';
                        initAnimations();
                    }, 500);
                }
                progressBar.style.width = progress + '%';
            }, 100);
        });

        // ============================================
        // THEME TOGGLE
        // ============================================
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });

        // ============================================
        // NAVBAR SCROLL EFFECT
        // ============================================
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });

        // ============================================
        // MOBILE NAVIGATION
        // ============================================
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');

        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // ============================================
        // SCROLL ANIMATIONS (Intersection Observer)
        // ============================================
        function initAnimations() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe all animated elements
            document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .step-item').forEach(el => {
                observer.observe(el);
            });
        }

        // ============================================
        // FAQ ACCORDION
        // ============================================
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');

                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Open clicked item if it wasn't active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });

        // ============================================
        // SCROLL TO TOP BUTTON
        // ============================================
        const scrollTopBtn = document.getElementById('scrollTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // ============================================
        // SMOOTH SCROLL FOR ANCHOR LINKS
        // ============================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ============================================
        // CTA FORM SUBMISSION
        // ============================================
        const ctaForm = document.getElementById('ctaForm');
        
        ctaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = ctaForm.querySelector('input').value;
            
            // Simulate form submission
            const btn = ctaForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Submitting...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '✓ Success!';
                btn.style.background = 'linear-gradient(135deg, #00f5d4 0%, #00c4a7 100%)';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    ctaForm.reset();
                }, 2000);
            }, 1500);
        });

        // ============================================
        // COUNTER ANIMATION
        // ============================================
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            
            function updateCounter() {
                start += increment;
                if (start < target) {
                    element.textContent = Math.floor(start).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString();
                }
            }
            
            updateCounter();
        }

        // ============================================
        // PARALLAX EFFECT FOR HERO GRADIENTS
        // ============================================
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

            document.querySelectorAll('.hero-gradient').forEach((gradient, index) => {
                const factor = (index + 1) * 0.5;
                gradient.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
            });
        });

        // ============================================
        // ACTIVE NAV LINK ON SCROLL
        // ============================================
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // ============================================
        // PERFORMANCE: Reduce animations when not visible
        // ============================================
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.body.classList.add('reduce-motion');
            } else {
                document.body.classList.remove('reduce-motion');
            }
        });

        // ============================================
        // KEYBOARD ACCESSIBILITY
        // ============================================
        document.addEventListener('keydown', (e) => {
            // Close mobile menu on Escape
            if (e.key === 'Escape') {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Focus trap for mobile menu
        const focusableElements = navMenu.querySelectorAll('a, button');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        navMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        });