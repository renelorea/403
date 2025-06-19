// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Loader
  const loader = document.querySelector('.loader');
  
  // Hide loader after 2 seconds
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 2000);
  
  // Navigation
  const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
  const pages = document.querySelectorAll('.page');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const header = document.querySelector('header');
  
  // Toggle mobile menu
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });
  
  // Handle page navigation
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(item => item.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');
      
      // Get the page id
      const pageId = link.getAttribute('data-page');
      
      // Hide all pages
      pages.forEach(page => page.classList.remove('active'));
      
      // Show the selected page
      document.getElementById(pageId).classList.add('active');
      
      // Close mobile menu if open
      nav.classList.remove('active');
      burger.classList.remove('toggle');
      
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  // CTA button navigation
  const ctaBtn = document.querySelector('.cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      const pageId = ctaBtn.getAttribute('data-page');
      
      // Remove active class from all links and add to the target link
      navLinks.forEach(item => {
        if (item.getAttribute('data-page') === pageId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      
      // Hide all pages and show the target page
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
      
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Reveal elements on scroll
    revealElements();
  });
  
  // Function to reveal elements on scroll
  function revealElements() {
    const revealCards = document.querySelectorAll('.reveal-card');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      
      if (cardTop < windowHeight - revealPoint) {
        card.classList.add('show');
      }
    });
  }
  
  // Initially reveal elements that are already in view
  revealElements();
  
  // Add mouse hover effects to cards
  const infoCards = document.querySelectorAll('.info-card, .training-card, .category-card, .legend-card');
  
  infoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Add parallax effect to hero and page header sections
  const hero = document.querySelector('.hero');
  const pageHeaders = document.querySelectorAll('.page-header');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Parallax for hero section
    if (hero) {
      const heroContent = hero.querySelector('.hero-content');
      heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
      hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
    }
    
    // Parallax for page headers
    pageHeaders.forEach(header => {
      const headerContent = header.querySelector('.page-header-content');
      if (headerContent && isElementInViewport(header)) {
        headerContent.style.transform = `translateY(${scrollY * 0.2}px)`;
        header.style.backgroundPositionY = `${scrollY * 0.3}px`;
      }
    });
  });
  
  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }
  
  // Add 3D tilt effect to legend cards
  const legendCards = document.querySelectorAll('.legend-card');
  
  legendCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      
      const rotateX = (mouseY / (cardRect.height / 2)) * -5;
      const rotateY = (mouseX / (cardRect.width / 2)) * 5;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
  
  // Update page title based on active page
  function updatePageTitle() {
    const activePage = document.querySelector('.page.active');
    const defaultTitle = document.title;
    
    if (activePage) {
      const pageId = activePage.id;
      let pageTitle;
      
      switch (pageId) {
        case 'home':
          pageTitle = 'GYM - Mundo del Culturismo';
          break;
        case 'olympia':
          pageTitle = 'Mr. Olympia - Historia y Campeones';
          break;
        case 'legends':
          pageTitle = 'Leyendas del Culturismo';
          break;
        default:
          pageTitle = defaultTitle;
      }
      
      document.title = pageTitle;
    }
  }
  
  // Update title when page changes
  navLinks.forEach(link => {
    link.addEventListener('click', updatePageTitle);
  });
  
  // Update title initially
  updatePageTitle();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add image preview on click for training and legend cards
  const cardImages = document.querySelectorAll('.training-card img, .legend-card .legend-image img');
  
  cardImages.forEach(img => {
    img.addEventListener('click', () => {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.classList.add('image-preview-overlay');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      overlay.style.zIndex = '1000';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      
      // Create image
      const previewImg = document.createElement('img');
      previewImg.src = img.src;
      previewImg.style.maxWidth = '90%';
      previewImg.style.maxHeight = '90%';
      previewImg.style.borderRadius = '5px';
      previewImg.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
      previewImg.style.transform = 'scale(0.9)';
      previewImg.style.transition = 'transform 0.3s ease';
      
      // Add close button
      const closeBtn = document.createElement('button');
      closeBtn.textContent = '×';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '20px';
      closeBtn.style.right = '20px';
      closeBtn.style.fontSize = '2rem';
      closeBtn.style.color = 'white';
      closeBtn.style.background = 'none';
      closeBtn.style.border = 'none';
      closeBtn.style.cursor = 'pointer';
      
      // Append elements
      overlay.appendChild(previewImg);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);
      
      // Animate image
      setTimeout(() => {
        previewImg.style.transform = 'scale(1)';
      }, 10);
      
      // Close on button click
      closeBtn.addEventListener('click', () => {
        previewImg.style.transform = 'scale(0.9)';
        setTimeout(() => {
          document.body.removeChild(overlay);
        }, 300);
      });
      
      // Close on overlay click
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          previewImg.style.transform = 'scale(0.9)';
          setTimeout(() => {
            document.body.removeChild(overlay);
          }, 300);
        }
      });
    });
  });
  
  // Add pulse effect to hero CTA button
  if (ctaBtn) {
    setInterval(() => {
      ctaBtn.classList.add('pulse');
      setTimeout(() => {
        ctaBtn.classList.remove('pulse');
      }, 1000);
    }, 3000);
  }
  
  // Add CSS for pulse animation
  const style = document.createElement('style');
  style.textContent = `
    .pulse {
      animation: pulse-animation 1s ease;
    }
    
    @keyframes pulse-animation {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.7); }
      50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(230, 57, 70, 0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(230, 57, 70, 0); }
    }
  `;
  document.head.appendChild(style);
});