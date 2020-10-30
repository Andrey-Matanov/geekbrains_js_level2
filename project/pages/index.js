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
            <h1>Главная</h1>
        </div>
        <shop-footer></shop-footer>
    </div>
    `,
    data: {
        url: "http://localhost:3000/",
        items: [],
    },
    methods: {
        makeGETRequest(url) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => (this.items = data));
        },
    },
    created() {
        this.makeGETRequest(this.url);
    },
});
