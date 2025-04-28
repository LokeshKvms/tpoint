$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();

    $.ajax({
      url: "https://sampledev.pythonanywhere.com/api/login_user",
      type: "POST",
      data: JSON.stringify({ email: email, password: password }),
      contentType: "application/json",
      success: function (response) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("mail", JSON.stringify(email));

        var toast = new bootstrap.Toast(document.getElementById("loginToast"));
        toast.show();

        setTimeout(function () {
          window.location.href = "course.html";
        }, 1500);
      },
      error: function (error) {
        console.log(error);
        alert("Invalid credentials. Please try again.");
      },
    });
  });
});
