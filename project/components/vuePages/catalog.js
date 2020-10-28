import { onScrollFunction } from "../../scripts/common.js";
import Header from "../vueComponents/Header.js";
import Footer from "../vueComponents/Footer.js";

Vue.component("goods-list", {
    props: ["items"],
    template: `
    <div class="goods_list">
        <div v-for="item in items" class="goods_item">
        <img
            class="goods_item__img"
            :src="fullPath(item.img)"
            alt="pic"
        />
        <div class="goods_item__text">
            <h3 class="goods_item__title">{{item.title}}</h3>
            <p class="goods_item__category">Категория: {{item.category}}</p>
            <p class="goods_item__price">Цена: {{item.price}}</p>
            <button class="addProduct" :data-fullname="item.fullname">
                Добавить товар
            </button>
        </div>
    </div>
    `,
    methods: {
        fullPath(path) {
            return `../assets/` + path;
        },
    },
});

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
                    />
                    <button class="catalog_search__button">Искать</button>
                </div>

                <goods-list :items="catalogItems"></goods-list>
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

            <shop-footer></shop-footer>
        </div>
    </div>

    `,
    data: {
        url:
            "https://raw.githubusercontent.com/Andrey-Matanov/geekbrains_js_level2/master/data/catalog.json",
        catalogItems: null,
        searchLine: "",
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
    computed: {
        filteredItems() {
            const regexp = new RegExp(this.searchLine, "i");
            return this.catalogItems.filter((good) => good.title.match(regexp));
        },
    },
});

onScrollFunction();
