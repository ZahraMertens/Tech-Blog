const emailInput = document.querySelector(".login-email").value.trim();
const passwordInput = document.querySelector(".login-password").value.trim();
const loginBtn = document.querySelector(".login-btn")

const loginHandler = async (event) => {
    event.preventDefault();

    if (emailInput && passwordInput){
        const res = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({emailInput, passwordInput}),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(res)
        
        if(res.ok){
            document.location.replace("/")
        } else {
            alert(res.statusText)
        }
    }
}

loginBtn.addEventListener("submit", loginHandler);