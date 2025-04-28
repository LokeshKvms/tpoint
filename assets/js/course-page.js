if (!localStorage.getItem("token")) {
  window.location.href = "../login.html";
}

const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get("course");

const coursesData = {
  python: {
    title: "Python Tutorial",
    topics: [
      {
        topic: "Introduction to Python",
        description: "An overview of Python basics.",
        videoLink: "https://www.youtube.com/embed/K5KVEU3aaeQ",
      },
      {
        topic: "Data Types",
        description: "Understanding Python data types and variables.",
        videoLink:
          "https://www.youtube.com/embed/ppsCxnNm-JI?si=kBPmga7bDJPwFfnO",
      },
      {
        topic: "Control Flow",
        description: "Learn how to use if-else statements, loops, etc.",
        videoLink:
          "https://www.youtube.com/embed/zgX2eza08I4?si=Z05jDi_dkpo6gwuu",
      },
      {
        topic: "Functions",
        description: "Understanding how to define and use functions.",
        videoLink:
          "https://www.youtube.com/embed/zvzjaqMBEso?si=xVlvS-lO17dx_4AB",
      },
      {
        topic: "Modules and Packages",
        description: "How to organize code into modules and packages.",
        videoLink:
          "https://www.youtube.com/embed/GUXxLy68EF8?si=-ZpKU02UyotyZ-Y4",
      },
      {
        topic: "File Handling",
        description: "Working with files in Python (read, write, etc.).",
        videoLink: "https://www.youtube.com/embed/eWRfhZUzrAk",
      },
      {
        topic: "Object-Oriented Programming",
        description: "Learn the basics of OOP in Python.",
        videoLink: "https://www.youtube.com/embed/9Os0o3wzS_I",
      },
      {
        topic: "Error Handling",
        description: "Understanding try-except blocks in Python.",
        videoLink: "https://www.youtube.com/embed/NIq3qLaHCIs",
      },
      {
        topic: "List Comprehensions",
        description: "How to use list comprehensions in Python.",
        videoLink: "https://www.youtube.com/embed/2Fp0hYHL2r4",
      },
      {
        topic: "Libraries and Frameworks",
        description: "Introduction to popular Python libraries.",
        videoLink: "https://www.youtube.com/embed/29QtoVt2Vj8",
      },
    ],
  },
  selenium: {
    title: "Selenium Python Tutorial",
    topics: [
      {
        topic: "Introduction to Selenium",
        description: "Understanding Selenium WebDriver.",
        videoLink: "https://www.youtube.com/embed/wE7ET9Tcx7E",
      },
      {
        topic: "Locators",
        description: "Using locators in Selenium to interact with elements.",
        videoLink: "https://www.youtube.com/embed/j9JQz6guV1Q",
      },
      {
        topic: "Handling Alerts",
        description: "Working with JavaScript alerts and popups.",
        videoLink: "https://www.youtube.com/embed/74TiUklm4Ec",
      },
      {
        topic: "Handling Dropdowns",
        description: "How to handle dropdowns in Selenium.",
        videoLink: "https://www.youtube.com/embed/56tt7k4M7VQ",
      },
      {
        topic: "Actions Class",
        description: "Using Actions class for complex user interactions.",
        videoLink: "https://www.youtube.com/embed/QlPyDgZVdCk",
      },
      {
        topic: "WebDriver Waits",
        description: "Using explicit and implicit waits in Selenium.",
        videoLink: "https://www.youtube.com/embed/9Ancyw6B5fg",
      },
      {
        topic: "Working with Frames",
        description: "Handling frames in Selenium WebDriver.",
        videoLink: "https://www.youtube.com/embed/ByToRG0rC-U",
      },
      {
        topic: "Page Object Model",
        description: "Implementing the Page Object Model in Selenium.",
        videoLink: "https://www.youtube.com/embed/Bs9T1wvvzGU",
      },
      {
        topic: "Test Automation Framework",
        description: "Creating a test automation framework with Selenium.",
        videoLink: "https://www.youtube.com/embed/3GmOQe10Hzo",
      },
      {
        topic: "Selenium Grid",
        description: "Setting up and using Selenium Grid.",
        videoLink: "https://www.youtube.com/embed/jmKzbmIgQ3k",
      },
    ],
  },
  html: {
    title: "HTML Tutorial",
    topics: [
      {
        topic: "Introduction to HTML",
        description: "Basics of HTML structure.",
        videoLink: "https://www.youtube.com/embed/pQN-pnL0R5M",
      },
      {
        topic: "HTML Elements",
        description: "Understanding HTML elements.",
        videoLink: "https://www.youtube.com/embed/TdS0u7Hg3os",
      },
      {
        topic: "HTML Forms",
        description: "Creating forms in HTML.",
        videoLink: "https://www.youtube.com/embed/vmHZI00VQU4",
      },
      {
        topic: "HTML Tables",
        description: "Learn how to create and style tables in HTML.",
        videoLink: "https://www.youtube.com/embed/Kx_MFvS-Tk4",
      },
      {
        topic: "HTML Images",
        description: "Adding images and understanding image attributes.",
        videoLink: "https://www.youtube.com/embed/Z5OZ74g61-M",
      },
      {
        topic: "HTML Lists",
        description: "Working with unordered and ordered lists.",
        videoLink: "https://www.youtube.com/embed/jqMoq1w73h4",
      },
      {
        topic: "HTML Audio and Video",
        description: "Embedding audio and video in HTML.",
        videoLink: "https://www.youtube.com/embed/LKT4-2XKdfE",
      },
      {
        topic: "HTML Semantics",
        description: "Understanding semantic HTML elements.",
        videoLink: "https://www.youtube.com/embed/cY2yxlLMq70",
      },
      {
        topic: "HTML Forms Validation",
        description: "Adding client-side form validation.",
        videoLink: "https://www.youtube.com/embed/WkqLg2Eqo7s",
      },
      {
        topic: "HTML5 Features",
        description: "Exploring new features in HTML5.",
        videoLink: "https://www.youtube.com/embed/qWm2u2bxH9w",
      },
    ],
  },
  css: {
    title: "CSS Tutorial",
    topics: [
      {
        topic: "Introduction to CSS",
        description: "Basics of CSS styling.",
        videoLink:
          "https://www.youtube.com/embed/-G-zic_LS0A?si=ot0OWnLGTjHaaA5u",
      },
      {
        topic: "Selectors",
        description: "Understanding CSS selectors.",
        videoLink:
          "https://www.youtube.com/embed/-G-zic_LS0A?si=ot0OWnLGTjHaaA5u",
      },
      {
        topic: "Box Model",
        description: "Understanding the CSS box model.",
        videoLink:
          "https://www.youtube.com/embed/G3e-cpL7ofc?si=KFf2rHYHUOM2DFYa",
      },
      {
        topic: "CSS Flexbox",
        description: "Learn how to use Flexbox in CSS.",
        videoLink:
          "https://www.youtube.com/embed/-G-zic_LS0A?si=ot0OWnLGTjHaaA5u",
      },
      {
        topic: "CSS Grid",
        description: "Understanding CSS Grid layout.",
        videoLink:
          "https://www.youtube.com/embed/G3e-cpL7ofc?si=KFf2rHYHUOM2DFYa",
      },
      {
        topic: "CSS Animations",
        description: "Creating animations in CSS.",
        videoLink:
          "https://www.youtube.com/embed/-G-zic_LS0A?si=ot0OWnLGTjHaaA5u",
      },
      {
        topic: "CSS Transitions",
        description: "How to use CSS transitions.",
        videoLink:
          "https://www.youtube.com/embed/-G-zic_LS0A?si=ot0OWnLGTjHaaA5u",
      },
      {
        topic: "Responsive Web Design",
        description: "Making websites responsive with CSS.",
        videoLink:
          "https://www.youtube.com/embed/-G-zic_LS0A?si=ot0OWnLGTjHaaA5u",
      },
      {
        topic: "CSS Variables",
        description: "Using CSS variables to simplify styling.",
        videoLink:
          "https://www.youtube.com/embed/G3e-cpL7ofc?si=KFf2rHYHUOM2DFYa",
      },
      {
        topic: "CSS Typography",
        description: "Working with text styling in CSS.",
        videoLink:
          "https://www.youtube.com/embed/G3e-cpL7ofc?si=KFf2rHYHUOM2DFYa",
      },
    ],
  },
  javascript: {
    title: "JavaScript Tutorial",
    topics: [
      {
        topic: "Introduction to JavaScript",
        description: "Basics of JavaScript.",
        videoLink:
          "https://www.youtube.com/embed/iWOYAxlnaww?si=zU1bj4KznvrPMi3w",
      },
      {
        topic: "Variables & Functions",
        description: "Understanding variables and functions.",
        videoLink:
          "https://www.youtube.com/embed/FhguwBJeqWs?si=RUNL3ZIdf2sSz3Bu",
      },
      {
        topic: "DOM Manipulation",
        description: "How to interact with the DOM.",
        videoLink:
          "https://www.youtube.com/embed/JloLGV9DmtQ?si=uLvFTKg8U8jaKKfa",
      },
      {
        topic: "Events in JavaScript",
        description: "Handling events like clicks and keypresses.",
        videoLink:
          "https://www.youtube.com/embed/JloLGV9DmtQ?si=uLvFTKg8U8jaKKfa",
      },
      {
        topic: "Array Methods",
        description: "Learn array methods like map, filter, and reduce.",
        videoLink:
          "https://www.youtube.com/embed/JloLGV9DmtQ?si=uLvFTKg8U8jaKKfa",
      },
      {
        topic: "Object-Oriented Programming",
        description: "Learn OOP concepts in JavaScript.",
        videoLink:
          "https://www.youtube.com/embed/JloLGV9DmtQ?si=uLvFTKg8U8jaKKfa",
      },
      {
        topic: "Asynchronous JavaScript",
        description: "Working with promises and async/await.",
        videoLink:
          "https://www.youtube.com/embed/JloLGV9DmtQ?si=uLvFTKg8U8jaKKfa",
      },
      {
        topic: "JavaScript Closures",
        description: "Understanding closures in JavaScript.",
        videoLink:
          "https://www.youtube.com/embed/JloLGV9DmtQ?si=uLvFTKg8U8jaKKfa",
      },
      {
        topic: "JavaScript ES6 Features",
        description: "Introduction to ES6 features like arrow functions.",
        videoLink:
          "https://www.youtube.com/embed/JloLGV9DmtQ?si=uLvFTKg8U8jaKKfa",
      },
      {
        topic: "JavaScript Modules",
        description: "Understanding modules and imports/exports.",
        videoLink:
          "https://www.youtube.com/embed/JloLGV9DmtQ?si=uLvFTKg8U8jaKKfa",
      },
    ],
  },
  react: {
    title: "React Tutorial",
    topics: [
      {
        topic: "Introduction to React",
        description: "Basics of React framework.",
        videoLink: "https://www.youtube.com/embed/Ke90Tje7VS0",
      },
      {
        topic: "Components",
        description: "Creating React components.",
        videoLink: "https://www.youtube.com/embed/DKk9XlXGmFY",
      },
      {
        topic: "Props & State",
        description: "Understanding props and state in React.",
        videoLink: "https://www.youtube.com/embed/DPnL4oL2K3g",
      },
      {
        topic: "React Hooks",
        description: "Introduction to React hooks.",
        videoLink: "https://www.youtube.com/embed/lqg20m9tQDU",
      },
      {
        topic: "React Router",
        description: "Handling routing in React applications.",
        videoLink: "https://www.youtube.com/embed/ftdFS1xugkY",
      },
      {
        topic: "State Management with Redux",
        description: "Managing global state with Redux.",
        videoLink: "https://www.youtube.com/embed/4DgtPEXM8f0",
      },
      {
        topic: "Form Handling in React",
        description: "Working with forms in React.",
        videoLink: "https://www.youtube.com/embed/gDjrWx2VYf8",
      },
      {
        topic: "React Context API",
        description: "Using React Context for state management.",
        videoLink: "https://www.youtube.com/embed/mXbGHdAF8gI",
      },
      {
        topic: "React Lifecycle Methods",
        description: "Understanding React component lifecycle.",
        videoLink: "https://www.youtube.com/embed/Y3qzz-sGGHk",
      },
      {
        topic: "Testing React Components",
        description: "How to test React components.",
        videoLink: "https://www.youtube.com/embed/4HQX_kHRWRM",
      },
    ],
  },
  nodejs: {
    title: "Node.js Tutorial",
    topics: [
      {
        topic: "Introduction to Node.js",
        description: "Basics of Node.js.",
        videoLink: "https://www.youtube.com/embed/tlB_eWDSMt4",
      },
      {
        topic: "Modules",
        description: "Using modules in Node.js.",
        videoLink: "https://www.youtube.com/embed/Kzj23Ml1HaM",
      },
      {
        topic: "Express.js Basics",
        description: "Understanding Express.js for backend development.",
        videoLink: "https://www.youtube.com/embed/L6gkEM5AhIo",
      },
      {
        topic: "Node.js File System",
        description: "Working with the file system in Node.js.",
        videoLink: "https://www.youtube.com/embed/-b_eYk3mvV0",
      },
      {
        topic: "Async Programming",
        description: "Understanding async programming in Node.js.",
        videoLink: "https://www.youtube.com/embed/O5CtdT8NQ6g",
      },
      {
        topic: "Creating REST APIs",
        description: "Building REST APIs with Express.js.",
        videoLink: "https://www.youtube.com/embed/ftv7sdy9Bhg",
      },
      {
        topic: "Node.js Debugging",
        description: "Debugging Node.js applications.",
        videoLink: "https://www.youtube.com/embed/-H3rlLsWm0Y",
      },
      {
        topic: "Node.js Event Loop",
        description: "Understanding the event loop in Node.js.",
        videoLink: "https://www.youtube.com/embed/-vryq39jDJY",
      },
      {
        topic: "Error Handling in Node.js",
        description: "Managing errors in Node.js.",
        videoLink: "https://www.youtube.com/embed/t8M1V6MHLyE",
      },
      {
        topic: "Node.js Performance Optimization",
        description: "Optimizing the performance of Node.js applications.",
        videoLink: "https://www.youtube.com/embed/omS3rkeZlJ4",
      },
    ],
  },
  django: {
    title: "Django Tutorial",
    topics: [
      {
        topic: "Introduction to Django",
        description: "Basics of Django framework.",
        videoLink: "https://www.youtube.com/embed/3wKbhGuXI7M",
      },
      {
        topic: "Models",
        description: "Working with models in Django.",
        videoLink: "https://www.youtube.com/embed/Db5v0rYTxrg",
      },
      {
        topic: "Views & Templates",
        description: "Creating views and templates in Django.",
        videoLink: "https://www.youtube.com/embed/B6b4zMxlQ74",
      },
      {
        topic: "Django ORM",
        description: "Using Django's Object-Relational Mapping.",
        videoLink: "https://www.youtube.com/embed/h4vLJ7-k2Po",
      },
      {
        topic: "Django Forms",
        description: "Creating and handling forms in Django.",
        videoLink: "https://www.youtube.com/embed/y_hfdEnVgZY",
      },
      {
        topic: "Django Authentication",
        description: "Handling user authentication in Django.",
        videoLink: "https://www.youtube.com/embed/ZgN7hjZctik",
      },
      {
        topic: "Django Admin",
        description: "Using the Django Admin interface.",
        videoLink: "https://www.youtube.com/embed/Ci7T67T5nOs",
      },
      {
        topic: "Django REST Framework",
        description: "Building APIs with Django REST Framework.",
        videoLink: "https://www.youtube.com/embed/ZT3G5XrVdgc",
      },
      {
        topic: "Django Testing",
        description: "Writing tests for Django applications.",
        videoLink: "https://www.youtube.com/embed/kDix6hW2CU8",
      },
      {
        topic: "Django Deployment",
        description: "Deploying Django applications.",
        videoLink: "https://www.youtube.com/embed/8ZprTxLUFPY",
      },
    ],
  },
};

$("#profile-icon").on("click", function () {
  const email = $("#user-email").text().trim();
  localStorage.setItem("user-email", email);
  window.location.href = "../profile.html";
});

function renderCourseData(courseData) {
  document.getElementById("course-title").innerText = courseData.title;

  let tableBody = document.getElementById("course-table-body");
  tableBody.innerHTML = "";

  courseData.topics.forEach((item, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.topic}</td>
                <td>${item.description}</td>
                <td><a href="/video-pages/video.html?video=${encodeURIComponent(
                  item.videoLink
                )}&topic=${encodeURIComponent(
      item.topic
    )}" class="btn btn-sm btn-outline-success">Watch <i class="fas fa-play-circle"></i></a></td>
            `;
    tableBody.appendChild(row);
  });

  $("#course-table").DataTable({
    paging: true,
    searching: true,
    ordering: true,
    info: true,
    bLengthChange: false,
    pageLength: 5,
  });
}

if (course && coursesData[course]) {
  renderCourseData(coursesData[course]);
} else {
  document.getElementById("course-title").innerText = "Course not found";
}
function goTest() {
  window.location.href = `../course-pages/quiz-page.html?course=${course}`;
}
document.getElementById("user-email").textContent =
  JSON.parse(localStorage.getItem("mail")) || "user@example.com";
