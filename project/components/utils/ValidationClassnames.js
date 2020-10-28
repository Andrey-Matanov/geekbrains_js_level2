const INPUT_SUCCESS = "contact_form__input__success";
const INPUT_FAILURE = "contact_form__input__failure";
const returnLabelName = (name) => {
    return `contact_form__label_${name}_error`;
};

export default {
    INPUT_SUCCESS,
    INPUT_FAILURE,
    returnLabelName,
};
