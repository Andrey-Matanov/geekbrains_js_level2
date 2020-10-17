import { initiateHeader, renderHeader } from "../components/header/header.js";
import To_top_button from "../components/To_top_button.js";
import { onScrollFunction } from "../scripts/common.js";
import initiateFooter from "../components/footer/footer.js";
import { catalog } from "../components/data.js";

const initiatePage = () => {
    let top = document.createElement("div");
    top.classList.add("top");
    document.querySelector(".root").appendChild(top);

    initiateHeader();

    let catalog_wrapper = document.createElement("div");
    catalog_wrapper.classList.add("catalog__wrapper", "wrapper");
    top.appendChild(catalog_wrapper);

    catalog.addToDocument();

    top.innerHTML += To_top_button();
    onScrollFunction();
    initiateFooter();
};

const renderPage = () => {
    renderHeader();
    catalog.init();
};

initiatePage();
renderPage();
