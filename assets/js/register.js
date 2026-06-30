"use strict";

const form = document.getElementById("registerForm");

const fullname = document.getElementById("fullname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const birthday = document.getElementById("birthday");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const fields = [
    fullname,
    username,
    email,
    phone,
    country,
    birthday,
    password,
    confirmPassword
];


// =========================
// Blur Validation
// =========================

fields.forEach(field => {

    field.addEventListener("blur", function () {

        validateField(field);

    });

    field.addEventListener("input", function () {

        validateField(field);

    });

});


// =========================
// Validate One Field
// =========================

function validateField(field){

    const error = field.parentElement.querySelector(".error");

    let value = field.value.trim();

    error.style.display = "none";

    field.classList.remove("input-error");
    field.classList.remove("input-success");


    if(value === ""){

        error.innerText = "Bu xana doldurulmalıdır.";

        error.style.display = "block";

        field.classList.add("input-error");

        return false;

    }


    if(field.id === "email"){

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(value)){

            error.innerText = "Email düzgün deyil.";

            error.style.display = "block";

            field.classList.add("input-error");

            return false;

        }

    }


    if(field.id === "phone"){

        const phoneRegex =
        /^[0-9+\s()-]{10,20}$/;

        if(!phoneRegex.test(value)){

            error.innerText = "Telefon nömrəsi düzgün deyil.";

            error.style.display = "block";

            field.classList.add("input-error");

            return false;

        }

    }


    if(field.id === "password"){

        if(value.length < 8){

            error.innerText = "Şifrə minimum 8 simvol olmalıdır.";

            error.style.display = "block";

            field.classList.add("input-error");

            return false;

        }

        const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

        if(!strongPassword.test(value)){

            error.innerText =
            "Şifrə böyük hərf, kiçik hərf və rəqəm daxil etməlidir.";

            error.style.display = "block";

            field.classList.add("input-error");

            return false;

        }

    }


    if(field.id === "confirmPassword"){

        if(value !== password.value){

            error.innerText = "Şifrələr eyni deyil.";

            error.style.display = "block";

            field.classList.add("input-error");

            return false;

        }

    }


    field.classList.add("input-success");

    return true;

}



// =========================
// Submit
// =========================

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;


    fields.forEach(field=>{

        if(!validateField(field)){

            valid = false;

        }

    });


    const checkboxError =
    document.querySelector(".checkbox-error");

    checkboxError.style.display = "none";


    if(!terms.checked){

        checkboxError.innerText =
        "Şərtləri qəbul etməlisiniz.";

        checkboxError.style.display = "block";

        valid = false;

    }


    if(!valid){

        return;

    }


    const user = {

        fullname: fullname.value.trim(),

        username: username.value.trim(),

        email: email.value.trim(),

        phone: phone.value.trim(),

        country: country.value,

        birthday: birthday.value,

        password: password.value

    };


    console.log(user);


    alert("Qeydiyyat uğurla tamamlandı!");


    form.reset();


    document
    .querySelectorAll(".input-success")
    .forEach(input=>{

        input.classList.remove("input-success");

    });

});