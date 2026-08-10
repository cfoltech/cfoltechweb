// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href'))

.scrollIntoView({

behavior:'smooth'

});

});

});



// Welcome message

window.addEventListener("load",()=>{

console.log("Welcome to CFOL Technologies");

});



// Contact button

document.getElementById("messageBtn")

.addEventListener("click",()=>{

alert(

"Thank you for your interest in CFOL Technologies.\n\nRegistration portal will be available soon."

);

});



// Reveal animation

const cards=document.querySelectorAll('.card,.course');

window.addEventListener('scroll',()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity=1;

card.style.transform='translateY(0)';

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform='translateY(40px)';

card.style.transition='all .6s ease';

});

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.getElementById("mainNavbar");
    const navLinks = document.querySelectorAll("#mainNavbar .nav-link, #mainNavbar .btn-cfol");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            // Check if mobile menu is currently open
            const isMobile = window.innerWidth < 992;
            const isMenuOpen = navbar.classList.contains("show");

            if (isMobile && isMenuOpen) {

                // Close Bootstrap mobile menu
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);

                bsCollapse.hide();

                // Wait for menu to close before scrolling
                setTimeout(function () {

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 300);

            } else {

                // Desktop
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
