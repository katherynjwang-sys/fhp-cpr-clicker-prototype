const questions = document.querySelectorAll(".question");
const resetButton = document.getElementById("reset-quiz");

const results = document.querySelector(".results");
const scoreText = document.getElementById("score");
const finalMessage = document.getElementById("final-message");

let currentQuestion = 0;
let score = 0;


/* SHOW ONLY ONE QUESTION */

function showQuestion(number) {

    questions.forEach(function(question, index) {

        if (index === number) {
            question.classList.add("active");
        } else {
            question.classList.remove("active");
        }

    });

}


/* ANSWER BUTTONS */

questions.forEach(function(question, questionIndex) {

    const answers = question.querySelectorAll(".answer");
    const feedback = question.querySelector(".feedback");
    const nextButton = question.querySelector(".next-button");

    answers.forEach(function(answer) {

        answer.addEventListener("click", function() {

            /* Stop multiple answers */

            answers.forEach(function(button) {
                button.disabled = true;
            });


            const chosen = answer.dataset.choice;
            const correct = question.dataset.answer;


            /* CORRECT */

            if (correct.includes(chosen)) {

                score++;

                answer.classList.add("correct");

                feedback.textContent = "correct!! 😋";
                feedback.classList.add("correct");

            }


            /* INCORRECT */

            else {

                answer.classList.add("incorrect");

                feedback.textContent = "flop 🧌";
                feedback.classList.add("incorrect");


                /* Highlight correct answer */

                answers.forEach(function(button) {

                    if (correct.includes(button.dataset.choice)) {
                        button.classList.add("correct");
                    }

                });

            }


            /* SHOW NEXT */

            nextButton.style.display = "block";

        });

    });


    /* NEXT BUTTON */

    nextButton.addEventListener("click", function() {

        if (questionIndex < questions.length - 1) {

            currentQuestion++;

            showQuestion(currentQuestion);

        }

        else {

            /* Hide all questions */

            questions.forEach(function(question) {
                question.classList.remove("active");
            });

            /* Show results */

            results.style.display = "block";

            scoreText.textContent = `you scored ${score}/6 😋`;


            if (score === 6) {

                finalMessage.textContent =
                    "you are a certified yearner";

            }

            else if (score >= 4) {

                finalMessage.textContent =
                    "pretty yearnful ngl";

            }

            else {

                finalMessage.textContent =
                    "you have much to learn about yearning";

            }

        }

    });

});


/* RESET QUIZ */

resetButton.addEventListener("click", function() {

    score = 0;
    currentQuestion = 0;


    /* Hide results */

    results.style.display = "none";


    /* Reset every question */

    questions.forEach(function(question) {

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


    /* Go back to question 1 */

    showQuestion(0);

});

