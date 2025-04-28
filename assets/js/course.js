$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() < 560) {
      $("#user-email").hide();
    } else {
      $("#user-email").show();
    }
  });
  $(window).resize();
});

document.getElementById("user-email").textContent =
  JSON.parse(localStorage.getItem("mail")) || "user@example.com";
$("#profile-icon").on("click", function () {
  const email = $("#user-email").text().trim();
  localStorage.setItem("user-email", email);
  window.location.href = "profile.html";
});
