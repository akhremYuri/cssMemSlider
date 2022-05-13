const sliderProps = [
  {
    img: "jad-limcaco.jpg",
    desc: "Grand Canyon National Park, United States",
  },
  {
    img: "quinn-nietfeld.jpg",
    desc: "Colorful Grand Canyon",
  },
  {
    img: "sonaal-bangera.jpg",
    desc: "Unnamed Road, Cameron, USA, United States",
  },
  {
    img: "tom-gainor.jpg",
    desc: "Horseshoe Bend, Page, United States",
  },
];

const slide = document.querySelector("#slide");
const sliderDesc = document.querySelector("#slide-description");
const dotsContainer = document.querySelector("#dots-container");
let slideId = 1;

function dotClick(event) {
  const activeSlide = document.querySelector(".dot.active");
  if (activeSlide) {
    activeSlide.classList.remove("active");
  }
  slideId = +event.target.dataset.id;
  event.target.classList.add("active");
  sliderDesc.classList.add("slidein");
  slide.classList.add("opacityoff");
}

function slideDescAnimationIteration() {
  sliderDesc.innerText = sliderProps[slideId - 1].desc;
}

function slideAnimationIteration() {
  slide.setAttribute("src", `./assets/${sliderProps[slideId - 1].img}`);
  slide.setAttribute("alt", sliderProps[slideId - 1].desc);
}

function sliderDescClassRemove() {
  if (sliderDesc.classList.contains("slidein"))
    sliderDesc.classList.remove("slidein");
}

function slideOffEnd() {
  if (slide.classList.contains("opacityoff"))
    slide.classList.remove("opacityoff");
}

dotsContainer.addEventListener("click", dotClick);
sliderDesc.addEventListener("animationend", sliderDescClassRemove);
sliderDesc.addEventListener("animationiteration", slideDescAnimationIteration);
slide.addEventListener("animationend", slideOffEnd);
slide.addEventListener("animationiteration", slideAnimationIteration);
