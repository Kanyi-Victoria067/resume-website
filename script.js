// only works when ids written in the head match ones written in the sections
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  //select all links beginning with #
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); //prevents default jump behaviour

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      //checks if the target section actually exists on the page
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Show/hide the button based on scroll position
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (
    document.body.scrollTop > 100 || //show button when user sccrolls more than 100px
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block"; // Show the button
  } else {
    btn.style.display = "none"; // Hide it
  }
};

// Scroll smoothly to the top when button is clicked
document.getElementById("topBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0, //go to the top of the page
    behavior: "smooth", //scroll smoothly instead of jumping
  });
});
