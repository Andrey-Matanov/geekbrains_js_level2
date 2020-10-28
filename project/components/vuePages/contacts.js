import { onScrollFunction } from "../../scripts/common.js";
import Footer from "../vueComponents/Footer.js";
import Header from "../vueComponents/Header.js";

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
        <label class="contact_form__label" for="name" id="name_label" v-bind:class="{contact_form__label_name_error: !isNameValidated}">Имя*:</label>
        <input class="contact_form__input" type="text" placeholder="Введите имя..." id="name" v-model="formName" v-bind:class="{ contact_form__input__success: isNameValidated, contact_form__input__failure: !isNameValidated }">
        <label class="contact_form__label" for="phone" id="phone_label" v-bind:class="{contact_form__label_phone_error: !isPhoneValidated}">Телефон*:</label>
        <input class="contact_form__input" type="text" placeholder="Введите номер телефона..." id="phone" v-model="formPhone" v-bind:class="{ contact_form__input__success: isPhoneValidated, contact_form__input__failure: !isPhoneValidated }">
        <label class="contact_form__label" for="email" id="email_label" v-bind:class="{contact_form__label_email_error: !isEmailValidated}">Email*:</label>
        <input class="contact_form__input" type="text" placeholder="Введите email..." id="email" v-model="formEmail" v-bind:class="{ contact_form__input__success: isEmailValidated, contact_form__input__failure: !isEmailValidated }">
        <label class="contact_form__label" for="comment">Комментарий
            <span class="contact_form__contact_form_span">(по желанию)</span></label>
        <textarea class="contact_form__input contact_form__textarea" name="textarea" id="comment"></textarea>
        <button class="contact_form__button" type="submit" id="submit" @click="submitForm">Отправить</button>
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
        <button class="to_top_button" style="opacity: 0;">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
                <path fill="white" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
            </svg>
        </button>
    </div>
    <shop-footer></shop-footer>
    </div>
    `,
    data: {
        formName: "",
        formPhone: "",
        formEmail: "",
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
    computed: {
        isNameValidated() {
            return /^[a-zа-яё]+$/i.test(this.formName);
        },
        isPhoneValidated() {
            return /^\+7\(\d{3}\)\d{3}\-\d{4}$/.test(this.formPhone);
        },
        isEmailValidated() {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                this.formEmail
            );
        },
    },
});

onScrollFunction();
