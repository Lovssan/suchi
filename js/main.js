//dropdown меню для узких экранов
document.getElementById("dropmenu").addEventListener("click", () => {
  document.getElementsByClassName("swipe-menu")[0].classList.add("m");
  document.getElementsByClassName("overlay")[0].classList.add("activmenu");
});
document.getElementById("closer").addEventListener("click", () => {
  document.getElementsByClassName("swipe-menu")[0].classList.remove("m");
  document.getElementsByClassName("overlay")[0].classList.remove("activmenu");
});
//Slider
let sliderImages = document.querySelectorAll(".slider-img");
let sliderLine = document.querySelector(".swipe-images");
let btnPrev = document.querySelector(".prevarr");
let btnNext = document.querySelector(".nextarr");
let sliderCount = 0,
  sliderWidth = null;

// Кнопки листания слайдов вперед и назад
btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
let interval;
interval = setInterval(nextSlide, 5000);

// Перелистывает слайд вперед
function nextSlide() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;

  rollSlider();
}

// Перелистывает слайд назад
function prevSlide() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);

  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;

  rollSlider();
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderWidth = document.querySelector(".main").offsetWidth;
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

//скролл меню до карточек
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("nav-main").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".menu-m").addEventListener("click", function () {
  document.getElementById("nav-main").scrollIntoView({ behavior: "smooth" });
});
// иконка добавления в корзину
document.querySelector(".inbag").addEventListener("click", () => {
  document.querySelector(".inbag").src = "./Photos/logo/корзина добавление.png";
  setTimeout(() => {
    document.querySelector(".inbag").src = "./Photos/logo/корзина.png";
  }, 1500);
});
//меню с других страниц
// let meni123=['menu1','menu2','menu3'];
// console.log('')
// for (let i = 0; i < meni123.length; i++) {
//   console.log(document.getElementById(meni123[i]).innerHtml)
//   document.getElementById(meni123[i]).addEventListener("click", function () {
//     debugger;
//     alert('234e')
//     document.getElementById("nav-main").scrollIntoView({ behavior: "smooth" });
//   });

//переключение между едами
document.getElementById("roll").addEventListener("click", () => {
  document.getElementsByClassName("container-cards")[0].classList.add("roll");
  document
    .getElementsByClassName("container-cards")[1]
    .classList.remove("pizza");
  document
    .getElementsByClassName("container-cards")[2]
    .classList.remove("nabor");
  document
    .getElementsByClassName("container-cards")[3]
    .classList.remove("dobavki");
});
document.getElementById("pizza").addEventListener("click", () => {
  document
    .getElementsByClassName("container-cards")[0]
    .classList.remove("roll");
  document.getElementsByClassName("container-cards")[1].classList.add("pizza");
  document
    .getElementsByClassName("container-cards")[2]
    .classList.remove("nabor");
  document
    .getElementsByClassName("container-cards")[3]
    .classList.remove("dobavki");
});

document.getElementById("nabor").addEventListener("click", () => {
  document
    .getElementsByClassName("container-cards")[0]
    .classList.remove("roll");
  document
    .getElementsByClassName("container-cards")[1]
    .classList.remove("pizza");
  document.getElementsByClassName("container-cards")[2].classList.add("nabor");
  document
    .getElementsByClassName("container-cards")[3]
    .classList.remove("dobavki");
});
document.getElementById("dobavki").addEventListener("click", () => {
  document
    .getElementsByClassName("container-cards")[0]
    .classList.remove("roll");
  document
    .getElementsByClassName("container-cards")[1]
    .classList.remove("pizza");
  document
    .getElementsByClassName("container-cards")[2]
    .classList.remove("nabor");
  document
    .getElementsByClassName("container-cards")[3]
    .classList.add("dobavki");
});
let menu = document.getElementsByClassName("nava");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", (event) => {
    if (menu[i] === event.currentTarget) {
      menu[0].classList.remove("nava-current");
      menu[1].classList.remove("nava-current");
      menu[2].classList.remove("nava-current");
      menu[3].classList.remove("nava-current");
      menu[i].classList.add("nava-current");
    }
  });
}
