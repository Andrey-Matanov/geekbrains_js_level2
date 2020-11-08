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
            <div class="wrapper">
                <h1 style="margin-bottom: 20px">Профиль</h1>
                <div class="statsContainer">
                    <h2 style="margin-bottom: 10px">Статистика пользователя:</h2>
                    <p v-if="statsNone">
                        Статистика недоступна
                    </p>
                    <ul v-else class="stats" style="height: 380px; border:2px solid black; border-radius: 10px; padding: 10px; overflow-y: auto" >
                        <li v-for="item in stats" style="margin-bottom: 10px">Товар "{{item.name}}" был {{item.type}} {{item.time}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <shop-footer></shop-footer>
    </div>
    `,
    data: {
        statsURL: "http://localhost:3000/stats.json",
        stats: [],
    },
    computed: {
        statsNone() {
            return this.stats === "Статистика недоступна";
        },
    },
    methods: {
        makeGETRequest() {
            fetch(this.statsURL)
                .then((response) => response.json())
                .then((data) => {
                    this.stats = data;
                })
                .catch(() => {
                    this.stats = "Статистика недоступна";
                });
        },
    },
    created() {
        this.makeGETRequest();
    },
});
