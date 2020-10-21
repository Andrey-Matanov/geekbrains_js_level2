import InputValidation from "../components/InputValidation.js";
import initiateFooter from "../components/footer/footer.js";
import { initiateHeader, renderHeader } from "../components/header/header.js";
import To_top_button from "../components/To_top_button.js";
import { onScrollFunction } from "../scripts/common.js";
import { initiateContactForm } from "../components/contactForm.js";

const initiatePage = () => {
    let top = document.createElement("div");
    top.classList.add("top");
    document.querySelector(".root").appendChild(top);

    initiateHeader();

    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper", "contacts_page__wrapper");
    top.appendChild(wrapper);

    initiateContactForm();

    top.innerHTML += To_top_button();
    onScrollFunction();
    initiateFooter();
};

const renderPage = () => {
    renderHeader();
};

initiatePage();
renderPage();

const nameValidation = new InputValidation("name");
const phoneValidation = new InputValidation("phone");
const emailValidation = new InputValidation("email");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
    const nameValidationResult = nameValidation.validateValue();
    const phoneValidationResult = phoneValidation.validateValue();
    const emailValidationResult = emailValidation.validateValue();
    if (
        !nameValidationResult ||
        !phoneValidationResult ||
        !emailValidationResult
    ) {
        event.preventDefault();
        if (!nameValidationResult) {
            nameValidation.input.classList.add(nameValidation.INPUT_FAILURE);
            nameValidation.label.classList.add(nameValidation.LABEL_ERROR);
        }
        if (!phoneValidationResult) {
            phoneValidation.input.classList.add(phoneValidation.INPUT_FAILURE);
            phoneValidation.label.classList.add(phoneValidation.LABEL_ERROR);
        }
        if (!emailValidationResult) {
            emailValidation.input.classList.add(emailValidation.INPUT_FAILURE);
            emailValidation.label.classList.add(emailValidation.LABEL_ERROR);
        }
    }
});
