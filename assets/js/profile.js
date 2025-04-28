$(document).ready(async function () {
  const email = localStorage.getItem("user-email");

  if (email) {
    const studentData = await getStudentByEmail(email);
    if (studentData) {
      populateForm(studentData);
    }
  } else {
    console.error("No email found in localStorage");
  }
});

async function getStudentByEmail(email) {
  const response = await fetch(
    "https://sampledev.pythonanywhere.com/api/students/"
  );
  const students = await response.json();

  const student = students.find((s) => s.email === email);

  if (!student) {
    console.error("Student not found");
    return null;
  }

  const { id, token, ...studentData } = student;
  return studentData;
}

function populateForm(data) {
  $.each(data, function (key, value) {
    $(`[name="${key}"]`).val(value);
  });
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
