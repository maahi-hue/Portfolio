const typed = new Typed(".auto-type", {
  strings: ["web Developer", "Frontend Developer", "Programmer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// Form validation and popup message
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all required fields.");
      return;
    }

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    // Show popup message
    document.getElementById("popup").style.display = "block";

    // Hide popup after 3 seconds
    setTimeout(function () {
      document.getElementById("popup").style.display = "none";
    }, 3000);
  });
