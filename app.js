document.addEventListener('DOMContentLoaded', () => {
    // Function for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Target all sections for the animation
    document.querySelectorAll('section.reveal').forEach(section => {
        observer.observe(section);
    });

    // Get the modal and buttons
    const modal = document.getElementById('modal');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Show the modal
    showMoreBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('modal-fade-in');
    });

    // Hide the modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('modal-fade-out');
        modal.classList.remove('modal-fade-in');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('modal-fade-out');
        }, 300); // Match animation duration
    });

    // Hide modal if user clicks outside
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalBtn.click();
        }
    });

    // --- NEW CODE ADDED HERE ---
    const getStartedBtn = document.getElementById('getStartedBtn');
    const firstSection = document.getElementById('section-1');

    getStartedBtn.addEventListener('click', () => {
        firstSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
    // --- END OF NEW CODE ---
});