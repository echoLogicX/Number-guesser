document.addEventListener("DOMContentLoaded", () => {
    const restartButton = document.getElementById("restartButton");
    const checkButton = document.getElementById("checkButton");
    const feedback = document.getElementById("feedback");
    let rand = Math.floor(Math.random()*100)+1;
    let noOfGuesses = 5;
    let guesses = document.getElementById("guesses");
    const inputField = document.getElementById("guess");
    let flag = false;

    function reset()
    {
        feedback.textContent = "";
        rand = Math.floor(Math.random()*100)+1;
        noOfGuesses = 5;
        guesses.textContent = "";
        inputField.disabled = false;
        checkButton.disabled = false;
        restartButton.style.visibility = "hidden";
    }
    if(noOfGuesses>=0){
    checkButton.addEventListener("click", () => {

        
        if(noOfGuesses>0)
        {
            noOfGuesses-=1;
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
                flag = true;
            }
            if(flag==false && noOfGuesses==0)
            {
                inputField.disabled=true;
                checkButton.disabled=true;
                feedback.textContent="Sorry! you've run out of guesses"
                restartButton.style.visibility = "visible";
            }
        }
    });}
    restartButton.addEventListener("click", () => {
            reset();
    });
});
