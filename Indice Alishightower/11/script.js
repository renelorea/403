// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scroll para enlaces de navegación
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Animación de números en las estadísticas del hero
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 20);
    });
}

// Animaciones al hacer scroll (AOS simplificado)
function createObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animación especial para estadísticas
                if (entry.target.classList.contains('hero-stats')) {
                    animateNumbers();
                }
                
                // Animación para barras de progreso
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    bar.style.animation = 'fillProgress 2s ease-out';
                });
            }
        });
    }, observerOptions);

    // Observar elementos con atributo data-aos
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
    
    // Observar secciones especiales
    observer.observe(document.querySelector('.hero-stats'));
    observer.observe(document.querySelector('.progress-bars'));
}

// Efectos de partículas dinámicas
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${Math.random() > 0.5 ? '#ff4444' : '#ffaa00'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: particleFloat ${Math.random() * 10 + 5}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Navegación activa según scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Efecto parallax para el hero
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
}

// Animación de escritura para el título del hero
function typeWriter() {
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
            word.style.animation = 'slideUp 0.6s ease-out forwards';
        }, index * 200);
    });
}

// Efectos de hover dinámicos para tarjetas
function initCardEffects() {
    const cards = document.querySelectorAll('.about-card, .champion-card, .competition-card, .benefit-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(255, 68, 68, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Animación de aparición gradual
function fadeInOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

// Cursor personalizado para elementos interactivos
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #ff4444, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Efecto hover en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, #ffaa00, transparent)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, #ff4444, transparent)';
        });
    });
}

// Efecto de glitch para títulos
function initGlitchEffect() {
    const titles = document.querySelectorAll('.section-title');
    
    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

// Inicialización de partículas flotantes en secciones
function initFloatingElements() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        if (Math.random() > 0.5) { // Solo algunas secciones
            for (let i = 0; i < 3; i++) {
                const floatingElement = document.createElement('div');
                floatingElement.innerHTML = ['💪', '🏋️', '🔥', '⚡'][Math.floor(Math.random() * 4)];
                floatingElement.style.cssText = `
                    position: absolute;
                    font-size: 2rem;
                    opacity: 0.1;
                    pointer-events: none;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: floatAround ${Math.random() * 10 + 10}s ease-in-out infinite;
                `;
                section.style.position = 'relative';
                section.appendChild(floatingElement);
            }
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funciones
    createObserver();
    createParticles();
    typeWriter();
    initCardEffects();
    initCustomCursor();
    initGlitchEffect();
    initFloatingElements();
    
    // Animación inicial del hero
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
        document.querySelector('.hero-content').style.transform = 'translateY(0)';
    }, 500);
});

window.addEventListener('scroll', function() {
    updateActiveNav();
    parallaxEffect();
    fadeInOnScroll();
    
    // Efecto de transparencia en navbar
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Animaciones CSS adicionales
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% { transform: translateY(100vh) rotate(0deg); }
        100% { transform: translateY(-100px) rotate(360deg); }
    }
    
    @keyframes glitch {
        0%, 100% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
    }
    
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: all 0.6s ease-out;
    }
    
    [data-aos] {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .nav-link.active {
        color: #ff4444 !important;
        transform: translateY(-2px);
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .particle {
        pointer-events: none;
    }
    
    /* Efecto de escritura */
    .hero-title .word {
        display: inline-block;
        margin-right: 0.5rem;
    }
    
    /* Hover effect para botones */
    .btn-primary:active {
        transform: translateY(-1px) scale(0.98);
    }
    
    .btn-secondary:active {
        transform: translateY(-1px) scale(0.98);
    }
    
    /* Animaciones para móvil */
    @media (max-width: 768px) {
        .custom-cursor {
            display: none;
        }
        
        [data-aos] {
            transform: translateY(20px);
        }
        
        .floating-icon {
            animation-duration: 6s;
        }
    }
`;
document.head.appendChild(style);