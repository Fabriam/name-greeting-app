function greetUser() {
    const name = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");
    const gif = document.getElementById("catGif");

    if (name) {
        const cappedName = name.slice(0, 1).toUpperCase();
        const restOfName = name.slice(1).toLowerCase();
        const finalName = cappedName + restOfName;

        greeting.innerText = `Hello, ${finalName}!`;
        gif.style.display = "block";
    } else {
        greeting.innerText = "You forgot your name! 😩";
        gif.style.display = "none";
    }
}