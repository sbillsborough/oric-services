// STICKY NAVBAR

// Get the .nav element and add event listener

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

// Function to compare navbar position on the page and set an active status once a condition is met

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

//
