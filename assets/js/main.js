// Search container
const searchContainer = document.querySelector(".header__option .search__container");
const searchInput = document.querySelector(".search__container .search-input");

searchInput.onfocus = () => {
  searchContainer.classList.add("active");
}

searchInput.onblur = () => {
  searchContainer.classList.remove("active");
}

// === SWIPER ===
// Category
const categorySwiper = new Swiper('.category__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 8,
  spaceBetween: 32,
  navigation: {
    nextEl: '.category-next',
    prevEl: '.category-prev',
  },
})

// Feedback
const feedbackSwiper = new Swiper('.feedbacks__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.feedbacks__pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.feedbacks-next',
    prevEl: '.feedbacks-prev',
  },
})