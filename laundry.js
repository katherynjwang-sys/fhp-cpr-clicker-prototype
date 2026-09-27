const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
const resetButton = document.getElementById("reset-checklist");

resetButton.addEventListener("click", function() {
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
});
