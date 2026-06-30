const form = document.getElementById("login-form-box");

const studentIdInput =
document.getElementById("StudentID");

const passwordInput =
document.getElementById("Password");

const studentError =
document.getElementById("StudentIdError");

const passwordError =
document.getElementById("PasswordError");

const loginMessage =
document.getElementById("loginMessage");

window.addEventListener("DOMContentLoaded", () => {

    const rememberedId =
        localStorage.getItem("rememberedStudent");

    if (rememberedId) {

        studentIdInput.value = rememberedId;

        document.getElementById("rememberMe")
        .checked = true;

    }

});

form.addEventListener("submit", function (e) {

    e.preventDefault();

    studentError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";

    let valid = true;

    const studentId =
        studentIdInput.value.trim();

    const password =
        passwordInput.value.trim();

    if (studentId === "") {

        studentError.textContent =
        "Student ID is required";

        valid = false;
    }

    if (password === "") {

        passwordError.textContent =
        "Password is required";

        valid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
        "Password must be at least 6 characters";

        valid = false;
    }

    if (!valid) return;

    const students =
        JSON.parse(
            localStorage.getItem("students")
        ) || [];


    const foundStudent =
        students.find(student =>
            student.studentId === studentId.trim() &&
            student.password === password.trim()
        );

    if (!foundStudent) {

        loginMessage.style.color = "red";

        loginMessage.textContent =
        "Invalid Student ID or Password";

        return;
    }

    if (
        document.getElementById("rememberMe")
        .checked
    ) {

        localStorage.setItem(
            "rememberedStudent",
            studentId
        );

    } else {

        localStorage.removeItem(
            "rememberedStudent"
        );

    }

    localStorage.setItem(
        "currentStudent",
        JSON.stringify(foundStudent)
    );

    loginMessage.style.color = "green";

    loginMessage.textContent =
    "Login Successful. Redirecting...";

    localStorage.setItem('loggedInStudent', studentId)

    setTimeout(() => {

        window.location.href =
        "portal.html";

    }, 1000);

});


