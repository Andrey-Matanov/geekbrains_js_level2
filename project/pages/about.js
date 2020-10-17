import initiateFooter from "../components/footer/footer.js";
import { initiateHeader, renderHeader } from "../components/header/header.js";
import To_top_button from "../components/To_top_button.js";
import { onScrollFunction } from "../scripts/common.js";

const initiatePage = () => {
    let top = document.createElement("div");
    top.classList.add("top");
    document.querySelector(".root").appendChild(top);

    initiateHeader();

    let heading = document.createElement("h1");
    heading.innerText = "О нас";
    top.appendChild(heading);

    top.innerHTML += To_top_button();
    onScrollFunction();
    initiateFooter();
};

const renderPage = () => {
    renderHeader();
};

initiatePage();
renderPage();
