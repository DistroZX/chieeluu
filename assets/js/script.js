// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

if (scrollToTopButton) {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastKnownScrollPosition > 300) {
                    scrollToTopButton.style.display = 'block';
                } else {
                    scrollToTopButton.style.display = 'none';
                }
                ticking = false;
            });

            ticking = true;
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Function to open the modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
};

// Initialize AOS
AOS.init();

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        const description = card.querySelector('.skill-description');
        const isVisible = description.style.maxHeight;

        // Toggle the max height to create a sliding effect
        if (isVisible) {
            description.style.maxHeight = null; // Hide description
            description.style.opacity = 0; // Hide opacity
        } else {
            description.style.maxHeight = description.scrollHeight + "px"; // Show description
            description.style.opacity = 1; // Show opacity
        }
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.classList.add('modal-open'); // Prevent background scroll
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.classList.remove('modal-open'); // Re-enable background scroll
}
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
});
