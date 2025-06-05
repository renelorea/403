// Initialize particles.js for background animation
document.addEventListener('DOMContentLoaded', function() {
  // Particles.js configuration
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#3a86ff", "#8338ec", "#3ce29f"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#3a86ff",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "push": {
          "particles_nb": 3
        }
      }
    },
    "retina_detect": true
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Update active navigation link
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Scroll indicator click event
document.querySelector('.scroll-indicator').addEventListener('click', function() {
  const historySection = document.querySelector('#history');
  window.scrollTo({
    top: historySection.offsetTop,
    behavior: 'smooth'
  });
});

// Animated title effect
function animateTitle() {
  const title = document.querySelector('.animated-title');
  if (!title) return;
  
  title.innerHTML = title.textContent.split('').map(
    char => char === ' ' ? ' ' : `<span>${char}</span>`
  ).join('');
  
  Array.from(title.querySelectorAll('span')).forEach((span, index) => {
    span.style.animationDelay = `${0.1 * index}s`;
    span.style.animation = 'fadeIn 0.5s forwards';
  });
}

// Coin interaction
document.querySelectorAll('.coin').forEach(coin => {
  coin.addEventListener('click', function() {
    this.style.animation = 'spin 1s ease';
    setTimeout(() => {
      this.style.animation = 'float 3s ease-in-out infinite';
    }, 1000);
  });
});

// Intersection Observer for scroll-based animations
const animateOnScroll = function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });
  
  // Observe tech cards
  document.querySelectorAll('.tech-card').forEach(card => {
    observer.observe(card);
  });
};

// Track scroll position for navigation highlighting
function updateNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Animate blockchain blocks
function animateBlockchain() {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach((block, index) => {
    setTimeout(() => {
      block.style.transform = 'translateY(-5px)';
      setTimeout(() => {
        block.style.transform = 'translateY(0)';
      }, 500);
    }, index * 800);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  animateTitle();
  animateOnScroll();
  
  // Add CSS animation keyframes programmatically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes spin {
      from { transform: rotateY(0deg); }
      to { transform: rotateY(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  // Set interval for blockchain animation
  setInterval(animateBlockchain, 5000);
  
  // Update navigation based on scroll position
  window.addEventListener('scroll', updateNavigation);
  
  // Initialize navigation highlight
  updateNavigation();
});

// Add click events to tech cards
document.addEventListener('DOMContentLoaded', function() {
  // Mining animation interaction
  const miningVisual = document.querySelector('.mining-visual');
  if (miningVisual) {
    miningVisual.addEventListener('click', function() {
      const animation = this.querySelector('.mining-animation');
      animation.style.animationDuration = '1s';
      setTimeout(() => {
        animation.style.animationDuration = '4s';
      }, 1000);
    });
  }
  
  // Transaction animation interaction
  const transactionVisual = document.querySelector('.transaction-visual');
  if (transactionVisual) {
    transactionVisual.addEventListener('click', function() {
      const animation = this.querySelector('.transaction-animation');
      animation.style.animationDuration = '1s';
      setTimeout(() => {
        animation.style.animationDuration = '3s';
      }, 1000);
    });
  }
  
  // Keys visual interaction
  const keysVisual = document.querySelector('.keys-visual');
  if (keysVisual) {
    const privateKey = keysVisual.querySelector('.private-key');
    if (privateKey) {
      privateKey.addEventListener('mouseenter', function() {
        this.querySelector('.key-value').textContent = '••••••••••••••••••••';
      });
      privateKey.addEventListener('mouseleave', function() {
        this.querySelector('.key-value').textContent = 'X9y8Z7w6V5u4T3s...';
      });
    }
  }
});