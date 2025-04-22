$(document).ready(function () {
  // Login API
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    $.ajax({
      url: "https://sampledev.pythonanywhere.com/api/login_user",
      method: "POST",
      data: JSON.stringify({ email, password }),
      contentType: "application/json",
      success: function (response) {
        if (response.success) {
          localStorage.setItem("token", response.token);
          window.location.href = "dashboard.html";
        } else {
          alert("Invalid credentials");
        }
      },
    });
  });

  // Register API
  $("#registerForm").submit(function (e) {
    e.preventDefault();
    const first_name = $("#first_name").val();
    const last_name = $("#last_name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    $.ajax({
      url: "https://sampledev.pythonanywhere.com/api/students/",
      method: "POST",
      data: JSON.stringify({ first_name, last_name, email, password }),
      contentType: "application/json",
      success: function (response) {
        if (response.token) {
          localStorage.setItem("token", response.token);
          window.location.href = "dashboard.html";
        }
      },
    });
  });

  // Dashboard: Display User Info
  const token = localStorage.getItem("token");
  if (token) {
    // Fetch user info from token if necessary
    $("#user-name").text("John Doe"); // hardcoded for demo
    $("#user-email").text("john.doe@example.com"); // hardcoded for demo
  } else {
    window.location.href = "index.html"; // Redirect to login if not logged in
  }

  // Load Course Page
  window.loadCourse = function (course) {
    if (course === "python") {
      window.location.href = "python-course.html";
    }
    // Add conditions for other courses like java, c...
  };
});
