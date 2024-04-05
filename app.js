document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById("checkButton");
    const feedback = document.getElementById("feedback");
    let rand = Math.floor(Math.random()*100)+1;
    let noOfGuesses = 5;
    let guesses = document.getElementById("guesses");

    function reset()
    {
        feedback.textContent = "";
        rand = Math.floor(Math.random()*100)+1;
        noOfGuesses = 5;
        guesses.textContent = "";
    }
    checkButton.addEventListener("click", () => {
        const inputField = document.getElementById("guess");
        if(noOfGuesses>0)
        {
            let inputVal = inputField.value;
    
            if(inputVal<rand)
            {
                feedback.textContent = "Guess too low";
                guesses.textContent += (" " + inputVal);
            }
            else if(inputVal>rand)
            {
                feedback.textContent = "Guess too high";
                guesses.textContent += (" " + inputVal);
            }
            else
            {
                feedback.textContent = "Yay! you guessed it right!";
                reset();
            }
            noOfGuesses-=1;
        }
        else
        {
            feedback.textContent = "Sorry! you've ran out of guesses"
        
        }
    });
});