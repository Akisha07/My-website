// Highlight active page
let current = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
        link.classList.add("active");
    }
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email!");
        return;
    }

    alert("Message sent successfully!");
});
