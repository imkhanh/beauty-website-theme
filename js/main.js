const search = document.querySelector(".btn-search");
const searchInput = document.querySelector(".search-input");

search.addEventListener("click", () => {
  searchInput.classList.toggle("search-show");
});

