/* =========================================================
   SUPABASE CONFIGURATION
========================================================= */

const SUPABASE_URL =
    "https://bimulzqxdsurkdpbdpex.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_-l2aR3__r2j-nOak99QUBg_LGYXKIQV";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   WELCOME MESSAGE
========================================================= */

window.addEventListener("load", () => {

    console.log("Welcome to CFOL Technologies");

});


/* =========================================================
   CONTACT BUTTON
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const messageBtn =
        document.getElementById("messageBtn");

    if (messageBtn) {

        messageBtn.addEventListener("click", () => {

            alert(
                "Thank you for your interest in CFOL Technologies."
            );

        });

    }

});


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const cards =
    document.querySelectorAll(".card, .course");

cards.forEach(card => {

    card.style.opacity = 0;

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all .6s ease";

});


window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const top =
            card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            card.style.opacity = 1;

            card.style.transform =
                "translateY(0)";

        }

    });

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar =
        document.getElementById("mainNavbar");

    const navLinks =
        document.querySelectorAll(
            "#mainNavbar .nav-link, #mainNavbar .btn-cfol"
        );


    if (!navbar) {
        return;
    }


    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (!targetId ||
                !targetId.startsWith("#")) {

                return;

            }


            const targetSection =
                document.querySelector(targetId);


            if (!targetSection) {
                return;
            }


            event.preventDefault();


            const isMobile =
                window.innerWidth < 992;

            const isMenuOpen =
                navbar.classList.contains("show");


            if (isMobile && isMenuOpen) {

                const bsCollapse =
                    bootstrap.Collapse
                        .getOrCreateInstance(navbar);

                bsCollapse.hide();


                setTimeout(function () {

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 300);


            } else {

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});


/* =========================================================
   CFOL REGISTRATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.getElementById("registrationForm");


    /* Registration section may not exist yet */

    if (!form) {
        return;
    }


    const roleInput =
        document.getElementById("userRole");

    const studentFields =
        document.getElementById("studentFields");

    const lecturerFields =
        document.getElementById("lecturerFields");

    const message =
        document.getElementById("registrationMessage");

    const submitButton =
        document.getElementById("registerSubmit");


    /* =====================================================
       STUDENT / LECTURER SELECTION
    ===================================================== */

    const roleButtons =
        document.querySelectorAll(
            ".account-type-btn"
        );


    roleButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {


                roleButtons.forEach(function (btn) {

                    btn.classList.remove("active");

                });


                this.classList.add("active");


                const role =
                    this.dataset.role;


                roleInput.value =
                    role;


                if (role === "student") {

                    studentFields.style.display =
                        "block";

                    lecturerFields.style.display =
                        "none";


                } else {

                    studentFields.style.display =
                        "none";

                    lecturerFields.style.display =
                        "block";

                }

            }
        );

    });


    /* =====================================================
       REGISTRATION SUBMISSION
    ===================================================== */

    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            message.textContent = "";


            const firstName =
                document.getElementById("firstName")
                    .value.trim();


            const lastName =
                document.getElementById("lastName")
                    .value.trim();


            const email =
                document.getElementById("email")
                    .value.trim();


            const phone =
                document.getElementById("phone")
                    .value.trim();


            const password =
                document.getElementById("password")
                    .value;


            const confirmPassword =
                document.getElementById("confirmPassword")
                    .value;


            const role =
                roleInput.value;


            /* =================================================
               PASSWORD VALIDATION
            ================================================= */

            if (password.length < 8) {

                message.textContent =
                    "Password must contain at least 8 characters.";

                return;

            }


            if (password !== confirmPassword) {

                message.textContent =
                    "Passwords do not match.";

                return;

            }


            /* =================================================
               DISABLE SUBMIT BUTTON
            ================================================= */

            submitButton.disabled = true;

            submitButton.textContent =
                "Creating Account...";


            try {


                /* =============================================
                   CREATE SUPABASE AUTH ACCOUNT
                ============================================= */

                const { data, error } =
                    await supabaseClient.auth.signUp({

                        email: email,

                        password: password,

                        options: {

                            emailRedirectTo:
                                "https://cfoltech.com.ng/",

                            data: {

                                first_name:
                                    firstName,

                                last_name:
                                    lastName,

                                phone:
                                    phone,

                                role:
                                    role

                            }

                        }

                    });


                if (error) {

                    throw error;

                }


                /* =============================================
                   SUCCESS MESSAGE
                ============================================= */

                if (role === "lecturer") {

                    message.innerHTML =
                        "✅ Account created successfully! " +
                        "Please check your email to verify your account. " +
                        "Your lecturer account will require administrator approval.";


                } else {

                    message.innerHTML =
                        "✅ Account created successfully! " +
                        "Please check your email to verify your account.";

                }


                /* =============================================
                   RESET FORM
                ============================================= */

                form.reset();


                roleInput.value =
                    "student";


                studentFields.style.display =
                    "block";


                lecturerFields.style.display =
                    "none";


                roleButtons.forEach(function (btn) {

                    btn.classList.remove("active");

                });


                if (roleButtons[0]) {

                    roleButtons[0]
                        .classList.add("active");

                }


            } catch (error) {


                console.error(
                    "CFOL Registration Error:",
                    error
                );


                message.textContent =
                    error.message ||
                    "Registration failed. Please try again.";


            } finally {


                submitButton.disabled =
                    false;


                submitButton.textContent =
                    "Create Account";

            }

        }
    );

});
