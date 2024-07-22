document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    menuIcon.addEventListener('click', (event) => {
        menu.classList.toggle('show');
        event.stopPropagation(); // لمنع إخفاء القائمة عند النقر على الأيقونة
    });

    menu.addEventListener('click', (event) => {
        event.stopPropagation(); // لمنع إخفاء القائمة عند النقر داخلها
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 10000);

showSlide(currentIndex);


document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;

            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });
});