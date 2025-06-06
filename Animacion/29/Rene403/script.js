const loadingScreen = document.querySelector('.loading-screen');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav ul li');
const pages = document.querySelectorAll('.page');
const footerLinks = document.querySelectorAll('.footer-links a');

// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading time (you can replace this with actual loading checks)
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        // Add a class to animate the first page entrance
        document.getElementById('home').classList.add('fade-in');
    }, 2500); // 2.5 seconds loading time
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (nav.classList.contains('active') &&
        !nav.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    }
});

// Navigation functionality
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the page id from the data attribute
        const pageId = item.getAttribute('data-page');
       
        // First, remove active class from all items and pages
        navItems.forEach(navItem => navItem.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
       
        // Add active class to clicked item
        item.classList.add('active');
       
        // Show selected page with animation
        const selectedPage = document.getElementById(pageId);
       
        // First hide all pages
        pages.forEach(page => {
            page.style.display = 'none';
            page.classList.remove('fade-in');
        });
       
        // Then show and animate the selected page
        selectedPage.style.display = 'block';
       
        // Trigger reflow to restart animation
        void selectedPage.offsetWidth;
       
        selectedPage.classList.add('active');
       
        // Scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
       
        // Close the mobile menu after clicking
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        }
    });
});

// Footer links navigation
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('href').substring(1);
       
        // Update navigation active state
        navItems.forEach(navItem => {
            if (navItem.getAttribute('data-page') === pageId) {
                navItem.click();
            }
        });
    });
});

// Dynamic header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
   
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(93, 64, 55, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = 'var(--primary-brown)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// Add football animations to elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.score-card, .champion-card, .fact, .stadium');
   
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
       
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
           
            // Add custom animation class based on element type
            if (element.classList.contains('score-card')) {
                element.style.animation = 'fadeInUp 0.6s ease forwards';
            } else if (element.classList.contains('champion-card')) {
                element.style.animation = 'fadeInLeft 0.6s ease forwards';
            } else if (element.classList.contains('fact')) {
                element.style.animation = 'fadeInRight 0.6s ease forwards';
            } else if (element.classList.contains('stadium')) {
                element.style.animation = 'fadeInUp 0.8s ease forwards';
            }
           
            // Add a slight delay for each subsequent element
            const delay = Array.from(elements).indexOf(element) * 0.1;
            element.style.animationDelay = `${delay}s`;
        }
    });
};

// Define animations
const styleSheet = document.styleSheet || document.createElement('style');
styleSheet.innerHTML = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
   
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
   
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
   
    .fade-in {
        animation: fadeIn 0.8s ease-in-out;
    }
`;
document.head.appendChild(styleSheet);

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);
// Also run it once when the page loads
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Create a custom football cursor
const createCustomCursor = () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
   
    // Style the cursor
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'rgba(93, 64, 55, 0.3)';
    cursor.style.border = '2px solid var(--accent-gold)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'transform 0.1s ease, background-color 0.3s ease';
   
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
   
    // Change cursor on clickable elements
    const clickables = document.querySelectorAll('a, button, nav ul li, .menu-toggle');
    clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(255, 213, 79, 0.4)';
            cursor.style.mixBlendMode = 'overlay';
        });
       
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'rgba(93, 64, 55, 0.3)';
            cursor.style.mixBlendMode = 'normal';
        });
    });
};

// Only create custom cursor on non-touch devices
if (!('ontouchstart' in window)) {
    createCustomCursor();
}

// Add a subtle football field pattern to the background on certain elements
const addFootballPatternToBg = () => {
    const contentContainers = document.querySelectorAll('.content-container');
   
    contentContainers.forEach(container => {
        // Add yard line markers as subtle background elements
        for (let i = 1; i <= 4; i++) {
            const yardLine = document.createElement('div');
            yardLine.classList.add('yard-line');
           
            // Style the yard lines
            yardLine.style.position = 'absolute';
            yardLine.style.height = '1px';
            yardLine.style.width = '100%';
            yardLine.style.backgroundColor = 'rgba(46, 125, 50, 0.1)';
            yardLine.style.left = '0';
            yardLine.style.top = `${i * 20}%`;
           
            // Add yard number
            const yardNumber = document.createElement('div');
            yardNumber.classList.add('yard-number');
            yardNumber.textContent = i * 10;
           
            // Style the yard number
            yardNumber.style.position = 'absolute';
            yardNumber.style.left = '10px';
            yardNumber.style.top = '-10px';
            yardNumber.style.fontSize = '12px';
            yardNumber.style.color = 'rgba(93, 64, 55, 0.2)';
            yardNumber.style.fontWeight = 'bold';
           
            yardLine.appendChild(yardNumber);
            container.appendChild(yardLine);
        }
    });
};

// Add football pattern to background
document.addEventListener('DOMContentLoaded', addFootballPatternToBg);

// Preload images to prevent flickering during page transitions
const preloadImages = () => {
    const imageUrls = [
        'img/foondo.jpg',
        'img/descarga.jpg',
        'img/2.jpg',
        'img/brady.png',
        'img/Sofi.jpg',
        'img/att.jpg',
        'img/Lambeau.png'
    ];
   
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};
