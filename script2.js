function handleSubmit(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== "" && password !== "") {
        alert('Welcome Back')
    } else {
        alert('Invalid Credential')
    }

}


document.getElementById('login').addEventListener('submit', handleSubmit)