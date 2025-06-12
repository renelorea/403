// Variables globales
let currentPage = 'home';
let isAnimating = false;

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Función de inicialización
function initializeApp() {
    setupEventListeners();
    setupScrollEffects();
    showPage('home');
    animateOnLoad();
}

// Configurar event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú móvil al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            closeMobileMenu();
        }
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Configurar efectos de scroll
function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Animaciones al hacer scroll
        animateOnScroll();
    });
}

// Toggle del menú móvil
function toggleMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// Cerrar menú móvil
function closeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
}

// Función principal para mostrar páginas
function showPage(pageName) {
    if (isAnimating || pageName === currentPage) return;
    
    isAnimating = true;
    
    // Ocultar página actual
    const currentPageElement = document.getElementById(currentPage + 'Page');
    if (currentPageElement) {
        currentPageElement.style.opacity = '0';
        currentPageElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            currentPageElement.classList.remove('active');
            
            // Mostrar nueva página
            const newPageElement = document.getElementById(pageName + 'Page');
            if (newPageElement) {
                newPageElement.classList.add('active');
                
                setTimeout(() => {
                    newPageElement.style.opacity = '1';
                    newPageElement.style.transform = 'translateY(0)';
                    
                    // Actualizar página actual
                    currentPage = pageName;
                    
                    // Animar elementos de la nueva página
                    animatePageElements(newPageElement);
                    
                    // Scroll al top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    
                    isAnimating = false;
                }, 50);
            } else {
                isAnimating = false;
            }
        }, 300);
    } else {
        // Si no hay página actual, mostrar directamente
        const newPageElement = document.getElementById(pageName + 'Page');
        if (newPageElement) {
            newPageElement.classList.add('active');
            newPageElement.style.opacity = '1';
            newPageElement.style.transform = 'translateY(0)';
            currentPage = pageName;
            animatePageElements(newPageElement);
        }
        isAnimating = false;
    }
    
    // Actualizar estado activo en navegación
    updateActiveNavLink(pageName);
}

// Actualizar enlace activo en navegación
function updateActiveNavLink(pageName) {
    // Remover clase activa de todos los enlaces
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Agregar clase activa al enlace correspondiente
    const activeLinks = document.querySelectorAll(`[onclick="showPage('${pageName}')"]`);
    activeLinks.forEach(link => {
        link.classList.add('active');
    });
}

// Animar elementos de la página
function animatePageElements(pageElement) {
    const animatedElements = pageElement.querySelectorAll('.content-block, .category-section, .gallery-category, .product-card, .gallery-card');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Animaciones al cargar la página
function animateOnLoad() {
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            heroText.style.transition = 'all 1s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateX(0)';
        }, 500);
    }
}

// Animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.content-block, .product-card, .gallery-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Efectos de hover para tarjetas
document.addEventListener('DOMContentLoaded', function() {
    // Efecto hover para product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto hover para gallery cards
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            const overlay = this.querySelector('.gallery-overlay');
            if (overlay) {
                overlay.style.background = 'linear-gradient(to top, rgba(233, 30, 99, 0.8), transparent)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            const overlay = this.querySelector('.gallery-overlay');
            if (overlay) {
                overlay.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)';
            }
        });
    });
});

// Función para crear efecto de partículas (opcional)
function createParticleEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        hero.appendChild(particle);
    }
}

// Agregar animación de flotación para partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
    }
    
    .nav-link.active {
        color: #e91e63;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Función de utilidad para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimizar el scroll listener
const optimizedScrollHandler = debounce(function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    animateOnScroll();
}, 10);

// Reemplazar el event listener de scroll
window.removeEventListener('scroll', setupScrollEffects);
window.addEventListener('scroll', optimizedScrollHandler);

// Función para lazy loading de imágenes
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading si es necesario
// setupLazyLoading();