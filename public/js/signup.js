const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (username && email && password) {
      const res = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (res.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.signup-form').addEventListener("submit", signupHandler);