export const onScrollFunction = () => {
    let to_top_button = document.querySelector(".to_top_button");

    if (window.pageYOffset > 150) {
        to_top_button.style.opacity = "1";
    } else {
        to_top_button.style.opacity = "0";
    }

    to_top_button.onclick = function () {
        window.scrollTo(0, 0);
    };

    window.onscroll = onScrollFunction;
};
