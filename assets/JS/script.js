// STICKY NAVBAR

// Get the .nav element and add event listener

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

// get all a tags with the btn class

const buttons = nav.getElementsByClassName("btn");

// Function to compare navbar position on the page and set an active status once a condition is met

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// Loop through the buttons and add the current class to the current/clicked button

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace(" current", "");
    this.className += " current";
  });
}
