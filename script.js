// Typed.js initialization
var typeSwitch = new Typed(".role", {
    strings: ["Frontend Developer", "Web Designer", "Software Engineer", "Coder"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Update active class
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Smooth scroll
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, div[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Responsive sidebar height adjustment
function adjustSidebarHeight() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth >= 1024) {
        const viewportHeight = window.innerHeight;
        const topOffset = 40; // Based on --space-xl
        sidebar.style.height = `calc(${viewportHeight}px - ${topOffset * 2}px)`;
        mainContent.style.minHeight = `calc(${viewportHeight}px - ${topOffset * 2}px)`;
    } else {
        sidebar.style.height = 'auto';
        mainContent.style.minHeight = 'auto';
    }
}

// Initial adjustment
adjustSidebarHeight();

// Adjust on resize
window.addEventListener('resize', adjustSidebarHeight);

// Adjust on orientation change
window.addEventListener('orientationchange', adjustSidebarHeight);