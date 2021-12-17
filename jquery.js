const SLIDE_LEFT = "animate__animated animate__slideInLeft",
  FADE_IN = "animate__animated animate__fadeIn",
  FADE_OUT = "animate__animated animate__fadeOut";
function removeActive() {
  const c = document.getElementsByClassName("navbar-links");
  for (let a = 0; a < c.length; a++) c[a].classList.remove("active");
}
function setActive(c) {
  removeActive();
  let a = "";
  (a =
    500 > c
      ? "about-link"
      : 1700 > c
      ? "project-link"
      : 3517 > c
      ? "skill-link"
      : "reason-link"),
    document.getElementById(a).classList.add("active");
}
$(window).on("load", () => {
  $("#loading").hide();
}),
  $(window).on("scroll", () => {
    const b = $(window).scrollTop();
    500 < b &&
      (setActive(b),
      $("#projects").addClass(SLIDE_LEFT),
      $(".card-animated").addClass(SLIDE_LEFT)),
      400 > b &&
        (setActive(b),
        $("#projects").removeClass(SLIDE_LEFT),
        $(".card-animated").removeClass(SLIDE_LEFT)),
      3900 < b &&
        ($(".workflow-container").removeClass(FADE_OUT),
        $(".workflow-container").addClass(FADE_IN)),
      3890 > b &&
        ($(".workflow-container").removeClass(FADE_IN),
        $(".workflow-container").addClass(FADE_OUT)),
      5333 < b &&
        ($(".reason-card-container").removeClass(FADE_OUT),
        $(".reason-card-container").addClass(FADE_IN)),
      3890 > b &&
        ($(".reason-card-container").removeClass(FADE_IN),
        $(".reason-card-container").addClass(FADE_OUT)),
      1700 < b &&
        (setActive(b),
        $("#skills").addClass(SLIDE_LEFT),
        $(".card-animated-skill").addClass(SLIDE_LEFT)),
      1600 > b &&
        (setActive(b),
        $("#skills").removeClass(SLIDE_LEFT),
        $(".card-animated-skill").removeClass(SLIDE_LEFT)),
      3517 < b && (setActive(b), $("#reasons").addClass(SLIDE_LEFT)),
      3510 > b && (setActive(b), $("#reasons").removeClass(SLIDE_LEFT));
  }),
  $("#navbar-menu ul li a").on("click", () => {
    961 > window.innerWidth &&
      $.when($("#navbar-menu").fadeOut(1e3)).then(() => {
        document.getElementById("navbar-menu").classList.remove("navbar-in");
      });
  });
