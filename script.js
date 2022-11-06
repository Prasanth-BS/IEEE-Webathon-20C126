const visibilityToggle = document.querySelector(".visibility");
const input = document.querySelector(".input-passwd input");
var password = true;

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

visibilityToggle.addEventListener("click", function () {
    if (password) {
        input.setAttribute("type", "text");
        visibilityToggle.innerHTML = "visibility";
    } else {
        input.setAttribute("type", "password");
        visibilityToggle.innerHTML = "visibility_off";
    }
    password = !password;
});

const id__signIn = document.getElementById('id__sign-in')
const id__signUp = document.getElementById('id__sign-up')

const error__signIn = document.getElementById('error__sign-in')
const error__signUp = document.getElementById('error__sign-up')

const signIn__userName = document.querySelector('.sign-up-form > .input')


id__signIn.addEventListener('click', e => {
    console.log(id__signIn.value)
    if(id__signIn.value == "")
        error__signIn.innerHTML = "Email id is required"
})

