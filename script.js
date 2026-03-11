document.addEventListener("DOMContentLoaded", function () {

    /* SMOOTH SCROLL */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });


    /* APPOINTMENT BUTTON */

    const appointmentBtn = document.querySelector(".appointment-btn");

    if (appointmentBtn) {
        appointmentBtn.addEventListener("click", function () {
            alert("Appointment booking system coming soon!");
        });
    }


    /* COUNTER ANIMATION */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        counter.innerText = "0";

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");
            const c = +counter.innerText;

            const increment = target / 200;

            if (c < target) {

                counter.innerText = Math.ceil(c + increment);

                setTimeout(updateCounter, 10);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });


    /* SLIDER */

    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlides() {

        if (slides.length === 0) return;

        slides.forEach(slide => slide.classList.remove("active"));

        index++;

        if (index > slides.length) {
            index = 1;
        }

        slides[index - 1].classList.add("active");

        setTimeout(showSlides, 3000);
    }

    showSlides();


    /* APPOINTMENT FORM */

    const form = document.getElementById("appointmentForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Appointment booked successfully!");

            this.reset();

        });

    }


    /* MOBILE MENU */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");

        });

    }


    /* DARK MODE */

    const darkToggle = document.getElementById("darkModeToggle");

    if (darkToggle) {

        darkToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

        });

    }

});