/* =========================================================
   CFOL TECHNOLOGIES
   COMPLETE JAVASCRIPT
========================================================= */


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


    /*
       Registration section may not exist
       on the homepage.
    */

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


                /*
                   Remove active class
                   from all buttons
                */

                roleButtons.forEach(function (btn) {

                    btn.classList.remove("active");

                });


                /*
                   Activate selected button
                */

                this.classList.add("active");


                /*
                   Get selected role
                */

                const role =
                    this.dataset.role;


                roleInput.value =
                    role;


                /*
                   Show appropriate fields
                */

                if (role === "student") {

                    if (studentFields) {
                        studentFields.style.display =
                            "block";
                    }

                    if (lecturerFields) {
                        lecturerFields.style.display =
                            "none";
                    }


                } else {

                    if (studentFields) {
                        studentFields.style.display =
                            "none";
                    }

                    if (lecturerFields) {
                        lecturerFields.style.display =
                            "block";
                    }

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


            /*
               Clear previous message
            */

            message.textContent = "";


            /* =================================================
               COMMON FIELDS
            ================================================= */

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
               STUDENT COURSE
            ================================================= */

            const courseElement =
                document.getElementById("course");


            const course =
                courseElement
                    ? courseElement.value.trim()
                    : "";


            /* =================================================
               LECTURER INFORMATION
            ================================================= */

            const expertiseElement =
                document.getElementById("expertise");


            const qualificationElement =
                document.getElementById("qualification");


            const experienceElement =
                document.getElementById("experience");


            const expertise =
                expertiseElement
                    ? expertiseElement.value.trim()
                    : "";


            const qualification =
                qualificationElement
                    ? qualificationElement.value.trim()
                    : "";


            const experience =
                experienceElement
                    ? experienceElement.value.trim()
                    : "";


            /* =================================================
               BASIC VALIDATION
            ================================================= */

            if (!firstName ||
                !lastName ||
                !email ||
                !phone) {

                message.textContent =
                    "Please complete all required fields.";

                return;

            }


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
               STUDENT VALIDATION
            ================================================= */

            if (role === "student" && !course) {

                message.textContent =
                    "Please select your course.";

                return;

            }


            /* =================================================
               LECTURER VALIDATION
            ================================================= */

            if (role === "lecturer") {

                if (!expertise ||
                    !qualification ||
                    !experience) {

                    message.textContent =
                        "Please complete your expertise, qualification and experience.";

                    return;

                }

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

                                /*
                                   COMMON INFORMATION
                                */

                                first_name:
                                    firstName,

                                last_name:
                                    lastName,

                                phone:
                                    phone,

                                role:
                                    role,


                                /*
                                   STUDENT INFORMATION
                                */

                                course:
                                    role === "student"
                                        ? course
                                        : null,


                                /*
                                   LECTURER INFORMATION
                                */

                                expertise:
                                    role === "lecturer"
                                        ? expertise
                                        : null,

                                qualification:
                                    role === "lecturer"
                                        ? qualification
                                        : null,

                                experience:
                                    role === "lecturer"
                                        ? experience
                                        : null

                            }

                        }

                    });


                /* =============================================
                   CHECK FOR SUPABASE ERROR
                ============================================= */

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


                if (studentFields) {

                    studentFields.style.display =
                        "block";

                }


                if (lecturerFields) {

                    lecturerFields.style.display =
                        "none";

                }


                roleButtons.forEach(function (btn) {

                    btn.classList.remove("active");

                });


                if (roleButtons[0]) {

                    roleButtons[0]
                        .classList.add("active");

                }


            } catch (error) {


                /* =============================================
                   ERROR HANDLING
                ============================================= */

                console.error(
                    "CFOL Registration Error:",
                    error
                );


                message.textContent =
                    error.message ||
                    "Registration failed. Please try again.";

            } finally {


                /* =============================================
                   ENABLE BUTTON AGAIN
                ============================================= */

                submitButton.disabled =
                    false;


                submitButton.textContent =
                    "Create Account";

            }

        }
    );

});
