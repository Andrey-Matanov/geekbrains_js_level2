import BasketItem from "./BasketItem.js";

export default class Basket {
    constructor() {
        this.items = [];
        this.url =
            "https://raw.githubusercontent.com/Andrey-Matanov/geekbrains_js_level2/master/data/basket.json";
    }

    get(script) {
        fetch(this.url)
            .then((response) => response.json())
            .then((arr) => (this.fetchedItems = arr))
            .then(() => this.fetchItems(this.fetchedItems))
            .catch(() => {
                basketItems = "Корзина недоступна";
            })
            .finally(() => {
                console.log("basket", this.items);
                this.render(script);
            });
    }

    addItem = (event) => {
        console.log(event.target.dataset.fullname);
        for (let item of this.items) {
            console.log(item.fullname);
            if (item.fullname === event.target.dataset.fullname) {
                item.amount += 1;
            }
        }
        this.render("basket");
    };

    fetchItems(fetchedItems) {
        for (let item in fetchedItems) {
            let newBasketItem = new BasketItem(
                ...Object.values(fetchedItems[item])
            );
            console.log(newBasketItem);
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
            console.log("item", item);
            basketItemsHTML += `
            <div class="goods__item">
                <img class="goods__item_img" src="../assets/${item.img}" width="100">
                <div class="goods__item_description">
                    <p class="goods__item_id">Артикул: ${item.id}</p>
                    <p class="goods__item_title">Название: ${item.title}</p>
                    <p class="goods__item_price">Цена: ${item.price}</p>
                    <p class="goods__item_discount">Скидка: ${item.discount}%</p>
                    <p class="goods__item_amount">Количество: ${item.amount} шт.</p>
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

    returnCheckoutBasketHTML = () => {
        let checkoutBasket = document.querySelector(".checkout_basket");
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
    };

    render(script) {
        switch (script) {
            case "basket": {
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
                break;
            }
            case "checkout": {
                this.returnCheckoutBasketHTML();
            }
        }
    }
}
