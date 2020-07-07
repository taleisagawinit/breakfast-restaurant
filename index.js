document.querySelector(".menu-icon").addEventListener("click", function() {
  document.querySelector(".menu-links").classList.toggle("toggle-menu");
})

document.querySelector(".close-icon").addEventListener("click", function() {
  document.querySelector(".menu-links").classList.toggle("toggle-menu");
})

document.querySelectorAll(".menu-link-button").forEach(function(item) {
  item.addEventListener("click", function() {
    document.querySelector(".menu-links").classList.remove("toggle-menu");
  })
})
