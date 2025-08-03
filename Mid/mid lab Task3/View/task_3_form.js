document.getElementById("donationForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Collect values
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Basic validation
  if (!firstname || !email || !password || !confirmPassword) {
    alert("Please fill out all required fields.");
    return;
  }

  if (password.length < 11) {
    alert("Password must be at least 11 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Thank you for your donation, " + firstname + "!");
});
