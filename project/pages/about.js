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
            <h1>О нас</h1>
        </div>
        <shop-footer></shop-footer>
    </div>
    `,
});
