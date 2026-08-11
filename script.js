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

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   WELCOME MESSAGE
========================================================= */

window.addEventListener("load", () => {

    console.log(
        "Welcome to CFOL Technologies"
    );

});


/* =========================================================
   CONTACT BUTTON
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const messageBtn =
            document.getElementById("messageBtn");

        if (messageBtn) {

            messageBtn.addEventListener(
                "click",
                () => {

                    alert(
                        "Thank you for your interest in CFOL Technologies."
                    );

                }
            );

        }

    }
);


/* =========================================================
   CARD / COURSE REVEAL ANIMATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const cards =
            document.querySelectorAll(
                ".card, .course"
            );

        cards.forEach(card => {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(40px)";

            card.style.transition =
                "all .6s ease";

        });


        function revealCards() {

            cards.forEach(card => {

                const top =
                    card.getBoundingClientRect().top;

                if (
                    top <
                    window.innerHeight - 100
                ) {

                    card.style.opacity = "1";

                    card.style.transform =
                        "translateY(0)";

                }

            });

        }


        window.addEventListener(
            "scroll",
            revealCards
        );

        revealCards();

    }
);


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navbar =
            document.getElementById(
                "mainNavbar"
            );

        if (!navbar) {
            return;
        }


        const navLinks =
            document.querySelectorAll(
                "#mainNavbar .nav-link, " +
                "#mainNavbar .btn-cfol"
            );


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    if (
                        !targetId ||
                        !targetId.startsWith("#")
                    ) {

                        return;

                    }


                    const targetSection =
                        document.querySelector(
                            targetId
                        );


                    if (!targetSection) {
                        return;
                    }


                    event.preventDefault();


                    const isMobile =
                        window.innerWidth < 992;


                    const isMenuOpen =
                        navbar.classList.contains(
                            "show"
                        );


                    if (
                        isMobile &&
                        isMenuOpen &&
                        typeof bootstrap !== "undefined"
                    ) {

                        const bsCollapse =
                            bootstrap.Collapse
                                .getOrCreateInstance(
                                    navbar
                                );

                        bsCollapse.hide();


                        setTimeout(
                            function () {

                                targetSection.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                            },
                            300
                        );

                    } else {

                        targetSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });

    }
);


/* =========================================================
   CFOL REGISTRATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "registrationForm"
            );


        /*
         * Stop if registration form
         * does not exist on the page.
         */

        if (!form) {
            return;
        }


        /* =====================================================
           GET FORM ELEMENTS
        ===================================================== */

        const roleInput =
            document.getElementById(
                "userRole"
            );


        const studentFields =
            document.getElementById(
                "studentFields"
            );


        const lecturerFields =
            document.getElementById(
                "lecturerFields"
            );


        const message =
            document.getElementById(
                "registrationMessage"
            );


        const submitButton =
            document.getElementById(
                "registerSubmit"
            );


        /* =====================================================
           ROLE BUTTONS
        ===================================================== */

        const roleButtons =
            document.querySelectorAll(
                ".account-type-btn"
            );


        /* =====================================================
           STUDENT / LECTURER SELECTION
        ===================================================== */

        roleButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {


                        /*
                         * Remove active class
                         * from all buttons.
                         */

                        roleButtons.forEach(
                            function (btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                        /*
                         * Activate selected button.
                         */

                        this.classList.add(
                            "active"
                        );


                        /*
                         * Get selected role.
                         */

                        const role =
                            this.dataset.role;


                        roleInput.value =
                            role;


                        /*
                         * Student selected.
                         */

                        if (
                            role === "student"
                        ) {

                            studentFields.style.display =
                                "block";

                            lecturerFields.style.display =
                                "none";


                            /*
                             * Make course required.
                             */

                            document.getElementById(
                                "course"
                            ).required = true;


                            /*
                             * Lecturer fields
                             * are not required.
                             */

                            document.getElementById(
                                "expertise"
                            ).required = false;

                            document.getElementById(
                                "qualification"
                            ).required = false;

                            document.getElementById(
                                "experience"
                            ).required = false;

                        }


                        /*
                         * Lecturer selected.
                         */

                        else {

                            studentFields.style.display =
                                "none";

                            lecturerFields.style.display =
                                "block";


                            /*
                             * Course is no longer
                             * required.
                             */

                            document.getElementById(
                                "course"
                            ).required = false;


                            /*
                             * Lecturer fields
                             * become required.
                             */

                            document.getElementById(
                                "expertise"
                            ).required = true;

                            document.getElementById(
                                "qualification"
                            ).required = true;

                            document.getElementById(
                                "experience"
                            ).required = true;

                        }

                    }
                );

            }
        );


        /* =====================================================
           REGISTRATION SUBMISSION
        ===================================================== */

        form.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                /*
                 * Clear previous message.
                 */

                message.textContent = "";

                message.style.color = "";


                /* =================================================
                   GET BASIC INFORMATION
                ================================================= */

                const firstName =
                    document.getElementById(
                        "firstName"
                    ).value.trim();


                const lastName =
                    document.getElementById(
                        "lastName"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const phone =
                    document.getElementById(
                        "phone"
                    ).value.trim();


                const password =
                    document.getElementById(
                        "password"
                    ).value;


                const confirmPassword =
                    document.getElementById(
                        "confirmPassword"
                    ).value;


                const role =
                    roleInput.value;


                /* =================================================
                   GET STUDENT / LECTURER INFORMATION
                ================================================= */

                const course =
                    document.getElementById(
                        "course"
                    ).value.trim();


                const expertise =
                    document.getElementById(
                        "expertise"
                    ).value.trim();


                const qualification =
                    document.getElementById(
                        "qualification"
                    ).value.trim();


                const experienceValue =
                    document.getElementById(
                        "experience"
                    ).value.trim();


                /* =================================================
                   VALIDATION
                ================================================= */

                if (!firstName || !lastName) {

                    message.textContent =
                        "Please enter your first and last name.";

                    return;

                }


                if (!phone) {

                    message.textContent =
                        "Please enter your phone number.";

                    return;

                }


                if (!role) {

                    message.textContent =
                        "Please select Student or Lecturer.";

                    return;

                }


                if (password.length < 8) {

                    message.textContent =
                        "Password must contain at least 8 characters.";

                    return;

                }


                if (
                    password !==
                    confirmPassword
                ) {

                    message.textContent =
                        "Passwords do not match.";

                    return;

                }


                /* =================================================
                   STUDENT VALIDATION
                ================================================= */

                if (
                    role === "student" &&
                    !course
                ) {

                    message.textContent =
                        "Please select your course of interest.";

                    return;

                }


                /* =================================================
                   LECTURER VALIDATION
                ================================================= */

                if (
                    role === "lecturer"
                ) {

                    if (!expertise) {

                        message.textContent =
                            "Please enter your area of expertise.";

                        return;

                    }


                    if (!qualification) {

                        message.textContent =
                            "Please enter your highest qualification.";

                        return;

                    }


                    if (!experienceValue) {

                        message.textContent =
                            "Please enter your years of experience.";

                        return;

                    }


                    if (
                        isNaN(
                            Number(
                                experienceValue
                            )
                        )
                    ) {

                        message.textContent =
                            "Years of experience must be a number.";

                        return;

                    }

                }


                /* =================================================
                   DISABLE BUTTON
                ================================================= */

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "Creating Account...";


                try {


                    /* =============================================
                       SUPABASE AUTH REGISTRATION
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
                                        role,

                                    course:
                                        role === "student"
                                            ? course
                                            : null,

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
                                            ? Number(
                                                experienceValue
                                            )
                                            : null

                                }

                            }

                        });


                    /* =============================================
                       CHECK SUPABASE ERROR
                    ============================================= */

                    if (error) {

                        console.error(
                            "Supabase Error:",
                            error
                        );

                        throw error;

                    }


                    /* =============================================
                       SUCCESS MESSAGE
                    ============================================= */

                    if (
                        role === "lecturer"
                    ) {

                        message.innerHTML =
                            "✅ Account created successfully! " +
                            "Please check your email to verify your account. " +
                            "Your lecturer account will require administrator approval.";

                    }

                    else {

                        message.innerHTML =
                            "✅ Account created successfully! " +
                            "Please check your email to verify your account.";

                    }


                    message.style.color =
                        "#198754";


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


                    /*
                     * Restore Student button.
                     */

                    roleButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    if (roleButtons[0]) {

                        roleButtons[0]
                            .classList.add(
                                "active"
                            );

                    }


                    /*
                     * Restore required state.
                     */

                    document.getElementById(
                        "course"
                    ).required = true;


                    document.getElementById(
                        "expertise"
                    ).required = false;


                    document.getElementById(
                        "qualification"
                    ).required = false;


                    document.getElementById(
                        "experience"
                    ).required = false;


                }


                /* =================================================
                   ERROR HANDLING
                ================================================= */

                catch (error) {

                    console.error(
                        "CFOL Registration Error:",
                        error
                    );


                    message.textContent =
                        error.message ||
                        "Registration failed. Please try again.";


                    message.style.color =
                        "#dc3545";

                }


                /* =================================================
                   ENABLE BUTTON
                ================================================= */

                finally {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        "Create Account";

                }

            }
        );


        /* =====================================================
           INITIAL FORM STATE
        ===================================================== */

        if (roleInput.value === "student") {

            studentFields.style.display =
                "block";

            lecturerFields.style.display =
                "none";

            document.getElementById(
                "course"
            ).required = true;

        }

    }
);
