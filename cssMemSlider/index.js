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

function dotClick(event) {
  const activeSlide = document.querySelector(".dot.active");
  if (activeSlide) {
    activeSlide.classList.remove("active");
  }
  const slideId = +event.target.dataset.id;
  slide.setAttribute("src", `./assets/${sliderProps[slideId - 1].img}`);
  slide.setAttribute("alt", sliderProps[slideId - 1].desc);
  sliderDesc.innerText = sliderProps[slideId - 1].desc;
  event.target.classList.add("active");
}

dotsContainer.addEventListener("click", dotClick);
