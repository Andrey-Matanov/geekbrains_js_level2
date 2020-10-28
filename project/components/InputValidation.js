class InputValidation {
    constructor(name) {
        this.name = name;
        this.input = document.getElementById(name);
        this.label = document.getElementById(`${this.name}_label`);
        this.INPUT_SUCCESS = "contact_form__input__success";
        this.INPUT_FAILURE = "contact_form__input__failure";
        this.LABEL_ERROR = `contact_form__label_${name}_error`;

        this.addInputEventListener();
    }

    validateValue = () => {
        const value = this.input.value;
        switch (this.name) {
            case "name": {
                return value.length > 0 && /^[a-zа-яё]+$/i.test(value);
            }
            case "phone": {
                return (
                    value.length > 0 && /^\+7\(\d{3}\)\d{3}\-\d{4}$/.test(value)
                );
            }
            case "email": {
                return (
                    value.length > 0 &&
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                        value
                    )
                );
            }
        }
    };

    checkInput = () => {
        const validation = this.validateValue();
        if (validation) {
            this.input.classList.add(this.INPUT_SUCCESS);
            this.input.classList.remove(this.INPUT_FAILURE);
            this.label.classList.remove(this.LABEL_ERROR);
        } else {
            this.input.classList.add(this.INPUT_FAILURE);
            this.input.classList.remove(this.INPUT_SUCCESS);
            this.label.classList.add(this.LABEL_ERROR);
        }
    };

    addInputEventListener = () => {
        this.input.addEventListener("change", this.checkInput);
    };
}

export default InputValidation;
