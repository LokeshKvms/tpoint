const questions = {
  python: [
    {
      question: "What is the output of print(2 ** 3)?",
      answers: ["6", "8", "16", "4"],
      correct: 1,
    },
    {
      question: "Which of the following is a Python data type?",
      answers: ["int", "float", "str", "All of the above"],
      correct: 3,
    },
    {
      question: "What does 'self' represent in a class?",
      answers: [
        "The class itself",
        "The instance of the class",
        "A method",
        "A variable",
      ],
      correct: 1,
    },
    {
      question: "Which function is used to get the length of a list?",
      answers: ["len()", "length()", "size()", "count()"],
      correct: 0,
    },
    {
      question: "Which of these is a Python keyword?",
      answers: ["def", "function", "method", "procedure"],
      correct: 0,
    },
  ],
  javascript: [
    {
      question: "Which of the following is a JavaScript data type?",
      answers: ["Number", "String", "Boolean", "All of the above"],
      correct: 3,
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: ["var", "let", "const", "All of the above"],
      correct: 3,
    },
    {
      question: "What is the output of typeof null?",
      answers: ["object", "null", "undefined", "number"],
      correct: 0,
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      answers: ["//", "/* */", "#", "<!-- -->"],
      correct: 0,
    },
    {
      question: "Which function is used to parse a string to integer?",
      answers: ["parseInt()", "int()", "toInteger()", "Number()"],
      correct: 0,
    },
  ],
  html: [
    {
      question: "Which HTML tag is used to display a picture?",
      answers: ["<img>", "<picture>", "<photo>", "<image>"],
      correct: 0,
    },
    {
      question: "What does the <a> tag in HTML do?",
      answers: [
        "Defines an image",
        "Creates a hyperlink",
        "Defines a paragraph",
        "Defines a heading",
      ],
      correct: 1,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      answers: ["<break>", "<br>", "<lb>", "<hr>"],
      correct: 1,
    },
    {
      question: "Which of the following is a valid HTML element?",
      answers: ["<p>", "<paragraph>", "<body>", "<section>"],
      correct: 0,
    },
    {
      question: "Which attribute is used to specify the URL of an image?",
      answers: ["src", "href", "url", "link"],
      correct: 0,
    },
  ],
  css: [
    {
      question: "Which CSS property is used to change the font of text?",
      answers: ["font-family", "font-size", "text-size", "font-style"],
      correct: 0,
    },
    {
      question: "How do you select all the <p> elements in a page using CSS?",
      answers: ["#p", ".p", "p", "div p"],
      correct: 2,
    },
    {
      question:
        "Which of the following is the correct syntax for adding a background color in CSS?",
      answers: [
        "color: blue;",
        "background: blue;",
        "bg-color: blue;",
        "background-color: blue;",
      ],
      correct: 3,
    },
    {
      question: "What does the CSS 'display' property control?",
      answers: [
        "It controls the color of text",
        "It controls the alignment of elements",
        "It specifies the layout of elements",
        "It specifies the font size of elements",
      ],
      correct: 2,
    },
    {
      question:
        "Which CSS property is used to set the space between the elements?",
      answers: ["margin", "padding", "space", "border"],
      correct: 0,
    },
  ],
  react: [
    {
      question:
        "Which of the following is used to create a new React component?",
      answers: [
        "function Component(){}",
        "class Component extends React.Component {}",
        "React.createElement(Component)",
        "All of the above",
      ],
      correct: 1,
    },
    {
      question: "What does JSX stand for?",
      answers: [
        "JavaScript XML",
        "Java Syntax eXtension",
        "JavaScript eXtended",
        "JSON eXtended",
      ],
      correct: 0,
    },
    {
      question: "Which method is used to render a React component?",
      answers: [
        "React.render()",
        "React.createElement()",
        "ReactDOM.render()",
        "React.mount()",
      ],
      correct: 2,
    },
    {
      question:
        "How do you pass data from a parent component to a child component?",
      answers: [
        "Using props",
        "Using state",
        "Using context",
        "Using callbacks",
      ],
      correct: 0,
    },
    {
      question:
        "Which of the following lifecycle methods is called before a component is removed from the DOM?",
      answers: [
        "componentDidMount()",
        "componentWillUnmount()",
        "componentDidUpdate()",
        "render()",
      ],
      correct: 1,
    },
  ],
  nodejs: [
    {
      question: "Which of the following is a popular Node.js web framework?",
      answers: ["Express", "Django", "Flask", "Angular"],
      correct: 0,
    },
    {
      question: "What command is used to initialize a new Node.js project?",
      answers: ["npm install", "npm init", "node init", "npm start"],
      correct: 1,
    },
    {
      question:
        "Which of the following is used to handle asynchronous code in Node.js?",
      answers: ["Callbacks", "Promises", "Async/Await", "All of the above"],
      correct: 3,
    },
    {
      question:
        "Which file is used to define the dependencies of a Node.js project?",
      answers: [
        "package.json",
        "node_modules.json",
        "dependencies.json",
        "package-lock.json",
      ],
      correct: 0,
    },
    {
      question: "How do you run a Node.js script?",
      answers: [
        "node script.js",
        "npm run script.js",
        "npm start",
        "nodejs script.js",
      ],
      correct: 0,
    },
  ],
  django: [
    {
      question: "Which of the following is used to define a model in Django?",
      answers: [
        "models.Model",
        "django.Model",
        "models.Migrate",
        "models.ModelClass",
      ],
      correct: 0,
    },
    {
      question: "Which command is used to create a Django project?",
      answers: [
        "django-admin startproject",
        "django-admin createproject",
        "django start project",
        "django createproject",
      ],
      correct: 0,
    },
    {
      question: "In Django, which file is used to define the URL patterns?",
      answers: ["urls.py", "views.py", "models.py", "settings.py"],
      correct: 0,
    },
    {
      question: "What is the default database engine in Django?",
      answers: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
      correct: 0,
    },
    {
      question: "What does the Django ORM do?",
      answers: [
        "Helps to interact with the database using Python",
        "Provides authentication",
        "Manages templates",
        "Creates static files",
      ],
      correct: 0,
    },
  ],
  selenium: [
    {
      question:
        "Which of the following is a valid command in Selenium for locating an element by its ID?",
      answers: [
        "findElement(By.id())",
        "findElement(By.id='id')",
        "getElementById()",
        "By.id()",
      ],
      correct: 0,
    },
    {
      question: "What language is Selenium WebDriver primarily used with?",
      answers: ["Java", "Python", "Ruby", "All of the above"],
      correct: 3,
    },
    {
      question:
        "Which of the following is used to simulate a click event in Selenium?",
      answers: ["click()", "press()", "sendKeys()", "submit()"],
      correct: 0,
    },
    {
      question: "What is the purpose of WebDriverWait in Selenium?",
      answers: [
        "Waits for an element to be available",
        "Waits for a page to load",
        "Waits for a click to happen",
        "Waits for a form submission",
      ],
      correct: 0,
    },
    {
      question:
        "Which of the following is used to run Selenium tests in parallel?",
      answers: [
        "Selenium Grid",
        "Selenium IDE",
        "Selenium WebDriver",
        "Selenium Remote WebDriver",
      ],
      correct: 0,
    },
  ],
};

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let totalQuestions = 0;
const course =
  new URLSearchParams(window.location.search).get("course") || "python";

function loadQuestion() {
  const question = questions[course][currentQuestionIndex];
  document.getElementById("question-text").textContent = question.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    answersDiv.appendChild(button);
  });
  totalQuestions = questions[course].length;
  updateProgressBar();
}

function checkAnswer(selectedIndex) {
  const question = questions[course][currentQuestionIndex];
  if (selectedIndex === question.correct) {
    score++;
    correctAnswers++;
  } else {
    incorrectAnswers++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    loadQuestion();
  } else {
    showResult();
  }
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
}

function showResult() {
  const questionCard = document.getElementById("question-card");
  questionCard.classList.add("hidden");
  questionCard.style.display = "none";
  document.getElementById("result-summary").style.display = "block";
  document.getElementById("score").textContent = `Your Score: ${score}`;
  document.getElementById(
    "total-questions"
  ).textContent = `Total Questions: ${totalQuestions}`;
  document.getElementById(
    "correct-answers"
  ).textContent = `Correct Answers: ${correctAnswers}`;
  document.getElementById(
    "incorrect-answers"
  ).textContent = `Incorrect Answers: ${incorrectAnswers}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  document.getElementById("result-summary").style.display = "none";
  const questionCard = document.getElementById("question-card");
  questionCard.classList.remove("hidden");
  questionCard.style.display = "block";
  loadQuestion();
}

function goBack() {
  window.location.href = `../choose-page.html?course=${course}`;
}

function goLearn() {
  window.location.href = `../course-pages/course-page.html?course=${course}`;
}

window.onload = function () {
  document.getElementById("course-title").textContent =
    course.charAt(0).toUpperCase() + course.slice(1);
  if (!questions[course]) {
    document.getElementById("question-text").textContent =
      "No questions available for this course.";
    document.getElementById("answers").innerHTML = "";
    return;
  }
  loadQuestion();
};

document.getElementById("user-email").textContent =
  JSON.parse(localStorage.getItem("mail")) || "user@example.com";
$("#profile-icon").on("click", function () {
  const email = $("#user-email").text().trim();
  localStorage.setItem("user-email", email);
  window.location.href = "../profile.html";
});
