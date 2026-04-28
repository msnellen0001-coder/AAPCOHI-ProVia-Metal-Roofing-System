document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       MOBILE NAVIGATION
    ============================ */
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", () => {
            mobileNav.classList.toggle("open");
        });
    }

    /* ============================
       TESTIMONIALS ROTATION
    ============================ */
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    if (testimonials.length > 0) {
        testimonials[0].classList.add("active");

        setInterval(() => {
            testimonials[index].classList.remove("active");
            index = (index + 1) % testimonials.length;
            testimonials[index].classList.add("active");
        }, 5000);
    }

    /* ============================
       FAQ ACCORDION
    ============================ */
    const faqHeaders = document.querySelectorAll(".faq-item h3");

    if (faqHeaders.length > 0) {
        faqHeaders.forEach(header => {
            header.addEventListener("click", () => {
                const paragraph = header.nextElementSibling;
                if (paragraph) {
                    paragraph.style.display =
                        paragraph.style.display === "block" ? "none" : "block";
                }
            });
        });
    }

    /* ============================
       CONTACT FORM SUCCESS MESSAGE
    ============================ */
    const form = document.querySelector(".contact-form");
    const successBox = document.getElementById("form-success");

    if (form && successBox) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            successBox.classList.add("show");
            form.reset();

            setTimeout(() => {
                successBox.classList.remove("show");
            }, 4000);
        });
    }

}); // END DOMContentLoaded


/* ============================
   GOOGLE MAP (ABOUT PAGE)
============================ */
function initMap() {
    const mapElement = document.getElementById("map");
    if (!mapElement) return;

    const aapcoAddress = { lat: 37.44394, lng: -77.44154 };

    const map = new google.maps.Map(mapElement, {
        zoom: 14,
        center: aapcoAddress,
    });

    new google.maps.Marker({
        position: aapcoAddress,
        map: map,
        title: "AAPCO Home Improvement",
    });
}
