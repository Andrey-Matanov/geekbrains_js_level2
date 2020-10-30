import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const app = new Vue({
    el: ".root",
    components: {
        "shop-header": Header,
        "shop-footer": Footer,
    },
    template: `
    <div class="root">
        <div class="top">
            <shop-header></shop-header>
            <div class="wrapper contacts_page__wrapper">
                <form class="contact_form" action="contacts.html">
                    <h2 class="contact_form__heading heading">
                        Форма обратной связи
                    </h2>
                    <label
                        class="contact_form__label"
                        for="name"
                        id="name_label"
                        v-bind:class="{contact_form__label_name_error: isErrorInName }"
                        >Имя*:</label
                    >
                    <input
                        class="contact_form__input"
                        type="text"
                        placeholder="Введите имя..."
                        id="name"
                        v-model="formName"
                        v-bind:class="{ contact_form__input__success: isNameValidated, contact_form__input__failure: isErrorInName}"
                    />
                    <label
                        class="contact_form__label"
                        for="phone"
                        id="phone_label"
                        v-bind:class="{contact_form__label_phone_error: isErrorInPhone}"
                        >Телефон*:</label
                    >
                    <input
                        class="contact_form__input"
                        type="text"
                        placeholder="Введите номер телефона..."
                        id="phone"
                        v-model="formPhone"
                        v-bind:class="{ contact_form__input__success: isPhoneValidated, contact_form__input__failure: isErrorInPhone }"
                    />
                    <label
                        class="contact_form__label"
                        for="email"
                        id="email_label"
                        v-bind:class="{contact_form__label_email_error: isErrorInEmail}"
                        >Email*:</label
                    >
                    <input
                        class="contact_form__input"
                        type="text"
                        placeholder="Введите email..."
                        id="email"
                        v-model="formEmail"
                        v-bind:class="{ contact_form__input__success: isEmailValidated, contact_form__input__failure: isErrorInEmail }"
                    />
                    <label class="contact_form__label" for="comment"
                        >Комментарий
                        <span class="contact_form__contact_form_span"
                            >(по желанию)</span
                        ></label
                    >
                    <textarea
                        class="contact_form__input contact_form__textarea"
                        name="textarea"
                        id="comment"
                    ></textarea>
                    <button
                        class="contact_form__button"
                        type="submit"
                        id="submit"
                        @click="submitForm"
                    >
                        Отправить
                    </button>
                </form>
                <div class="contacts">
                    <h2 class="contacts__heading heading">Свяжитесь с нами</h2>
                    <h3 class="contacts__title">Наши телефоны</h3>
                    <ul class="contacts__list">
                        <li class="contacts__item">+7(999)999-9999</li>
                        <li class="contacts__item">+7(999)999-9998</li>
                    </ul>
                    <h3 class="contacts__title">Наша почта</h3>
                    <ul class="contacts__list">
                        <li class="contacts__item">company@mail.ru</li>
                        <li class="contacts__item">my.company@mail.ru</li>
                        <li class="contacts__item">my-company@mail.ru</li>
                    </ul>
                </div>
            </div>
        </div>
        <shop-footer></shop-footer>
    </div>
    `,
    data: {
        formName: "",
        formPhone: "",
        formEmail: "",
    },
    computed: {
        isNameValidated() {
            return /^[a-zа-яё]+$/i.test(this.formName);
        },
        isErrorInName() {
            return (
                !/^[a-zа-яё]+$/i.test(this.formName) && this.formName.length > 0
            );
        },
        isPhoneValidated() {
            return /^\+7\(\d{3}\)\d{3}\-\d{4}$/.test(this.formPhone);
        },
        isErrorInPhone() {
            return (
                !/^\+7\(\d{3}\)\d{3}\-\d{4}$/.test(this.formPhone) &&
                this.formPhone.length > 0
            );
        },
        isEmailValidated() {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                this.formEmail
            );
        },
        isErrorInEmail() {
            return (
                !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    this.formEmail
                ) && this.formEmail.length > 0
            );
        },
    },
    methods: {
        submitForm(event) {
            if (
                !this.isEmailValidated ||
                !this.isNameValidated ||
                !this.isPhoneValidated
            ) {
                event.preventDefault();
            }
        },
    },
});
