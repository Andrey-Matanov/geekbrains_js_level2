import { basket as basketContainer } from "../Basket.js";
import returnHeaderHTML from "./header_html.js";

export const initiateHeader = () => {
    let header = document.createElement("header");
    header.classList.add("header");

    document.querySelector(".top").appendChild(header);
};

export const renderHeader = () => {
    document.querySelector(".header").innerHTML = returnHeaderHTML();

    let button = document.querySelector(".header__basket_button");
    let basket = document.querySelector(".basket");
    button.addEventListener("click", () => {
        basket.classList.toggle("basket_active");
    });

    basketContainer.render("basket");
};
