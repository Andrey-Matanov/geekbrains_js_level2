import BasketItem from "./BasketItem.js";

const basketItems = [
    {
        id: 115,
        title: "Черная футболка",
        category: "футболка",
        discount: 5,
        fullname: "black_tshirt",
        price: 150,
        img: "tshirts/black_tshirt.jpg",
        amount: 2,
    },
    {
        id: 116,
        title: "Оранжевая футболка",
        category: "футболка",
        discount: 5,
        fullname: "orange_tshirt",
        price: 130,
        img: "tshirts/orange_tshirt.jpg",
        amount: 1,
    },
    {
        id: 117,
        title: "Синяя футболка",
        category: "футболка",
        discount: 5,
        fullname: "blue_tshirt",
        price: 140,
        img: "tshirts/blue_tshirt.png",
        amount: 3,
    },
    {
        id: 234,
        title: "Белые носки",
        category: "носки",
        discount: 0,
        fullname: "white_socks",
        price: 50,
        img: "socks/white_socks.jpg",
        amount: 2,
    },
    {
        id: 235,
        title: "Зеленые носки",
        category: "носки",
        discount: 0,
        fullname: "green_socks",
        price: 50,
        img: "socks/green_socks.jpg",
        amount: 2,
    },
    {
        id: 236,
        title: "Черные носки",
        category: "носки",
        discount: 0,
        fullname: "black_socks",
        price: 50,
        img: "socks/black_socks.jpeg",
        amount: 2,
    },
    {
        id: 567,
        title: "Серая куртка",
        category: "куртка",
        discount: 5,
        fullname: "gray_jacket",
        price: 350,
        img: "jackets/gray_jacket.jpg",
        amount: 1,
    },
    {
        id: 568,
        title: "Красная куртка",
        category: "куртка",
        discount: 5,
        fullname: "red_jacket",
        price: 350,
        img: "jackets/red_jacket.jpg",
        amount: 1,
    },
    {
        id: 875,
        title: "Мужские туфли",
        category: "обувь",
        discount: 10,
        fullname: "men_shoes",
        price: 250,
        img: "shoes/men_shoes.jpg",
        amount: 1,
    },
    {
        id: 876,
        title: "Женские туфли",
        category: "обувь",
        discount: 10,
        fullname: "women_shoes",
        price: 250,
        img: "shoes/women_shoes.jpg",
        amount: 1,
    },
];

export default class Basket {
    constructor() {
        if (basketItems.length > 0) {
            this.basketItems = basketItems;
        }
        this.items = [];
        this.fetchedItems = null;
        this.url =
            "https://raw.githubusercontent.com/Andrey-Matanov/geekbrains_js_level2/master/data/basket.json";

        this.get();
    }

    // Данные берутся с помощью fetch(url)
    // get(script) {
    //     fetch(this.url)
    //         .then((response) => response.json())
    //         .then((arr) => (this.fetchedItems = arr))
    //         .then(() => this.fetchItems(this.fetchedItems))
    //         .catch(() => {
    //             basketItems = "Корзина недоступна";
    //         })
    //         .finally(() => {
    //             this.render(script);
    //         });
    // }

    // Данные берутся из файла Basket.js
    get() {
        for (let item in this.basketItems) {
            let newBasketItem = new BasketItem(
                ...Object.values(this.basketItems[item])
            );
            this.items.push(newBasketItem);
        }
    }

    addItem = (event) => {
        for (let item of this.items) {
            if (item.fullname === event.target.dataset.fullname) {
                item.amount += 1;
            }
        }
        this.render("basket");
        if (document.querySelector(".checkout_basket") !== null) {
            this.render("checkout");
        }
    };

    removeItem = (event) => {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];

            if (item.fullname === event.target.dataset.fullname) {
                item.amount -= 1;
                if (item.amount == 0) {
                    this.items.splice(i, 1);
                }
            }
        }
        this.render("basket");
        if (document.querySelector(".checkout_basket") !== null) {
            this.render("checkout");
        }
    };

    fetchItems(fetchedItems) {
        for (let item in fetchedItems) {
            let newBasketItem = new BasketItem(
                ...Object.values(fetchedItems[item])
            );
            this.items.push(newBasketItem);
        }
    }

    initiateCheckoutBasket = () => {
        let checkout_basket = document.createElement("div");
        checkout_basket.classList.add("checkout_basket");
        document.querySelector(".top").appendChild(checkout_basket);
    };

    returnBasketItemsHTML = () => {
        let basketItemsHTML = "";

        this.items.forEach((item) => {
            basketItemsHTML += `
            <div class="goods__item">
                <div class="goods__item_information">
                    <img class="goods__item_img" src="../assets/${item.img}" width="100">
                    <div class="goods__item_description">
                        <p class="goods__item_id">Артикул: ${item.id}</p>
                        <p class="goods__item_title">Название: ${item.title}</p>
                        <p class="goods__item_category">Категория: ${item.category}</p>
                        <p class="goods__item_price">Цена: ${item.price}</p>
                        <p class="goods__item_discount">Скидка: ${item.discount}%</p>
                        <p class="goods__item_amount">Количество: ${item.amount} шт.</p>
                    </div>
                </div>
                <div class="goods__item_buttons">
                <button
                class="goods__item_add_button goods__item_button"
                data-fullname="${item.fullname}"
            >
                +
            </button>
            <button
                class="goods__item_remove_button goods__item_button"
                data-fullname="${item.fullname}"
            >
                -
            </button>
                </div>
            </div>
            `;
        });

        return basketItemsHTML;
    };

    returnBasketDescriptionHTML = () => {
        let basketDescriptionHTML = `
        <h2 class="basket_description__heading">Итого</h2>
        <div class="basket_description__total_prices">
        <h4>Цены товаров (с учетом скидки):</h4>
        `;
        let totalBasketAmount = 0;
        let totalBasketPrice = 0;

        this.items.forEach(({ title, price, discount, amount }) => {
            totalBasketAmount += amount;
            let totalPrice =
                ((price / 100) * (100 - discount)).toFixed(2) * amount;
            totalBasketPrice += totalPrice;

            basketDescriptionHTML += `<p>${title}: ${totalPrice} (за ${amount} шт.)</p>`;
        });

        basketDescriptionHTML += `
        </div>
        <p>Количество товаров в корзине: ${totalBasketAmount}</p>
        <p>Общая стоимость товаров в корзине: ${totalBasketPrice.toFixed(2)}</p>
        `;

        return basketDescriptionHTML;
    };

    returnHeaderBasketHTML = () => {
        let basket = document.querySelector(".basket");
        let innerHTML = "";

        if (this.items.length == 0) {
            innerHTML += `<p class="basket__message">Ваша корзина пуста</p>`;
        } else {
            innerHTML += `<div class="basket__items">`;
            this.items.forEach((item) => {
                innerHTML += item.render();
            });
            innerHTML += "</div>";
        }

        innerHTML +=
            '<a class="basket__to_checkout_link" href="./checkout.html">Посмотреть/изменить содержимое корзины</a>';
        basket.innerHTML = innerHTML;
    };

    returnCheckoutBasketHTML = () => {
        let checkoutBasket = document.querySelector(".checkout_basket");

        if (this.items.length == 0) {
            checkoutBasket.innerHTML = `
            <div class="wrapper checkout_basket__wrapper">
                <p>На данный момент ваша корзина пуста</p>
            </div>
            `;
        } else {
            checkoutBasket.innerHTML = `
            <div class="wrapper checkout_basket__wrapper">
                <div class="goods">
                    ${this.returnBasketItemsHTML()}
                </div>
                <div class="basket_description">
                    ${this.returnBasketDescriptionHTML()}
                </div>
            </div>
        `;
        }

        let addButtons = document.querySelectorAll(".goods__item_add_button");
        let removeButtons = document.querySelectorAll(
            ".goods__item_remove_button"
        );

        addButtons.forEach((item) => {
            item.addEventListener("click", this.addItem);
        });

        removeButtons.forEach((item) => {
            item.addEventListener("click", this.removeItem);
        });
    };

    render(script) {
        if (script === "checkout") {
            this.returnCheckoutBasketHTML();
        } else {
            this.returnHeaderBasketHTML();
        }
    }
}

export const basket = new Basket();
