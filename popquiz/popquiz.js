```javascript
const questions = document.querySelectorAll('.question');
const resetButton = document.getElementById("reset-quiz");
const result = document.getElementById("result");

function checkQuiz() {
    let answered = 0;
    let score = 0;

    // Question 1: C
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        answered++;

        if (q1.parentElement.textContent.includes("bo bragason")) {
            score++;
        }
    }

    // Question 2: A, B, or C
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2) {
        answered++;

        if (
            q2.parentElement.textContent.includes("yearn") &&
            !q2.parentElement.textContent.includes("not")
        ) {
            score++;
        }
    }

    // Question 3: True
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3) {
        answered++;

        if (q3.parentElement.textContent.trim() === "True") {
            score++;
        }
    }

    // Question 4: True
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4) {
        answered++;

        if (q4.parentElement.textContent.trim() === "True") {
            score++;
        }
    }

    // Question 5: True
    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5) {
        answered++;

        if (q5.parentElement.textContent.trim() === "True") {
            score++;
        }
    }

    // Question 6: Yes
    const q6 = document.querySelector('input[name="q6"]:checked');
    if (q6) {
        answered++;
        score++;
    }

    if (answered === 6) {
        result.textContent = `you scored ${score}/6 😋`;
    } else {
        result.textContent = "";
    }
}

document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener("change", checkQuiz);
});

resetButton.addEventListener("click", function() {
    document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        radio.checked = false;
    });

    result.textContent = "";
});
```
