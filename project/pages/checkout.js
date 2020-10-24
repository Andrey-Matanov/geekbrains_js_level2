import initiateFooter from "../components/footer/footer.js";
import { initiateHeader, renderHeader } from "../components/header/header.js";
import To_top_button from "../components/To_top_button.js";
import { onScrollFunction } from "../scripts/common.js";
import { basket } from "../components/data.js";

const initiatePage = () => {
    let top = document.createElement("div");
    top.classList.add("top");
    document.querySelector(".root").appendChild(top);

    initiateHeader();
    basket.initiateCheckoutBasket();
    top.innerHTML += To_top_button();
    onScrollFunction();
    initiateFooter();
};

const renderPage = () => {
    renderHeader();
    basket.render("checkout");
};

initiatePage();
renderPage();
