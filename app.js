function toggleNavbar() {
  const b = document.getElementById("navbar-menu").classList;
  b.contains("navbar-in")
    ? (b.remove("navbar-in"), b.add("navbar-out"))
    : ((document.getElementById("navbar-menu").style.display = "block"),
      b.remove("navbar-out"),
      b.add("navbar-in"));
}
window.addEventListener("resize", () => {
  if (961 < window.innerWidth) {
    const b = document.getElementById("navbar-menu");
    (b.style.display = "block"), b.classList.remove("navbar-out");
  }
});
