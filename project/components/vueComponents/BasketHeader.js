const BasketHeader = {
    props: { isActive: Boolean },
    template: `
    <div class="basket" v-bind:class="{ basket_active: isActive }"><div class="basket__items">
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/tshirts/black_tshirt.jpg" alt="Черная футболка">
        <p class="basket__item_description">Черная футболка x 2</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/tshirts/orange_tshirt.jpg" alt="Оранжевая футболка">
        <p class="basket__item_description">Оранжевая футболка x 1</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/tshirts/blue_tshirt.png" alt="Синяя футболка">
        <p class="basket__item_description">Синяя футболка x 3</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/socks/white_socks.jpg" alt="Белые носки">
        <p class="basket__item_description">Белые носки x 2</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/socks/green_socks.jpg" alt="Зеленые носки">
        <p class="basket__item_description">Зеленые носки x 2</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/socks/black_socks.jpeg" alt="Черные носки">
        <p class="basket__item_description">Черные носки x 2</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/jackets/gray_jacket.jpg" alt="Серая куртка">
        <p class="basket__item_description">Серая куртка x 1</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/jackets/red_jacket.jpg" alt="Красная куртка">
        <p class="basket__item_description">Красная куртка x 1</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/shoes/men_shoes.jpg" alt="Мужские туфли">
        <p class="basket__item_description">Мужские туфли x 1</p>
        </div>
        
        <div class="basket__item">
        <img class="basket__item_image" src="../assets/shoes/women_shoes.jpg" alt="Женские туфли">
        <p class="basket__item_description">Женские туфли x 1</p>
        </div>
        </div><a class="basket__to_checkout_link" href="./checkout.html">Посмотреть/изменить содержимое корзины</a>
    </div>
    `,
};

export default BasketHeader;
