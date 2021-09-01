const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#login-email").value.trim();
    const password = document.querySelector("#login-password").value.trim();
    
    if (email && password){
        const res = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log("success")

        if(res.ok){
            document.location.replace("/")
        } else {
            alert(res.error)
        }
    }
}

document.querySelector('.login-form').addEventListener("submit", loginHandler);