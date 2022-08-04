let inp_pswd = document.getElementsByName("password");
let c_pswd = document.getElementsByName("c-password");

let pswd = document.getElementById("password")
let cpswd = document.getElementById("c-password");

let error_msg = document.createElement('p');
error_msg.textContent = "Passwords do not match";
error_msg.style.color = "red";
error_msg.style.fontSize = "10px";

let pswd_field = document.querySelector(".pswd");


pswd.addEventListener('input',
    function () {
        areNotMatching();
        areMatching();
    })
cpswd.addEventListener('input',
    function () {
        areNotMatching();
        areMatching();
    })

function areNotMatching() {
    if (inp_pswd[0].value != c_pswd[0].value) {
        pswd.classList.add('error');
        cpswd.classList.add('error');

        pswd_field.appendChild(error_msg);
    }
}
function areMatching() {
    if (inp_pswd[0].value == c_pswd[0].value && (cpswd.classList.contains('error') || pswd.classList.contains('error'))) {
        cpswd.classList.remove('error');
        pswd.classList.remove('error');
        pswd_field.removeChild(error_msg);
    }
}