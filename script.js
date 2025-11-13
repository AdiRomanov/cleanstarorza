// ========== Navbar Function
window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

// ========== Toggle Menu
function toggleMenu(){
    const menuBar = document.querySelector(".menuToggle");
    const nav = document.querySelector(".nav");
    menuBar.classList.toggle('active');
    nav.classList.toggle('active');
}

// ===== Formular servicii: toggle vizibilitate =====

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("showOrderForm");
  const formContainer = document.getElementById("orderFormContainer");
  const closeButton = document.getElementById("closeForm");

  toggleButton.addEventListener("click", () => {
    formContainer.style.display = "block";
    formContainer.scrollIntoView({ behavior: "smooth" });
    toggleButton.style.display = "none";
  });

  closeButton.addEventListener("click", () => {
    formContainer.style.display = "none";
    toggleButton.style.display = "inline-block";
  });
});