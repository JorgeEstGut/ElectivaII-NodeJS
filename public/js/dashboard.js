document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/user");
    const data = await response.json();

    if (data.username) {
        document.getElementById("username").textContent = data.username;
    } else {
        window.location.href = "/login";
    }
});
