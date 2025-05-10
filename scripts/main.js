// Menu toggle functionality
const toggleMenu = () => {
    const toggleButton = document.getElementById('toggle-menu');
    const menuList = document.getElementById('list-menu');

    toggleButton.addEventListener("click", () => {
        menuList.classList.toggle("menu__action");
    });

    const menuLinks = document.querySelectorAll('.list a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuList.classList.toggle("menu__action");
        });
    });
};

// Active link on scroll
const setActiveLink = () => {
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 85;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.list a[href*="${sectionId}"]`).classList.add('active-link');
            } else {
                document.querySelector(`.list a[href*="${sectionId}"]`).classList.remove('active-link');
            }
        });
    });
};

// Go to top button
const setupGoTopButton = () => {
    const goTopButton = document.getElementById('go-top');

    window.addEventListener("scroll", () => {
        goTopButton.classList.toggle('sticky', window.scrollY > 150);
    });
};

// Animations with GSAP
const initAnimations = () => {
    gsap.from('.title-logo, .toggle__menu', {
        opacity: 0,
        duration: 2,
        delay: 1.5,
        y: 25,
        ease: 'expo.out',
        stagger: .2
    });

    gsap.from('.link', {
        opacity: 0,
        duration: 2,
        delay: .8,
        y: 25,
        ease: 'expo.out',
        stagger: .2
    });

    gsap.from('#presentacion, #presentacion-sub, #presentacion-btn', {
        opacity: 0,
        duration: 2,
        delay: 1.8,
        y: 25,
        ease: 'power3.out'
    });
};

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    setActiveLink();
    setupGoTopButton();
    initAnimations();
});