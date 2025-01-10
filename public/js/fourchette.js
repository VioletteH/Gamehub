var max = 10; 

var searchedNumber = Math.round(Math.random() * max);

const formElement = document.querySelector("form");
const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("#number");
const indiceElement = document.querySelector("#indice");
const attemptElement = document.querySelector("#attempt");
let attempt = 0;

buttonElement.addEventListener("click", function(event){

    event.preventDefault();
    const enteredNumber = Number(inputElement.value);
    attempt += 1;

    if (isNaN(enteredNumber)) {
        indiceElement.textContent = "Veuillez entrer un nombre valide.";
        indiceElement.classList.remove("hidden");
        return;
    }

    while (enteredNumber !== searchedNumber) {
        if (enteredNumber < searchedNumber) {
            indiceElement.textContent = "C\'est plus";
            attemptElement.textContent = `Nombre de tentatives: ${attempt}`;
        }
        else {
            indiceElement.textContent = "C\'est moins";
            attemptElement.textContent = `Nombre de tentatives: ${attempt}`;
        }
        indiceElement.classList.remove("hidden");
        attemptElement.classList.remove("hidden");
        inputElement.value = "";
        break;
    }
    
    if (enteredNumber === searchedNumber){
        indiceElement.textContent = `Bravo ! C\'était bien ${searchedNumber} et tu as réussi en ${attempt} essai(s)!`;
        setTimeout(() => {
            inputElement.value = "";
            indiceElement.classList.add("hidden");
            attemptElement.classList.add("hidden");
            attempt = 0;
            attemptElement.textContent = `Nombre de tentatives: ${attempt}`;
            buttonElement.disabled = false;
            searchedNumber = Math.round(Math.random() * max); 
            indiceElement.textContent = "Essaye de nouveau !";
            indiceElement.classList.remove("hidden");
        }, 2000); 
    }
})




