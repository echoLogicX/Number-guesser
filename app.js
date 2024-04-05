document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById("checkButton");
    const feedback = document.getElementById("feedback");
    checkButton.addEventListener("click", () => {
        const inputField = document.getElementById("guess");
        let inputVal = inputField.value;
        let rand = Math.floor(Math.random()*100)+1;
        if(inputVal<rand)
        {
            feedback.textContent = "Guess too low";
        }
        else if(inputVal>rand)
        {
            feedback.textContent = "Guess too high";
        }
        else
            feedback.textContent = "Yay! you guessed it right!";
    });
});