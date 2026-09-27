const questions = document.querySelectorAll(".question");
const results = document.querySelector(".results");
const resetButton = document.getElementById("reset-quiz");
const scoreText = document.getElementById("score");
const finalMessage = document.getElementById("final-message");

let currentQuestion = 0;
let score = 0;

function showQuestion(number) {
    questions.forEach(function(question, index) {
        question.classList.toggle("active", index === number);
    });
}

document.querySelectorAll(".question").forEach(function(question, questionIndex) {

    const answers = question.querySelectorAll(".answer");
    const feedback = question.querySelector(".feedback");
    const nextButton = question.querySelector(".next-button");

    answers.forEach(function(answer) {

        answer.addEventListener("click", function() {

            // Don't allow another answer after one has been chosen
            answers.forEach(function(button) {
                button.disabled = true;
            });

            const chosen = answer.dataset.choice;
            const correct = question.dataset.answer;

            if (correct.includes(chosen)) {

                score++;

                answer.classList.add("correct");

                feedback.textContent = "CORRECT 😋";
                feedback.classList.add("correct");

            } else {

                answer.classList.add("incorrect");

                feedback.textContent = "incorrect 😔";
                feedback.classList.add("incorrect");

                // Show the correct answer
                answers.forEach(function(button) {
                    if (correct.includes(button.dataset.choice)) {
                        button.classList.add("correct");
                    }
                });
            }

            nextButton.style.display = "block";
        });

    });

    nextButton.addEventListener("click", function() {

        if (questionIndex < questions.length - 1) {

            currentQuestion++;
            showQuestion(currentQuestion);

        } else {

            questions.forEach(function(question) {
                question.style.display = "none";
            });

            results.style.display = "block";

            scoreText.textContent = `you scored ${score}/6 😋`;

            if (score === 6) {
                finalMessage.textContent = "you are a certified yearner";
            } else if (score >= 4) {
                finalMessage.textContent = "pretty yearnful ngl";
            } else {
                finalMessage.textContent = "you have much to learn about yearning";
            }
        }

    });

});

resetButton.addEventListener("click", function() {

    // Reset score and question number
    score = 0;
    currentQuestion = 0;

    // Reset every question
    questions.forEach(function(question) {

        question.style.display = "";

        const answers = question.querySelectorAll(".answer");
        const feedback = question.querySelector(".feedback");
        const nextButton = question.querySelector(".next-button");

        answers.forEach(function(button) {
            button.disabled = false;
            button.classList.remove("correct");
            button.classList.remove("incorrect");
        });

        feedback.textContent = "";
        feedback.classList.remove("correct");
        feedback.classList.remove("incorrect");

        nextButton.style.display = "none";
    });

    // Hide results
    results.style.display = "none";

    // Go back to question 1
    showQuestion(0);
});

