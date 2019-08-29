const slideList = [{
    img: "./img/loess1.jpg",
},
{
    img: "./img/loess2.jpg",
},
{
    img: "./img/loess3.jpg",
}
];

const image = document.querySelector('.slider__img');
const dots = [...document.querySelectorAll('.slider__dots-span')];
const time = 5000;
let active = 0;
const leftArrow = document.querySelector('.icon-left-circle');
const rightArrow = document.querySelector('.icon-right-circle');

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active >= slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    changeDot()
};

let interval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        switch (e.keyCode) {
            case 37:
                active--;
                if (active < 0) {
                    active = 2;
                }
                image.src = slideList[active].img;
                changeDot();
                clearInterval(interval);
                break;
            case 39:
                active++;
                if (active > 2) {
                    active = 0;
                }
                image.src = slideList[active].img;
                changeDot();
                clearInterval(interval);
                break;
        }
        interval = setInterval(changeSlide, time);
    }
}

const changeSlideLeft = () => {
    clearInterval(interval);
    active--;
    if (active < 0) {
        active = 2;
    }
    image.src = slideList[active].img;
    changeDot();
    interval = setInterval(changeSlide, time)
}

const changeSlideRight = () => {
    clearInterval(interval);
    active++;
    if (active > 2) {
        active = 0;
    }
    image.src = slideList[active].img;
    changeDot();
    interval = setInterval(changeSlide, time)
}

window.addEventListener('keydown', keyChangeSlide);
leftArrow.addEventListener('click', changeSlideLeft);
rightArrow.addEventListener('click', changeSlideRight);

dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        clearInterval(interval);
        active = index;
        image.src = slideList[active].img;
        changeDot();
        interval = setInterval(changeSlide, time)
    })
});

function scrollWin() {
    window.scrollTo(500, 0);
}