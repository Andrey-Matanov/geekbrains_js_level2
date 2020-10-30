import { onScrollFunction } from "../scripts/common.js";
import Footer from "../components/Footer.js";

const hostBus = new Vue();

Vue.component("shop-header", {
    template: `
    <header class="header">
        <div class="wrapper header__wrapper">
            <a href="index.html" class="header__logo_link">
                <img class="header__logo" src="../assets/logo.png" alt="Logo" />
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
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-circle"
                        class="svg-inline--fa fa-user-circle fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        width="30"
                        height="30"
                    >
                        <path
                            fill="#fff"
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                        ></path>
                    </svg>
                </button>
                <button
                    class="header__basket_button"
                    type="button"
                    @click="isBasketVisible = !isBasketVisible"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shopping-basket"
                        class="svg-inline--fa fa-shopping-basket fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="30"
                        height="30"
                    >
                        <path
                            fill="#fff"
                            d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div class="basket" v-bind:class="{ basket_active: isBasketVisible }">
                <div class="basket__items">
                    <div v-for="item in basketItems" class="basket__item">
                        <img
                            class="basket__item_image"
                            :src="fullPath50(item.img)"
                            :alt="item.title"
                        />
                        <p class="basket__item_description">
                            {{item.title}} x {{item.amount}}
                        </p>
                    </div>
                    <a class="basket__to_checkout_link" href="./checkout.html">Посмотреть/изменить содержимое корзины</a>
                </div>
            </div>
        </div>
    </header>
    `,
    data: function () {
        return {
            isBasketVisible: false,
            url:
                "https://raw.githubusercontent.com/Andrey-Matanov/geekbrains_js_level2/master/data/basket.json",
            basketItems: [],
        };
    },
    methods: {
        addToBasket(item) {
            let itemFound = false;
            this.basketItems.forEach((basketItem) => {
                if (basketItem.fullname == item.fullname) {
                    basketItem.amount += 1;
                    itemFound = true;
                }
            });
            if (!itemFound) {
                this.basketItems.push({ ...item, amount: 1 });
            }
        },
        fullPath50(path) {
            return `../assets/50x50/` + path;
        },
    },
    created() {
        fetch(this.url)
            .then((response) => response.json())
            .then((arr) => (this.basketItems = arr))
            .catch(() => (this.basketItems = "Корзина недоступна"));
        hostBus.$on("add-to-basket", this.addToBasket);
    },
    beforeDestroy() {
        hostBus.$off("add-to-basket");
    },
});

const app = new Vue({
    el: ".root",
    components: {
        "shop-footer": Footer,
    },
    template: `
    <div class="root">
        <div class="top">
            <shop-header></shop-header>
            <div class="catalog__wrapper wrapper">
                <div class="catalog_search__container">
                    <p class="catalog_search__title">Поиск по каталогу:</p>
                    <input
                        class="catalog_search__input"
                        type="search"
                        v-model="searchLine"
                    />
                </div>

                <div class="goods_list" >
                    <div v-for="item in filteredCatalog" class="goods_item">
                        <img
                            class="goods_item__img"
                            :src="fullPath(item.img)"
                            alt="pic"
                        />
                        <div class="goods_item__text">
                            <h3 class="goods_item__title">{{item.title}}</h3>
                            <p class="goods_item__category">
                                Категория: {{item.category}}
                            </p>
                            <p class="goods_item__price">Цена: {{item.price}}</p>
                            <button
                                class="addProduct"
                                :data-fullname="item.fullname"
                                @click="addToBasket"
                            >
                                Добавить товар
                            </button>
                        </div>
                    </div>
                </div>
                <button class="to_top_button" style="opacity: 0">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-up"
                        class="svg-inline--fa fa-arrow-up fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="30"
                        height="30"
                    >
                        <path
                            fill="white"
                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                        ></path>
                    </svg>
                </button>
            </div>
            <shop-footer></shop-footer>
        </div>
    </div>

    `,
    data: {
        url:
            "https://raw.githubusercontent.com/Andrey-Matanov/geekbrains_js_level2/master/data/catalog.json",
        catalogItems: [],
        searchLine: "",
    },

    methods: {
        fullPath(path) {
            return `../assets/` + path;
        },
        addToBasket(event) {
            hostBus.$emit(
                "add-to-basket",
                this.returnCatalogItem(event.target.dataset.fullname)
            );
        },
        returnCatalogItem(fullname) {
            const newItem = {};
            this.catalogItems.forEach((item) => {
                if (item.fullname == fullname) {
                    newItem.fullname = item.fullname;
                    newItem.title = item.title;
                    newItem.img = item.img;
                }
            });
            return newItem;
        },
    },
    computed: {
        filteredCatalog: function () {
            const regexp = new RegExp(this.searchLine, "i");
            return this.catalogItems.filter(
                (good) =>
                    good.title.match(regexp) || good.category.match(regexp)
            );
        },
    },
    created() {
        fetch(this.url)
            .then((response) => response.json())
            .then((arr) => {
                this.catalogItems = arr;
            })
            .catch(() => {
                this.catalogItems = "Каталог товаров недоступен";
            });
    },
    mounted() {
        onScrollFunction();
    },
});
