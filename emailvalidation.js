
const submit = document.querySelector('.footer-btn-btn');
const input = document.querySelector('#email');
const errorMsg = document.querySelector('.footer-msg-error');
const success =document.querySelector('.success');

const emailValidation = (e) => {
    
    e.preventDefault();
    console.log({ errorMsg });
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const borde =document.querySelector('.footer-btn-input').style.border = "thick solid #e74c3c";
    
    if (input.value == "") {
        errorMsg.innerHTML = "Email address cannot be empty.";
        success.style.display = "none";

    } else if (!validEmail.test(input.value)) {
        errorMsg.innerHTML = "Please enter a valid email address.";
        success.style.display = "none";

    } else {
        errorMsg.innerHTML = "";
        success.innerHTML = "Email sent successfully.";
        success.style.display = "flex";
        const borde = document.querySelector('.footer-btn-input').style.border = "thick solid #2ecc71";

    }
};

submit.addEventListener('click', emailValidation);
