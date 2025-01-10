const invaderGridElement = document.querySelector("#invader-grid");
const formElement = document.querySelector("#configuration-form");
const gridSizeElement = document.querySelector("#gridSize");
const pixelSizeElement = document.querySelector("#pixelSize");
const colorContainerElement = document.querySelector(".color-container");
const colorsElements = document.querySelectorAll(".color");

let selectedColor = "white";

const formListener = function(){
    formElement.addEventListener("submit", function (event) {
        event.preventDefault();
        generateGrid(gridSizeElement.value, pixelSizeElement.value);
        gridSizeElement.value = "";
        pixelSizeElement.value = "";
    });
}

const generateGrid = function(gridSizeValue = 10, pixelSizeValue = 30) {
    invaderGridElement.innerHTML = "";
    invaderGridElement.style.gridTemplateColumns = `repeat(${gridSizeValue}, ${pixelSizeValue}px)`;
    invaderGridElement.style.gridTemplateRows = `repeat(${gridSizeValue}, ${pixelSizeValue}px)`;

    for (let i = 0; i < gridSizeValue * gridSizeValue; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = `${pixelSizeValue}px`;
        pixel.style.height = `${pixelSizeValue}px`;
        invaderGridElement.append(pixel);
    }
}

const colorPicker = function(){
    colorContainerElement.addEventListener("click", function(event){
        const oldColor = document.querySelector(".selected");
        if (
            event.target.classList.contains("color") &&
            !event.target.classList.contains("selected")
        ) {
            oldColor.classList.remove("selected");
            selectedColor = event.target.dataset.color;
            event.target.classList.add("selected");
        }
    });
}

const pixelColor = function(){
    invaderGridElement.addEventListener("click", function(event){
        if (event.target.classList.contains("pixel")) {
            event.target.style.backgroundColor = selectedColor; 
        }
    })
}

generateGrid();
formListener();
colorPicker();
pixelColor();








