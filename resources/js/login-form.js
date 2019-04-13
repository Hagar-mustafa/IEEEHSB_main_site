if (document.getElementById('form') && document.getElementById('email') && document.getElementById('password')) {
    let form = document.getElementById('form'),
        email = document.getElementById('email'),
        name = document.getElementById('name'),
        pass = document.getElementById('password'),
        re_password = document.getElementById('re_password');

    email.addEventListener('keyup', function () {
        email.previousElementSibling.classList.add("active", "highlight");
        if (email.value == '') {
            email.previousElementSibling.classList.remove("active", "highlight");
        }
    });

    pass.addEventListener('keyup', function () {
        pass.previousElementSibling.classList.add("active", "highlight");
        if (pass.value == '') {
            pass.previousElementSibling.classList.remove("active", "highlight");
        }
    });
    name.addEventListener('keyup', function () {
        name.previousElementSibling.classList.add("active", "highlight");
        if (name.value == '') {
            name.previousElementSibling.classList.remove("active", "highlight");
        }
    });
    re_password.addEventListener('keyup', function () {
        re_password.previousElementSibling.classList.add("active", "highlight");
        if (re_password.value == '') {
            re_password.previousElementSibling.classList.remove("active", "highlight");
        }
    });

}
