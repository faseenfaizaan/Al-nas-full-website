let menubtn = document.getElementById("menubtn");

menubtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

let typed = new Typed(".auto-input", {
  strings: ["Design.", "Print.", "Deliver."],
  typeSpeed: 100,
  backspeed: 100,
  backdelay: 2000,
  loop: true,
});
