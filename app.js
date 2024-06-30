const number = document.querySelectorAll(".number");

let previousButton = null;

number.forEach((e) => {
    e.addEventListener("click", ()=>handleButtonClick(e));
});

function handleButtonClick(currentButton){
    
    if(previousButton){
        previousButton.style.backgroundColor = "";
        previousButton.style.color = "";
    }

    myFunction(currentButton);

    previousButton = currentButton;
}


function myFunction(number1){

    number1.style.backgroundColor = "White";
    number1.style.color = "black";    
}


