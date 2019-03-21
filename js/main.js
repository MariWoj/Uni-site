const burger = document.querySelector(".burger");
const navigation = document.querySelector("nav ul");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    navigation.classList.toggle("active");
})
