import { basket } from "./data.js";

class Catalog {
    constructor() {
        this.url =
            "https://raw.githubusercontent.com/Andrey-Matanov/geekbrains_js_level2/master/data/catalog.json";
        this.items = null;
        this.searchedItems = null;
    }

    init() {
        fetch(this.url)
            .then((response) => response.json())
            .then((arr) => {
                this.items = arr;
                this.searchedItems = this.items;
            })
            .catch(() => {
                this.items = "Каталог товаров недоступен";
                this.searchedItems = this.items;
            })
            .finally(() => {
                this.render();
                this.addEventListeners();
            });
    }

    render() {
        if (this.searchedItems === "Каталог товаров недоступен") {
            document.querySelector(".goods_list").innerHTML =
                "<h1>Каталог товаров недоступен</h1>";
        } else {
            let innerHTML = "";
            this.searchedItems.map(
                ({
                    title = "Товар отсутствует",
                    price = "0",
                    img = "tshirt.jpg",
                    fullname = "",
                    category,
                }) =>
                    (innerHTML += this.renderGoodsItem(
                        title,
                        price,
                        img,
                        fullname,
                        category
                    ))
            );
            document.querySelector(".goods_list").innerHTML = innerHTML;
        }
    }

    addEventListeners = () => {
        let buttonsArray = document.querySelectorAll(".addProduct");
        for (let item of buttonsArray) {
            item.addEventListener("click", basket.addItem);
        }
    };

    addToDocument() {
        let goodsList = document.createElement("div");
        goodsList.classList.add("goods_list");

        document.querySelector(".catalog__wrapper").appendChild(goodsList);
    }

    searchInCatalog = () => {
        let input = document.querySelector(".catalog_search__input");
        let inputValue = input.value;

        if (inputValue.length == 0) {
            this.searchedItems = this.items;
            this.render();
        } else {
            let tempArray = [];

            this.items.forEach((item) => {
                const { title, category } = item;
                let regExp = new RegExp(`${inputValue}`, "i");
                console.log(regExp);
                console.log(`${title}: ${category}`);
                if (regExp.test(title) || regExp.test(category)) {
                    tempArray.push(item);
                }
            });

            this.searchedItems = tempArray;
            this.render();
        }
    };

    renderGoodsItem = (title, price, img, fullname, category) => {
        return `
        <div class="goods_item">
            <img class="goods_item__img" src="../assets/${img}" alt="${img}"></img>
            <div class="goods_item__text">
                <h3 class="goods_item__title">${title}</h3>
                <p class="goods_item__category">Категория: ${category}</p>
                <p class="goods_item__price">Цена: ${price}</p>
                <button class="addProduct" data-fullname=${fullname}>Добавить товар</button>
            </div>
        </div>
        `;
    };
}

export default Catalog;
