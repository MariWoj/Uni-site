// handle burger icon
const burger = document.querySelector(".burger");
const navigation = document.querySelector(".menu__list");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    navigation.classList.toggle("active");
})

// handle dropdown menu
const itemDropdown = document.querySelectorAll('.menu__item--dropdown');

itemDropdown.forEach((item, id) => {
    item.addEventListener('click', function () {
        const removeClass = [...itemDropdown].filter((itemDropdown, index) => index !== id);
        removeClass[0].classList.remove("open");
        item.classList.toggle("open");
    })
});

// handle adding title to menu
const menu = document.querySelector(".menu");

function addTitleToMenu() {
    const div = document.createElement('div');

    div.setAttribute('class', 'menu__title');
    div.innerText = "Zakład geografii fizycznej";

    const isDivExist = document.querySelector('.menu__title');
    if (!isDivExist) {
        menu.appendChild(div);
    }
}

function removeTitleFromMenu() {
    const divToRemove = document.querySelector('.menu__title');
    if (divToRemove) {
        menu.removeChild(divToRemove);
    }
}

window.addEventListener('scroll', () => {
    if (menu.offsetTop >= 260) {
        addTitleToMenu();
    }

    if (menu.offsetTop < 260) {
        removeTitleFromMenu();
    }
})
