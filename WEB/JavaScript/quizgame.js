const quizData = [
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language',
            'Home Take Machine Learning',
            'Hyper Tool Markup Language',
            'Hyperlinks and Text Markup Language'],
        answer: 'Hyper Text Markup Language',
    },
    {
        question: 'What does CSS stand for?',
        options: ['Creative Style Sheets',
            'Colorful Style Sheets',
            'Computer Style Sheets',
            'Cascading Style Sheets'],
        answer: 'Cascading Style Sheets',
    },
    {
        question: 'WWhich property is used in CSS to change the background color?',
        options: ['color', 'background-color', 'bgcolor', 'background'],
        answer: 'background-color',
    },
    {
        question: 'Which tag is used to display an image in HTML?',
        options: ['<picture>', '<img>', 'image', '<figure>'],
        answer: '<img>',
    },
    {
        question: 'Which tag is used to define a heading in HTML?',
        options: [
            '<h1>-<h6>',
            '<img>',
            '<heading>',
            '<head>',
        ],
        answer: '<h1>-<h6>',
    },
    {
        question: 'Which property is used to set the font size in CSS?',
        options: ['<font>', '<font-color>', '<font-side>', '<font-size>'],
        answer: 'font-size',
    },
    {
        question: 'Which JavaScript function is used to display an alert message?',
        options: [
            'alert()',
            'confirm()',
            'prompt()',
            'message()',
        ],
        answer: 'alert()',
    },
    {
        question: 'Which HTML tag is used to create a line break?',
        options: ['<br>', '<h1.', '<a>', '<p>'],
        answer: '<br>',
    },
    {
        question: 'Which tag is used to create a table in HTML?',
        options: [
            '<table-row>',
            '<table>',
            '<table-cell>',
            '<table-data>',
        ],
        answer: '<table>',
    },
    {
        question: 'Which HTML tag is used to define a paragraph?',
        options: ['<p>', '<a>', '<br>', '<img>'],
        answer: '<p>',
    },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const questionData = quizData[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestion].answer) {
            score++;
        } else {
            incorrectAnswers.push({
                question: quizData[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: quizData[currentQuestion].answer,
            });
        }
        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
}

function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';

    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
        incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
    }

    resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();