// ==================== DOM Elements ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsContainer = document.getElementById('projectsContainer');
const contactForm = document.getElementById('contactForm');

// ==================== Projects Data ====================
let projectsData = [];

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupEventListeners();
    observeElements();
});

// ==================== Event Listeners ====================
function setupEventListeners() {
    // Hamburger Menu
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Filter Buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterProjects(button);
        });
    });

    // Contact Form
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Smooth Scroll
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

// ==================== Menu Toggle ====================
function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// ==================== Projects Management ====================
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        projectsData = await response.json();
        displayProjects(projectsData);
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #64748b;">프로젝트를 불러올 수 없습니다.</p>';
    }
}

function displayProjects(projects) {
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <span class="project-tag">${getCategoryLabel(project.category)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank">GitHub</a>
                    <a href="${project.demo}" class="project-link" target="_blank">Demo</a>
                </div>
            </div>
        </div>
    `).join('');

    // Add animation
    const cards = projectsContainer.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
}

function getCategoryLabel(category) {
    const labels = {
        'all': '전체',
        'machine-learning': '머신러닝',
        'data-analysis': '데이터 분석',
        'web-app': '웹 애플리케이션'
    };
    return labels[category] || category;
}

function filterProjects(button) {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter projects
    const category = button.getAttribute('data-filter');
    const filteredProjects = category === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === category);

    displayProjects(filteredProjects);
}

// ==================== Form Handling ====================
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const formData = new FormData(contactForm);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    // Validate form
    if (!name || !email || !message) {
        showNotification('모든 필드를 입력해주세요.', 'error');
        return;
    }

    // Email validation
    if (!isValidEmail(email)) {
        showNotification('유효한 이메일을 입력해주세요.', 'error');
        return;
    }

    // Show success message
    showNotification('메시지가 전송되었습니다. 감사합니다!', 'success');

    // Reset form
    contactForm.reset();

    // In real application, send data to server
    console.log({
        name,
        email,
        message
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ==================== Intersection Observer ====================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.skill-category, .blog-card').forEach(el => {
        observer.observe(el);
    });
}

// ==================== Active Nav Link ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Mobile Menu ====================
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        closeMenu();
    }
});

// ==================== Responsive Menu Fix ====================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// ==================== Scroll to Top Animation ====================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
});

// ==================== Dark Mode Toggle (Optional) ====================
function initDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// ==================== Lazy Loading Images (Optional) ====================
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==================== Active Nav Link Styling ====================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        font-weight: 700;
    }

    .nav-link.active::after {
        width: 100%;
    }

    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
    }
`;
document.head.appendChild(style);

// ==================== Analytics & Performance ====================
// Log page load
console.log('Portfolio website loaded successfully');
console.log('Timestamp:', new Date().toLocaleString('ko-KR'));
