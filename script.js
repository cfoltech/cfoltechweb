/* =========================================================
   CFOL REGISTRATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");

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

    const roleButtons =
        document.querySelectorAll(".account-type-btn");


    /* =====================================================
       STUDENT / LECTURER SELECTION
    ===================================================== */

    roleButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            roleButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const role = this.dataset.role;

            roleInput.value = role;

            if (role === "student") {

                studentFields.style.display = "block";
                lecturerFields.style.display = "none";

            } else {

                studentFields.style.display = "none";
                lecturerFields.style.display = "block";

            }

        });

    });


    /* =====================================================
       REGISTRATION SUBMISSION
    ===================================================== */

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        message.textContent = "";

        /* ---------------------------------------------
           COMMON FIELDS
        --------------------------------------------- */

        const firstName =
            document.getElementById("firstName").value.trim();

        const lastName =
            document.getElementById("lastName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const role =
            roleInput.value;


        /* ---------------------------------------------
           STUDENT FIELD
        --------------------------------------------- */

        const courseElement =
            document.getElementById("course");

        const course =
            courseElement
                ? courseElement.value.trim()
                : "";


        /* ---------------------------------------------
           LECTURER FIELDS
        --------------------------------------------- */

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
           VALIDATION
        ================================================= */

        if (!firstName ||
            !lastName ||
            !email ||
            !phone) {

            message.textContent =
                "Please complete all required fields.";

            return;
        }


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
           ROLE-SPECIFIC VALIDATION
        ================================================= */

        if (role === "student" && !course) {

            message.textContent =
                "Please select your course.";

            return;
        }


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
           DISABLE BUTTON
        ================================================= */

        submitButton.disabled = true;

        submitButton.textContent =
            "Creating Account...";


        try {

            /* =================================================
               CREATE SUPABASE AUTH ACCOUNT
            ================================================= */

            const { data, error } =
                await supabaseClient.auth.signUp({

                    email: email,

                    password: password,

                    options: {

                        emailRedirectTo:
                            "https://cfoltech.com.ng/",

                        data: {

                            first_name: firstName,

                            last_name: lastName,

                            phone: phone,

                            role: role,

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
                                    ? experience
                                    : null

                        }

                    }

                });


            if (error) {
                throw error;
            }


            /* =================================================
               SUCCESS MESSAGE
            ================================================= */

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


            /* =================================================
               RESET FORM
            ================================================= */

            form.reset();

            roleInput.value = "student";

            studentFields.style.display = "block";

            lecturerFields.style.display = "none";

            roleButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            if (roleButtons[0]) {
                roleButtons[0].classList.add("active");
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

            submitButton.disabled = false;

            submitButton.textContent =
                "Create Account";

        }

    });

});
