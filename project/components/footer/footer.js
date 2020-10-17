const returnFooterHTML = () => {
    return `
    <footer class="footer">
    <div class="wrapper footer__wrapper">
        <a class="footer__link" href="https://github.com/Andrey-Matanov" target="_blank">Github</a>
        <p class="footer__copyright">&copy; 2020, Андрей Матанов
    </div>
    </footer>
    `;
};

const renderFooter = () => {
    document.querySelector(".root").innerHTML += returnFooterHTML();
};

export default renderFooter;
