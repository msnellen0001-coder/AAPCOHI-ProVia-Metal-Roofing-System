/* Main Navigation */


const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

/* Toggle mobile navigation */

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});

/* Testimonials Section */

let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[index].classList.remove('active');
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add('active');
}

setInterval(showNextTestimonial, 5000); // changes every 5 seconds

/* FAQ Section */

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.faq-item h3').forEach(header => {
        header.addEventListener('click', () => {
            const paragraph = header.nextElementSibling;
            paragraph.style.display =
                paragraph.style.display === "block" ? "none" : "block";
        });
    });
});
