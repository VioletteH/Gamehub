// fonction utilitaire
export const createErrorMessage = function (message, container) {
    //  message d'erreur
    const messageElement = document.createElement("small");
    messageElement.textContent = message;
    messageElement.classList.add("error-message");
    container.append(messageElement);
};

export const deleteErrorMessage = function (container) {
    const oldMessage = container.querySelector(".error-message");
    // si j'ai un ancien message d'erreur je le supprime avant d'en créer un nouveau
    if (oldMessage) {
        oldMessage.remove();
    }
};

export const tutu = "salut";