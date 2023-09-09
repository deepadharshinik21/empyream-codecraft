const quizData = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "London", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    }
    // Add more questions and answers here
];


const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreText = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
    const question = quizData[index];
    questionText.textContent = question.question;

    optionsContainer.innerHTML = "";
    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionText.textContent = "Quiz Complete!";
    optionsContainer.innerHTML = "";
    scoreText.textContent = `Score: ${score}`;

    if (score >= 2) {
        resultContainer.innerHTML = '<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70bcc65284623.5aef51b58b0c9.gif" alt="You Win!">';
    } else {
        resultContainer.innerHTML = '<img src="https://i.gifer.com/TbTg.gif" alt="You Lose!">';
    }

    resultContainer.style.display = "block";
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", startQuiz);

startQuiz(); // Start the quiz when the page loads