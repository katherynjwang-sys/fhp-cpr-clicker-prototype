let compressions = 0;

const person = document.getElementById("person");
const count = document.getElementById("count");
const message = document.getElementById("message");
const reset = document.getElementById("reset");

person.addEventListener("click", function() {

    compressions++;

    count.textContent = compressions;

    if (compressions === 1) {
        message.textContent = "startin off strong :P";
    }

    if (compressions === 10) {
        message.textContent = "ur doing amazing sweetie!";
    }

    if (compressions === 30) {
        message.textContent = "30 compressions = one cycle!!";
    }

    if (compressions === 60) {
        message.textContent = "wow ur a cpr whiz!";
    }
});

reset.addEventListener("click", function() {

    compressions = 0;

    count.textContent = compressions;

    message.textContent = "start alreadyuhhh";
});
