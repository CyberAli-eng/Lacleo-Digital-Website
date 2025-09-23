// Component loader with caching
const componentCache = {};

// Carousel variables (need to be at the top level to maintain state)
let currentAngle = 0;
let carouselInterval;

async function loadComponent(componentName, elementId) {
    const element = document.getElementById(elementId);

    // Check if placeholder element exists
    if (!element) {
        console.warn(`Element with ID '${elementId}' not found for component '${componentName}'`);
        return;
    }

    // Check cache first
    if (componentCache[componentName]) {
        element.innerHTML = componentCache[componentName];
        console.log(`Loaded component '${componentName}' from cache`);
        initDynamicContent();
        return;
    }

    try {
        const response = await fetch(`components/${componentName}.html`);

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();

        // Check if HTML content was received
        if (!html || html.trim().length === 0) {
            throw new Error(`Empty content for component '${componentName}'`);
        }

        // Cache the component
        componentCache[componentName] = html;

        // Insert into page
        element.innerHTML = html;
        console.log(`Successfully loaded component '${componentName}'`);
        initDynamicContent();
    } catch (error) {
        console.error(`Error loading component '${componentName}':`, error);
        // Display error message in the placeholder
        element.innerHTML = `<div class="component-error">
            <p>Error loading ${componentName} component. Please refresh the page.</p>
        </div>`;
    }
}

// Initialize ALL dynamic content after components load
function initDynamicContent() {
    console.log("Initializing all dynamic content");

    // Initialize mobile menu
    initMobileMenu();

    // Initialize dropdown menus
    initDropdowns();

    // Initialize carousel if it exists
    initCarousel();

    // Initialize animations
    initAnimations();

    // Initialize form handling
    initFormHandling();

    // Initialize stats animations
    initStats();

    // Initialize header scroll effect
    initHeaderScroll();
}

// Load all components when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded, starting component loading...");

    // Load header and footer on all pages
    loadComponent('header', 'header-placeholder');
    loadComponent('footer', 'footer-placeholder');

    // Load page-specific components with delay to avoid race conditions
    setTimeout(() => {
        if (document.getElementById('clients-placeholder')) {
            loadComponent('clients', 'clients-placeholder');
        }
        if (document.getElementById('contact-form-placeholder')) {
            loadComponent('contact-form', 'contact-form-placeholder');
        }
        if (document.getElementById('testimonial-slider-placeholder')) {
            loadComponent('testimonial-slider', 'testimonial-slider-placeholder');
        }
        if (document.getElementById('review-placeholder')) {
            loadComponent('review', 'review-placeholder');
        }
    }, 100);
});
// Initialize mobile menu
function initMobileMenu() {
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            const icon = mobileToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");
            }
        });
        console.log("Mobile menu initialized");
    } else {
        console.warn("Mobile menu elements not found");
    }
}

// Initialize dropdown menus
function initDropdowns() {
    const navItems = document.querySelectorAll(".nav-item");

    if (navItems.length > 0) {
        navItems.forEach((item) => {
            item.addEventListener("click", function (e) {
                if (window.innerWidth <= 768) {
                    if (this.querySelector(".dropdown-menu")) {
                        e.preventDefault();
                        this.classList.toggle("active");
                    }
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener("click", function (e) {
            if (!e.target.closest(".nav-item") && window.innerWidth <= 768) {
                navItems.forEach((item) => {
                    item.classList.remove("active");
                });
            }
        });
        console.log("Dropdown menus initialized");
        
    }
}

// Initialize carousel - FIXED VERSION
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.review-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    // Clear any existing interval to prevent duplicates
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }

    if (carousel && cards.length > 0) {
        const cardCount = cards.length;
        const angle = 360 / cardCount;

        console.log(`Initializing carousel with ${cardCount} cards`);

        // Initialize carousel
        function rotateCarousel() {
            carousel.style.transform = `rotateY(${currentAngle}deg)`;

            // Update active dot
            const activeIndex = Math.round((currentAngle % 360) / angle);
            if (dots.length > 0) {
                dots.forEach((dot, index) => {
                    // Handle negative modulo for carousel
                    const normalizedIndex = (index + cardCount) % cardCount;
                    const normalizedActiveIndex = (Math.abs(activeIndex) + cardCount) % cardCount;
                    dot.classList.toggle('active', normalizedIndex === normalizedActiveIndex);
                });
            }
        }

        // Next card
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentAngle -= angle;
                rotateCarousel();
                resetCarouselInterval();
            });
        }

        // Previous card
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentAngle += angle;
                rotateCarousel();
                resetCarouselInterval();
            });
        }

        // Dot navigation
        if (dots.length > 0) {
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.getAttribute('data-index'));
                    currentAngle = -index * angle;
                    rotateCarousel();
                    resetCarouselInterval();
                });
            });
        }

        // Auto rotation every 5 seconds
        function startCarouselInterval() {
            carouselInterval = setInterval(() => {
                currentAngle -= angle;
                rotateCarousel();
            }, 5000);
        }

        // Reset interval when user interacts
        function resetCarouselInterval() {
            clearInterval(carouselInterval);
            startCarouselInterval();
        }

        // Initialize carousel position
        rotateCarousel();
        startCarouselInterval();

        console.log("Carousel initialized successfully");
    } else {
        console.log("Carousel elements not found on this page");
    }
}

// Initialize animations
function initAnimations() {
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');

    if (featureCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Set initial state for animation
        featureCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(card);
        });

        console.log("Animations initialized");
    }
}

function initFormHandling() {
    const form = document.getElementById('consultationForm');
    const formSection = document.getElementById('formSection');
    const toggleBtn = document.getElementById('toggleFormBtn');
    const successMessage = document.getElementById('successMessage');

    // --- New Toggle Logic ---
    if (toggleBtn && formSection) {
        toggleBtn.addEventListener('click', function () {
            formSection.style.display = "block";
            toggleBtn.style.display = "none";   // hide button after click
        });
        console.log("Form toggle initialized");
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ff6b6b';
                    isValid = false;
                }
            });

            if (isValid && successMessage) {
                form.style.display = 'none';
                successMessage.style.display = 'block';
                console.log('Form submitted successfully');
            }
        });
        console.log("Form handling initialized");
    }
}


// Initialize stats animations
function initStats() {
    const stats = document.querySelectorAll('.stat');

    if (stats.length > 0) {
        stats.forEach(stat => {
            stat.addEventListener('mouseover', () => {
                stat.style.transform = 'scale(1.1)';
            });

            stat.addEventListener('mouseout', () => {
                stat.style.transform = 'scale(1)';
            });
        });

        console.log("Stats animations initialized");
    }
}

// Initialize header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                header.style.background = "rgba(255, 255, 255, 0.95)";
                header.style.backdropFilter = "blur(10px)";
            } else {
                header.style.background = "var(--white)";
                header.style.backdropFilter = "none";
            }
        });
        console.log("Header scroll effect initialized");
    }
}