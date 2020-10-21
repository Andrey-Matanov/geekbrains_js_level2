export function initiateContactForm() {
    let wrapper = document.querySelector(".contacts_page__wrapper");
    wrapper.innerHTML = returnContactFormHTML();
}

function returnContactFormHTML() {
    return `
    <form class="contact_form" action="contacts.html">
        <h2 class="contact_form__heading heading">
            Форма обратной связи
        </h2>
        <label class="contact_form__label" for="name" id="name_label">Имя*:</label>
        <input
            class="contact_form__input"
            type="text"
            placeholder="Введите имя..."
            id="name"
        />
        <label class="contact_form__label" for="phone" id="phone_label"
            >Телефон*:</label
        >
        <input
            class="contact_form__input"
            type="text"
            placeholder="Введите номер телефона..."
            id="phone"
        />
        <label class="contact_form__label" for="email" id="email_label"
            >Email*:</label
        >
        <input
            class="contact_form__input"
            type="text"
            placeholder="Введите email..."
            id="email"
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
        >Отправить</button>
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
    `;
}
