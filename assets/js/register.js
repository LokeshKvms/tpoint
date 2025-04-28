$(document).ready(function () {
  function isEmptyOrWhitespace(str) {
    return !str || str.trim().length === 0;
  }

  function isValidPhone(phone) {
    return /^\d{10}$/.test(phone);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $("#registerForm").submit(function (event) {
    event.preventDefault();

    const data = {
      first_name: $("#first_name").val().trim(),
      last_name: $("#last_name").val().trim(),
      dob: $("#dob").val().trim(),
      phone: $("#phone").val().trim(),
      email: $("#email").val().trim(),
      address: $("#address").val().trim(),
      gender: $("#gender").val().trim().toUpperCase(),
      password: $("#password").val().trim(),
    };

    const confirmPassword = $("#confirm_password").val().trim();

    for (let key in data) {
      if (isEmptyOrWhitespace(data[key])) {
        alert("All fields are required and must not be whitespace.");
        return;
      }
    }

    if (confirmPassword !== data.password) {
      alert("Passwords do not match.");
      return;
    }

    if (!isValidPhone(data.phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (!isValidEmail(data.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!["M", "F"].includes(data.gender)) {
      alert("Gender must be 'M' or 'F'.");
      return;
    }

    $.ajax({
      url: "https://sampledev.pythonanywhere.com/api/students/",
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function (response) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("mail", JSON.stringify(data.email));
        var toast = new bootstrap.Toast(
          document.getElementById("registerToast")
        );
        toast.show();

        setTimeout(function () {
          window.location.href = "course.html";
        }, 1500);
      },
      error: function () {
        alert("Registration failed. Please check your inputs.");
      },
    });
  });
});
