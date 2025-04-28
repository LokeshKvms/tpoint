document.getElementById("user-email").textContent =
  JSON.parse(localStorage.getItem("mail")) || "user@example.com";

$("#profile-icon").on("click", function () {
  const email = $("#user-email").text().trim();
  localStorage.setItem("user-email", email);
  window.location.href = "profile.html";
});

function getCourseName() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("course");
}

function updatePage() {
  const courseName = getCourseName();
  const courseHeading = document.getElementById("course-name");
  const courseLink = document.getElementById("course-link");
  const quizLink = document.getElementById("quiz-link");

  if (courseName) {
    courseHeading.textContent =
      courseName.charAt(0).toUpperCase() + courseName.slice(1);
    courseLink.setAttribute(
      "href",
      `course-pages/course-page.html?course=${courseName}`
    );
    quizLink.setAttribute(
      "href",
      `course-pages/quiz-page.html?course=${courseName}`
    );
  } else {
    courseHeading.textContent = "Your Technology";
    courseLink.setAttribute("href", `course-pages/course-page.html`);
    quizLink.setAttribute("href", `course-pages/quiz-page.html`);
  }
}

window.onload = updatePage;
