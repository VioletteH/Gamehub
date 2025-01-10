const divPlayerElement = document.querySelector("#player"); 
const divDealerElement = document.querySelector("#dealer"); 

const min = 1;
const max = 6;

const getRandomNumber = function(){
    return Math.round(Math.random() * (max - min)+ min);
};

getRandomNumber();

const diceNumberFormElement = document.querySelector("#dice-form");
const diceNumberInput = document.querySelector("#dice-form-input")
const gameBoardElement = document.querySelector(".game-board")

diceNumberFormElement.addEventListener("submit", function(event){
  event.preventDefault();
  gameBoardElement.classList.remove("hidden");
  play();
})

const diceGenerator = function(divElement){

    const divDiceElement = document.createElement("div"); 
    divDiceElement.classList.add("dice"); 
    divElement.append(divDiceElement); 

    let randomNumber = getRandomNumber();

    if(randomNumber === 1){
        divDiceElement.style.backgroundPosition = "0px";
    }
    else if(randomNumber === 2){
        divDiceElement.style.backgroundPosition = "-100px"; 
    }
    else if(randomNumber === 3){
        divDiceElement.style.backgroundPosition = "-200px";
    }
    else if(randomNumber === 4){
        divDiceElement.style.backgroundPosition = "-300px";
    }
    else if(randomNumber === 5){
        divDiceElement.style.backgroundPosition = "-400px";
    }
    else{
        divDiceElement.style.backgroundPosition = "-500px";
    };

};

const play = function(){
    let diceNumber = Number(diceNumberInput.value);
    divPlayerElement.innerHTML = '';
    divDealerElement.innerHTML = '';
    for(let i = 1; i <= diceNumber; i++){
        diceGenerator(divPlayerElement);
        diceGenerator(divDealerElement);
    };
};