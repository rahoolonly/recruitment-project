function handleSubmit(e) {
    e.preventDefault();
    console.log("hello rahool");
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username !== "" && email !== "" && password !== "") {
        alert(`Congratulations ${username}, Registered Successfully`)
    } else {
        alert('fill all details')
    }
}

document.getElementById('registrationFrom').addEventListener('submit', handleSubmit);