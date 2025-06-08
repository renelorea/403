// Variables globales
let currentSection = 'inicio';
const sections = ['inicio', 'alineaciones', 'equipos', 'historia'];
const teamHistories = {
    'cruz-azul': {
        name: 'Cruz Azul',
        logo: 'https://i.ibb.co/GMcwRQp/cruz-azul.png',
        content: `
            <p>Cruz Azul fue fundado el 22 de mayo de 1927 por la cementera del mismo nombre. Es uno de los clubes históricos de México y ha ganado 9 títulos de liga.</p>
            <p>Conocido como "La Máquina", Cruz Azul es famoso por sus actuaciones en finales, habiendo perdido varias de manera dramática, lo que ha dado origen al término "cruzazulear". Sin embargo, en 2021 rompió una sequía de 23 años sin títulos.</p>
            <div class="history-timeline">
                <div class="timeline-item">
                    <span class="year">1927</span>
                    <span class="event">Fundación del club</span>
                </div>
                <div class="timeline-item">
                    <span class="year">1969</span>
                    <span class="event">Primer título de liga</span>
                </div>
                <div class="timeline-item">
                    <span class="year">1997</span>
                    <span class="event">Último título antes de la sequía</span>
                </div>
                <div class="timeline-item">
                    <span class="year">2021</span>
                    <span class="event">Campeonato después de 23 años</span>
                </div>
            </div>
        `
    },
    'tigres': {
        name: 'Tigres UANL',
        logo: 'https://i.ibb.co/s6TnJkJ/tigres.png',
        content: `
            <p>Los Tigres de la Universidad Autónoma de Nuevo León fueron fundados en 1960 y son uno de los equipos más poderosos del fútbol mexicano en la actualidad, con 7 títulos de liga.</p>
            <p>Con el respaldo financiero de CEMEX, Tigres se ha convertido en uno de los equipos que más invierte en fichajes. En 2015, se convirtió en el primer equipo mexicano en llegar a la final de la Copa Libertadores.</p>
            <div class="history-timeline">
                <div class="timeline-item">
                    <span class="year">1960</span>
                    <span class="event">Fundación del club</span>
                </div>
                <div class="timeline-item">
                    <span class="year">1978</span>
                    <span class="event">Primer título de liga</span>
                </div>
                <div class="timeline-item">
                    <span class="year">2015</span>
                    <span class="event">Finalista de Copa Libertadores</span>
                </div>
                <div class="timeline-item">
                    <span class="year">2020</span>
                    <span class="event">Campeón de CONCACAF</span>
                </div>
            </div>
        `
    },
    'monterrey': {
        name: 'Monterrey',
        logo: 'https://i.ibb.co/6HQnJ7V/monterrey.png',
        content: `
            <p>El Club de Fútbol Monterrey, conocido como "Rayados", fue fundado el 28 de junio de 1945. Con 5 títulos de liga, es uno de los equipos más importantes del norte de México.</p>
            <p>Monterrey es el club mexicano más exitoso a nivel internacional en años recientes, habiendo ganado 5 veces la Liga de Campeones de la CONCACAF. Su rivalidad con Tigres ha dado origen al "Clásico Regiomontano".</p>
            <div class="history-timeline">
                <div class="timeline-item">
                    <span class="year">1945</span>
                    <span class="event">Fundación del club</span>
                </div>
                <div class="timeline-item">
                    <span class="year">1986</span>
                    <span class="event">Primer título de liga</span>
                </div>
                <div class="timeline-item">
                    <span class="year">2010</span>
                    <span class="event">Primera CONCACAF</span>
                </div>
                <div class="timeline-item">
                    <span class="year">2019</span>
                    <span class="event">Mundial de Clubes</span>
                </div>
            </div>
        `
    }
};

// Evento cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar navegación
    initNavigation();
    
    // Inicializar eventos para el menú móvil
    initMobileMenu();
    
    // Inicializar animaciones al hacer scroll
    initScrollAnimations();
    
    // Inicializar interacciones para la sección de equipos
    initTeamsInteractions();
    
    // Inicializar botón para cargar más historias
    initLoadMoreButton();
    
    // Inicializar animaciones en los diagramas de formaciones
    initFormationAnimations();
});

// Función para inicializar la navegación
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase active de todos los enlaces
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Agregar clase active al enlace clickeado
            this.classList.add('active');
            
            // Obtener el id de la sección a mostrar
            const targetId = this.getAttribute('href').substring(1);
            
            // Cambiar de sección
            changeSection(targetId);
        });
    });
}

// Función para cambiar de sección
function changeSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // Actualizar sección actual
    currentSection = sectionId;
    
    // Cerrar menú móvil si está abierto
    const mainNav = document.querySelector('.main-nav');
    if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
    }
    
    // Hacer scroll al inicio
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para inicializar el menú móvil
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
}

// Función para inicializar animaciones al hacer scroll
function initScrollAnimations() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        // Cambiar estilo del encabezado al hacer scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Agregar animación a elementos cuando entren al viewport
        const animatableElements = document.querySelectorAll('.fact-card, .formation-card, .team-card');
        
        animatableElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('pulse-animation');
                // Remover la animación después de que termine
                setTimeout(() => {
                    element.classList.remove('pulse-animation');
                }, 2000);
            }
        });
    });
}

// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para inicializar interacciones para la sección de equipos
function initTeamsInteractions() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            const teamId = this.getAttribute('data-team');
            const historySection = document.getElementById('historia');
            
            // Cambiar a la sección de historia
            changeSection('historia');
            
            // Hacer scroll al equipo específico si ya existe
            const teamHistory = document.getElementById(`${teamId}-history`);
            if (teamHistory) {
                teamHistory.scrollIntoView({ behavior: 'smooth' });
                
                // Agregar efecto de destello para resaltar
                teamHistory.classList.add('pulse-animation');
                setTimeout(() => {
                    teamHistory.classList.remove('pulse-animation');
                }, 2000);
            }
        });
    });
}

// Función para inicializar el botón para cargar más historias
function initLoadMoreButton() {
    const loadMoreButton = document.getElementById('load-more-history');
    const historyContainer = document.querySelector('.history-container');
    
    loadMoreButton.addEventListener('click', function() {
        // Crear elementos para historias adicionales
        Object.keys(teamHistories).forEach(teamId => {
            // Verificar si ya existe esta historia
            if (!document.getElementById(`${teamId}-history`)) {
                const teamData = teamHistories[teamId];
                
                // Crear elemento de historia
                const historyElement = document.createElement('div');
                historyElement.className = 'team-history';
                historyElement.id = `${teamId}-history`;
                historyElement.innerHTML = `
                    <div class="history-header">
                        <img src="${teamData.logo}" alt="${teamData.name}" class="history-logo">
                        <h3>${teamData.name}</h3>
                    </div>
                    <div class="history-content">
                        ${teamData.content}
                    </div>
                `;
                
                // Agregar a la sección de historias
                historyContainer.appendChild(historyElement);
                
                // Agregar animación
                historyElement.style.animationDelay = '0.2s';
            }
        });
        
        // Ocultar el botón después de cargar todas las historias
        loadMoreButton.style.display = 'none';
    });
}

// Función para inicializar animaciones en los diagramas de formaciones
function initFormationAnimations() {
    const players = document.querySelectorAll('.player');
    
    players.forEach(player => {
        // Agregar animación al pasar el cursor
        player.addEventListener('mouseenter', function() {
            // Añadir información sobre la posición
            let position = '';
            if (this.classList.contains('gk')) position = 'Portero';
            else if (this.classList.contains('def')) position = 'Defensa';
            else if (this.classList.contains('mid')) position = 'Mediocampista';
            else if (this.classList.contains('fwd')) position = 'Delantero';
            
            // Crear tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'player-tooltip';
            tooltip.textContent = position;
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            tooltip.style.color = 'white';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '4px';
            tooltip.style.fontSize = '12px';
            tooltip.style.zIndex = '100';
            tooltip.style.top = '-25px';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            
            this.style.zIndex = '10';
            this.appendChild(tooltip);
        });
        
        // Remover tooltip al quitar el cursor
        player.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.player-tooltip');
            if (tooltip) {
                this.removeChild(tooltip);
            }
            this.style.zIndex = '1';
        });
    });
    
    // Agregar animación de movimiento a los jugadores
    const formationDiagrams = document.querySelectorAll('.formation-diagram');
    
    formationDiagrams.forEach(diagram => {
        diagram.addEventListener('click', function() {
            const players = this.querySelectorAll('.player');
            
            players.forEach(player => {
                // Agregar animación de rebote
                player.classList.add('bounce-animation');
                
                // Remover animación después de que termine
                setTimeout(() => {
                    player.classList.remove('bounce-animation');
                }, 2000);
            });
        });
    });
}