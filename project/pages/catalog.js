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

    let catalogSearchContainer = document.createElement("div");
    catalogSearchContainer.classList.add("catalog_search__container");
    catalogSearchContainer.innerHTML = `
    <p class="catalog_search__title">Поиск по каталогу:</p>
    <input class="catalog_search__input" type="search"></input>
    <button class="catalog_search__button">Искать</button>
    `;
    catalog_wrapper.append(catalogSearchContainer);

    catalog.addToDocument();

    top.innerHTML += To_top_button();
    onScrollFunction();
    initiateFooter();

    document
        .querySelector(".catalog_search__button")
        .addEventListener("click", catalog.searchInCatalog);

    document
        .querySelector(".catalog_search__input")
        .addEventListener("keydown", (event) => {
            if (event.code == "Enter") {
                catalog.searchInCatalog();
            }
        });

    // document
    //     .querySelector(".catalog_search__input")
    //     .addEventListener("keydown", () => {
    //         catalog.searchInCatalog();
    //     });
    // Поиск по каждому вводимому символу в строке поиска
};

const renderPage = () => {
    renderHeader();
    catalog.init();
};

initiatePage();
renderPage();
