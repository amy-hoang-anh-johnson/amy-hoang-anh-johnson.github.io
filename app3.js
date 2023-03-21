
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

$(document).ready(() => {
  $(".button1").click(function(){
  $(this).closest(".reveal").find(".hidden_content").slideToggle();
}).click(function(){
  $(event.currentTarget).toggleClass('rotated');
}) });
