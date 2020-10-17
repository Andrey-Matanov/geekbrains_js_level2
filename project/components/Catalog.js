import { basket } from "./data.js";

class Catalog {
    constructor() {
        this.url =
            "https://raw.githubusercontent.com/Andrey-Matanov/geekbrains_js_level2/master/data/catalog.json";
        this.items = [];
    }

    init() {
        fetch(this.url)
            .then((response) => response.json())
            .then((arr) => (this.items = arr))
            .catch(() => {
                this.items = "Каталог товаров недоступен";
            })
            .finally(() => {
                this.render();
                this.addEventListeners();
            });
    }

    render() {
        if (this.items === "Каталог товаров недоступен") {
            document.querySelector(".goods_list").innerHTML =
                "<h1>Каталог товаров недоступен</h1>";
        } else {
            this.items.map(
                ({
                    title = "Товар отсутствует",
                    price = "0",
                    img = "tshirt.jpg",
                    fullname = "",
                }) =>
                    (document.querySelector(
                        ".goods_list"
                    ).innerHTML += this.renderGoodsItem(
                        title,
                        price,
                        img,
                        fullname
                    ))
            );
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

    renderGoodsItem = (title, price, img, fullname) => {
        return `
        <div class="goods_item">
            <img class="goods_item__img" src="../assets/${img}" alt="${img}"></img>
            <div class="goods_item__text">
                <h3 class="goods_item__title">${title}</h3>
                <p>${price}</p>
                <button class="addProduct" data-fullname=${fullname}>Добавить товар</button>
            </div>
        </div>
        `.repeat(4);
    };
}

export default Catalog;
