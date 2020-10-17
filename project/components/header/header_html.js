const returnHeaderHTML = () => {
    return `
    <div class="wrapper header__wrapper">
      <a href="index.html" class="header__logo_link">
        <img class="header__logo" src="../assets/logo.png" alt="Logo">
      </a>
      <nav class="nav">
        <div class="nav__link_container">
          <a href="index.html" class="nav__link">Главная</a>
        </div>
        <div class="nav__link_container">
          <a href="catalog.html" class="nav__link">Каталог</a>
        </div>
        <div class="nav__link_container">
          <a href="contacts.html" class="nav__link">Наши контакты</a>
        </div>
        <div class="nav__link_container">
          <a href="about.html" class="nav__link">О нас</a>
        </div>
      </nav>
      <div class="header__buttons">
        <button class="header__account_button" type="button">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle"
            class="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512" width="30" height="30">
            <path fill="#fff"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
            </path>
          </svg>
        </button>
        <button class="header__basket_button" type="button">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-basket"
            class="svg-inline--fa fa-shopping-basket fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512" width="30" height="30">
            <path fill="#fff"
              d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z">
            </path>
          </svg>
        </button>
      </div>
      <div class="basket"></div>
    </div>  
    `;
};

export default returnHeaderHTML;
