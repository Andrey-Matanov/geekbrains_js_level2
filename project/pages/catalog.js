import { onScrollFunction } from "../scripts/common.js";
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
            <div class="catalog__wrapper wrapper">
                <div class="catalog_search__container">
                    <p class="catalog_search__title">Поиск по каталогу:</p>
                    <input
                        class="catalog_search__input"
                        type="search"
                        v-model="searchLine"
                        placeholder="Введите название или категорию интересующего вас товара"
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
                                @click="addProduct"
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
        catalogURL: "http://localhost:3000/catalog",
        basketURL: "http://localhost:3000/basket",
        catalogItems: [],
        searchLine: "",
    },

    methods: {
        makeGETRequest() {
            fetch(this.catalogURL)
                .then((response) => response.json())
                .then((data) => {
                    this.catalogItems = data.items;
                })
                .catch(() => {
                    this.catalogItems = "Корзина недоступна";
                });
        },
        fullPath(path) {
            return `../assets/` + path;
        },
        addToBasket(event) {
            hostBus.$emit(
                "add-to-basket",
                this.returnCatalogItem(event.current.dataset.fullname)
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
        async addProduct(event) {
            const fullname = event.target.dataset.fullname;
            console.log(fullname);
            let postItem;
            this.catalogItems.forEach((item) => {
                if (item.fullname == fullname) {
                    postItem = { ...item, amount: 1 };
                }
            });
            const response = await fetch(this.basketURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postItem),
            });
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
        this.makeGETRequest();
    },
    mounted() {
        onScrollFunction();
    },
});
