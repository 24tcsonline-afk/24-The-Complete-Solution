/* ==========================================
   24 THE COMPLETE SOLUTION
   script.js
========================================== */

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------
       Sticky Header
    ------------------------------- */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 60) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });


    /* -------------------------------
       Mobile Menu
    ------------------------------- */

    const menuBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("show");

        });

    }


    /* -------------------------------
       Smooth Scroll
    ------------------------------- */

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


    /* -------------------------------
       Scroll Animation
    ------------------------------- */

    const revealItems = document.querySelectorAll(".card, .mission-card, .feature");

    function revealOnScroll() {

        const trigger = window.innerHeight * 0.85;

        revealItems.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < trigger) {

                item.classList.add("visible");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();


    /* -------------------------------
       Contact Form
    ------------------------------- */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you for contacting 24 The Complete Solution. Our team will contact you shortly.");

            form.reset();

        });

    }

});


/* ==========================================
   Back To Top Button
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "back-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   Statistics Counter
========================================== */

function animateCounter(id, endValue) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const speed = Math.ceil(endValue / 100);

    const timer = setInterval(function () {

        count += speed;

        if (count >= endValue) {

            count = endValue;

            clearInterval(timer);

        }

        element.innerText = count + "+";

    }, 20);

}

window.addEventListener("load", function () {

    animateCounter("customers", 1000);

    animateCounter("partners", 100);

    animateCounter("countries", 4);

    animateCounter("services", 10);

});


/* ==========================================
   WhatsApp Floating Button
========================================== */

const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {

    whatsapp.addEventListener("mouseenter", function () {

        whatsapp.style.transform = "scale(1.1)";

    });

    whatsapp.addEventListener("mouseleave", function () {

        whatsapp.style.transform = "scale(1)";

    });

}
