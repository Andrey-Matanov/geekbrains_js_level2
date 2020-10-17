export default class BasketItem {
    constructor(id, title, discount, price, amount, img, fullname) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discount = discount;
        this.img = img;
        this.amount = amount;
        this.fullname = fullname;
    }

    render() {
        return `
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/${this.img}" alt="${this.title}">
        <p class="basket__item_description">${this.title} x ${this.amount}</p>
        </div>
        `;
    }
}
