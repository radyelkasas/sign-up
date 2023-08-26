let email = document.getElementById('email');
let erorrEmail = document.getElementById('erorr');
let form = document.querySelector('form');
let emailSub = document.getElementById('sub-email')


form.addEventListener('submit', (e)=> {
    let emailValid = false;

    if(email.value.length >= 6 && email.value.includes("@")){
        emailValid = true
        localStorage.setItem('email', email.value)
        window.location.href = 'Thank.html'
    }

    if(emailValid === false){
        e.preventDefault();
        email.style.border = '1px solid red'
        erorrEmail.innerHTML = 'Please enter a correct Email'
    }

})



console.log(localStorage)

