const reviews = [
  {
    id: 1,
    text: "Everything you need to know about building startup other than coding. Milestone based earnings upto USD $1000.",
    stars: 1,
  },
  {
    id: 2,
    text: "We believe humanity's survival depends on us being a spacefaring civilisation and future deep tech founders will lead the way.",
    stars: 2,
  },
  {
    id: 3,
    text: "Get paid to learn the initial 2 months of founder journey that covers everything other than engineering. We trust your coding skills.",
    stars: 3,
  },
];

const navLinks = document.querySelectorAll(".sidebar li");
console.log(navLinks);

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    let activeElements = document.querySelector(".active");
    if (activeElements != null) {
      activeElements.classList.remove("active");
    }
    link.classList.add("active");
  });
});
const reviewsElement = document.getElementById("review");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

let currentItem = 0;
const stars = document.querySelector(".stars");
console.log(stars);

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  stars.innerHTML = " ";
  for (i = 0; i < item.stars; i++) {
    stars.innerHTML += `<i class="fa-solid fa-star"></i>`;
  }

  reviewsElement.children[0].textContent = item.text;
});

prev.addEventListener("click", function () {
  currentItem--;
  stars.innerHTML = " ";
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  item = reviews[currentItem];
  console.log(item.stars);
  for (i = 0; i < item.stars; i++) {
    stars.innerHTML += `<i class="fa-solid fa-star"></i>`;
  }
  reviewsElement.children[0].textContent = item.text;
});

next.addEventListener("click", function () {
  currentItem++;

  console.log(currentItem);
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  item = reviews[currentItem];
  stars.innerHTML = " ";
  for (i = 0; i < item.stars; i++) {
    stars.innerHTML += `<i class="fa-solid fa-star"></i>`;
  }
  reviewsElement.children[0].textContent = item.text;
});

// on hover user

const userImages = document.querySelectorAll(".user img");
const nameVisible = document.querySelectorAll(".user .name");

nameVisible.forEach((name) => {
  name.addEventListener("mouseover", function () {
    name.style.display = "block";
  });
  name.addEventListener("mouseout", function () {
    name.style.display = "none";
  });
});

userImages.forEach((image) => {
  image.addEventListener("mouseover", function () {
    image.nextElementSibling.style.display = "block";
  });
  image.addEventListener("mouseout", function () {
    image.nextElementSibling.style.display = "none";
  });
});

const aboutUs = document.getElementById("about-us");
const titleSection = document.getElementById("title-section");

aboutUs.addEventListener("click", function () {
  if (titleSection.classList.contains("show-title-section")) {
    titleSection.classList.remove("show-title-section");
    aboutUs.classList.remove("active");
  } else {
    titleSection.classList.add("show-title-section");
    aboutUs.classList.add("active");
  }

  // titleSection.classList.toggle("show-title-section");
});
// titleSection.style.transform = "scale(1.5)";

let searchSuggestions = [
  {
    id: 1,
    name: "David Raum",
    img: "https://cdn.fs.teachablecdn.com/TdbTrEo5TkGv40hXNrCN",
  },
  {
    id: 2,
    name: "Rashmi Tirke",
    img: "https://cdn.fs.teachablecdn.com/Uf8ZAKWtTGGO8jPVyzi3",
  },
  {
    id: 3,
    name: "Ragini Malhotra",
    img: "https://cdn.fs.teachablecdn.com/44zQyTIPT5a8nqK2bkUX",
  },
  {
    id: 4,
    name: "Bailee Cooper",
    img: "https://cdn.fs.teachablecdn.com/wgiet3NFRvO2zWrAf7n6",
  },
  {
    id: 5,
    name: "Jason Miller",
    img: "https://cdn.fs.teachablecdn.com/pSMNpPEQ7qEAhujaurRp",
  },
  {
    id: 6,
    name: "Rob Nielsen",
    img: "https://cdn.fs.teachablecdn.com/A2GPqp7OSrqIi7vEA4VY",
  },
  {
    id: 7,
    name: "AI For Good",
    img: "./assets/aiforgood_withbg-removebg-preview.png",
  },
  {
    id: 8,
    name: "Y Combinator",
    img: "./assets/ycombinator_withbg-removebg-preview.png",
  },
  {
    id: 9,
    name: "Stanford University",
    img: "./assets/stanford_withbg-removebg-preview.png",
  },
];

// Search Bar Functionality

const searchBar = document.querySelector("[data-search]");
const suggestionTemplate = document.querySelector("[data-suggestion-template]");
const suggestionContainer = document.querySelector(
  "[data-suggestions-container]"
);

let suggestions = [];
console.log(suggestions);
searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  // hide the suggestions when there is no input
  if (e.target.value.length === 0) {
    searchBar.style.overflow = "hidden";
  }

  if (value) {
    searchBar.style.overflow = "visible";
  }

  suggestions.forEach((suggestion) => {
    const isVisible =
      suggestion.image.toLowerCase().includes(value) ||
      suggestion.name.toLowerCase().includes(value);
    // This will toggle the hide class when isVisible will be false .
    // also this part of the code confused me a bit
    suggestion.element.classList.toggle("hide", !isVisible);
  });
});

// populate suggestions

suggestions = searchSuggestions.map((searchSuggestion) => {
  // the template tag is used here and it will be used for every suggestion to generate the template dynamically.
  const suggestion = suggestionTemplate.content.cloneNode(true).children[0];
  const suggestionImg = suggestion.querySelector("[data-suggestion-img]");
  // console.log(suggestionImg);
  const suggestionName = suggestion.querySelector("[data-suggestion-name]");
  suggestionImg.src = searchSuggestion.img;
  suggestionName.textContent = searchSuggestion.name;
  suggestionContainer.append(suggestion);
  return {
    image: searchSuggestion.img,
    name: searchSuggestion.name,
    element: suggestion,
  };
});

let posts = [];

//slider/carousel component in the middle section

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// this forEach sets out the entire list-like layout for each slide on which the Carousel can act.
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

// setInterval used so that no buttons will be required.

setInterval(() => {
  counter++;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  carousel();
}, 5000);

// this commented code below was from John Smilga course. The only problem my above code faces is that it cannot move forward once it hits the last index. I had to build other parts of the whole dashboard so just stopped at this one.

// prevBtn.addEventListener("click", function () {
//   counter--;
//   if (counter < 0) {
//     counter = slides.length - 1;
//   }
//   carousel();
//   console.log(counter);
// });

// nextBtn.addEventListener("click", function () {
//   counter++;
//   if (counter > slides.length - 1) {
//     counter = 0;
//   }
//   carousel();
//   console.log(counter);
// });

// the function that pushes the slides according to their indexes.

function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// selectors for the faq section.

const faqs = document.querySelectorAll(".faq");
const faqContainer = document.querySelector(".faqs");
const answer = document.querySelector(".answer");

faqs.forEach((faq) => {
  faq.addEventListener("click", function () {
    // HIDE THE ALREADY OPENED FAQs
    faqs.forEach((faqQuestion) => {
      if (faqQuestion.classList.contains("active")) {
        faqQuestion.classList.toggle("active");
      }
    });
    // toggle the existing faq
    faq.classList.toggle("active");
  });
});
