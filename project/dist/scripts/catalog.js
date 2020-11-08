(()=>{"use strict";var t,e={763:(t,e,n)=>{n.d(e,{t:()=>a});const a=()=>{let t=document.querySelector(".to_top_button");window.pageYOffset>150?t.style.opacity="1":t.style.opacity="0",t.onclick=function(){window.scrollTo(0,0)},window.onscroll=a}}},n={};function a(t){if(n[t])return n[t].exports;var s=n[t]={exports:{}};return e[t](s,s.exports,a),s.exports}a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=a(763),new Vue({el:".root",components:{"shop-header":{template:'\n    <header class="header">\n        <div class="wrapper header__wrapper">\n            <a href="index.html" class="header__logo_link">\n                <img class="header__logo" src="../assets/logo.png" alt="Logo" />\n            </a>\n            <nav class="nav">\n                <div class="nav__link_container">\n                    <a href="index.html" class="nav__link">Главная</a>\n                </div>\n                <div class="nav__link_container">\n                    <a href="catalog.html" class="nav__link">Каталог</a>\n                </div>\n                <div class="nav__link_container">\n                    <a href="contacts.html" class="nav__link">Наши контакты</a>\n                </div>\n                <div class="nav__link_container">\n                    <a href="about.html" class="nav__link">О нас</a>\n                </div>\n            </nav>\n            <div class="header__buttons">\n                <a href="profile.html" class="header__account_button" >\n                    <svg\n                        aria-hidden="true"\n                        focusable="false"\n                        data-prefix="fas"\n                        data-icon="user-circle"\n                        class="svg-inline--fa fa-user-circle fa-w-16"\n                        role="img"\n                        xmlns="http://www.w3.org/2000/svg"\n                        viewBox="0 0 496 512"\n                        width="30"\n                        height="30"\n                    >\n                        <path\n                            fill="#fff"\n                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"\n                        ></path>\n                    </svg>\n                </a>\n                <button\n                    class="header__basket_button"\n                    type="button"\n                    @click="isBasketVisible = !isBasketVisible"\n                >\n                    <svg\n                        aria-hidden="true"\n                        focusable="false"\n                        data-prefix="fas"\n                        data-icon="shopping-basket"\n                        class="svg-inline--fa fa-shopping-basket fa-w-18"\n                        role="img"\n                        xmlns="http://www.w3.org/2000/svg"\n                        viewBox="0 0 576 512"\n                        width="30"\n                        height="30"\n                    >\n                        <path\n                            fill="#fff"\n                            d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z"\n                        ></path>\n                    </svg>\n                </button>\n            </div>\n            <div class="basket" v-bind:class="{ basket_active: isBasketVisible }">\n                <div class="basket__items">\n                    <div v-if="isBasketEmpty">\n                        <p class="basket__empty">В данный момент корзина пуста</p>\n                    </div>\n                    <div v-else v-for="item in basketItems" class="basket__item">\n                        <img\n                            class="basket__item_image"\n                            :src="fullPath50(item.img)"\n                            :alt="item.title"\n                        />\n                        <p class="basket__item_description">\n                            {{item.title}} x {{item.amount}}\n                        </p>\n                    </div>\n                </div>\n                <a class="basket__to_checkout_link" href="./checkout.html">Посмотреть/изменить содержимое корзины</a>\n            </div>\n        </div>\n    </header>\n    ',data:function(){return{isBasketVisible:!1,url:"http://localhost:3000/basket",basketItems:[]}},computed:{isBasketEmpty(){return 0==this.basketItems.length}},methods:{makeGETRequest(){fetch(this.url).then((t=>t.json())).then((t=>{this.basketItems=t.items})).catch((()=>{this.basketItems="Корзина недоступна"}))},fullPath50:t=>"../assets/50x50/"+t},created(){this.makeGETRequest()}},"shop-footer":{template:'\n    <footer class="footer">\n        <div class="wrapper footer__wrapper">\n            <a class="footer__link" href="https://github.com/Andrey-Matanov" target="_blank">Github</a>\n            <p class="footer__copyright">© 2020, Андрей Матанов\n        </p></div>\n    </footer>\n    '}},template:'\n    <div class="root">\n        <div class="top">\n            <shop-header></shop-header>\n            <div class="catalog__wrapper wrapper">\n                <div class="catalog_search__container">\n                    <p class="catalog_search__title">Поиск по каталогу:</p>\n                    <input\n                        class="catalog_search__input"\n                        type="search"\n                        v-model="searchLine"\n                        placeholder="Введите название или категорию интересующего вас товара"\n                    />\n                </div>\n\n                <div class="goods_list" >\n                    <div v-for="item in filteredCatalog" class="goods_item">\n                        <img\n                            class="goods_item__img"\n                            :src="fullPath(item.img)"\n                            alt="pic"\n                        />\n                        <div class="goods_item__text">\n                            <h3 class="goods_item__title">{{item.title}}</h3>\n                            <p class="goods_item__category">\n                                Категория: {{item.category}}\n                            </p>\n                            <p class="goods_item__price">Цена: {{item.price}}</p>\n                            <button\n                                class="addProduct"\n                                :data-fullname="item.fullname"\n                                @click="addProduct"\n                            >\n                                Добавить товар\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <button class="to_top_button" style="opacity: 0">\n                    <svg\n                        aria-hidden="true"\n                        focusable="false"\n                        data-prefix="fas"\n                        data-icon="arrow-up"\n                        class="svg-inline--fa fa-arrow-up fa-w-14"\n                        role="img"\n                        xmlns="http://www.w3.org/2000/svg"\n                        viewBox="0 0 448 512"\n                        width="30"\n                        height="30"\n                    >\n                        <path\n                            fill="white"\n                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"\n                        ></path>\n                    </svg>\n                </button>\n            </div>\n            <shop-footer></shop-footer>\n        </div>\n    </div>\n\n    ',data:{catalogURL:"http://localhost:3000/catalog",basketURL:"http://localhost:3000/basket",basketAddURL:"http://localhost:3000/basket/add",catalogItems:[],searchLine:""},methods:{makeGETRequest(){fetch(this.catalogURL).then((t=>t.json())).then((t=>{this.catalogItems=t.items})).catch((()=>{this.catalogItems="Корзина недоступна"}))},fullPath:t=>"../assets/"+t,returnCatalogItem(t){const e={};return this.catalogItems.forEach((n=>{n.fullname==t&&(e.fullname=n.fullname,e.title=n.title,e.img=n.img)})),e},async addProduct(t){t.preventDefault();const e=t.target.dataset.fullname;await fetch(this.basketAddURL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullname:e})}).then((t=>console.log(t)))}},computed:{filteredCatalog:function(){const t=new RegExp(this.searchLine,"i");return this.catalogItems.filter((e=>e.title.match(t)||e.category.match(t)))}},created(){this.makeGETRequest(),(0,t.t)()}})})();