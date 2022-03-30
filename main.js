let slidesContainer = document.querySelector(".container");
let slide = document.querySelector(".slides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let interval = 2000;

let slides = document.querySelectorAll(".img");

let index = 1;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
console.log(lastClone);
firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.appendChild(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[1].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  setInterval(() => {
    nextSlide();
  }, interval);
};
slide.addEventListener("transitionend", () => {
  slides = document.querySelectorAll(".img");
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});
startSlide();

const getSlides = () => {
  return (slides = document.querySelectorAll(".slide"));
};

next.addEventListener("click", nextSlide);

function nextSlide() {
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".5s";
}

prev.addEventListener("click", prevtSlide);

function prevtSlide() {
  if (index <= 0) return
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".5s";
}
