const boardElement = document.querySelector(".board");
const formElement = document.querySelector(".configuration");
const inputBoardSizeElement = document.querySelector("#boardSize");
const inputPixelSizeElement = document.querySelector("#pixelSize");
const colorButtonsContainerElement = document.querySelector(".color-container");
let colorSelected = "grey";

boardElement.addEventListener("click", (event) => {
    const pixelClickedElement = event.target;
    if (pixelClickedElement.classList.contains("board__pixel")) {
        pixelClickedElement.className = "board__pixel";
        pixelClickedElement.classList.add(`board__pixel--${colorSelected}`);
    }
});

const initBoard = function (boardSize = 8, pixelSize = 30) {
    boardElement.textContent = "";
    boardElement.style.gridTemplateColumns = `repeat(${boardSize},1fr)`;
    boardElement.style.gridTemplateRows = `repeat(${boardSize},1fr)`;

    for (let index = 0; index < boardSize * boardSize; index++) {
        const pixelElement = document.createElement("div");
        pixelElement.classList.add("board__pixel");
        pixelElement.style.width = `${pixelSize}px`;
        pixelElement.style.height = `${pixelSize}px`;
        boardElement.append(pixelElement);
    }
};

const initForm = function () {
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        initBoard(inputBoardSizeElement.valueAsNumber, inputPixelSizeElement.valueAsNumber);
        inputBoardSizeElement.value = "";
        inputPixelSizeElement.value = "";
    });
};

const initColors = function () {
    colorButtonsContainerElement.addEventListener("click", (event) => {
        const oldButtonSelectedElement = document.querySelector(".color-container__button--selected");
        if (
            event.target.classList.contains("color-container__button") &&
            !event.target.classList.contains("color-container__button--selected")
        ) {
            oldButtonSelectedElement.classList.remove("color-container__button--selected");
            const buttonElement = event.target;
            colorSelected = buttonElement.dataset.color;

            buttonElement.classList.add("color-container__button--selected");
        }
    });
};

    initBoard();
    initForm();
    initColors();

