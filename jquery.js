const SLIDE_LEFT = "animate__animated animate__slideInLeft",
  FADE_IN = "animate__animated animate__fadeIn",
  FADE_OUT = "animate__animated animate__fadeOut";
function removeActive() {
  const a = document.getElementsByClassName("navbar-links");
  for (let b = 0; b < a.length; b++) a[b].classList.remove("active");
}
function setActive(a) {
  removeActive();
  let b = "";
  (b =
    500 > a
      ? "about-link"
      : 1700 > a
      ? "project-link"
      : 3517 > a
      ? "skill-link"
      : "reason-link"),
    document.getElementById(b).classList.add("active");
}
$(window).on("load", () => {
  $("#loading").hide();
}),
  $(window).on("scroll", () => {
    const a = $(window).scrollTop();
    500 < a &&
      (setActive(a),
      $("#projects").addClass(SLIDE_LEFT),
      $(".card-animated").addClass(SLIDE_LEFT)),
      400 > a &&
        (setActive(a),
        $("#projects").removeClass(SLIDE_LEFT),
        $(".card-animated").removeClass(SLIDE_LEFT)),
      3900 < a &&
        ($(".workflow-container").removeClass(FADE_OUT),
        $(".workflow-container").addClass(FADE_IN)),
      3890 > a &&
        ($(".workflow-container").removeClass(FADE_IN),
        $(".workflow-container").addClass(FADE_OUT)),
      5333 < a &&
        ($(".reason-card-container").removeClass(FADE_OUT),
        $(".reason-card-container").addClass(FADE_IN)),
      3890 > a &&
        ($(".reason-card-container").removeClass(FADE_IN),
        $(".reason-card-container").addClass(FADE_OUT)),
      1700 < a &&
        (setActive(a),
        $("#skills").addClass(SLIDE_LEFT),
        $(".card-animated-skill").addClass(SLIDE_LEFT)),
      1600 > a &&
        (setActive(a),
        $("#skills").removeClass(SLIDE_LEFT),
        $(".card-animated-skill").removeClass(SLIDE_LEFT)),
      3517 < a && (setActive(a), $("#reasons").addClass(SLIDE_LEFT)),
      3510 > a && (setActive(a), $("#reasons").removeClass(SLIDE_LEFT));
  }),
  $("#navbar-menu ul li a").on("click", () => {
    961 > window.innerWidth &&
      $.when($("#navbar-menu").fadeOut(1e3)).then(() => {
        document.getElementById("navbar-menu").classList.remove("navbar-in");
      });
  });
