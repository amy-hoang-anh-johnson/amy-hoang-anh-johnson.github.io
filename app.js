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

document.getElementById('button').onclick = function() {
  this.__toggle = !this.__toggle;
  var target = document.getElementById('hidden_content');
  if (this.__toggle) {
    target.style.height = target.scrollHeight + "px";
    this.firstChild.nodeValue = "";
  } else {
    target.style.height = 0;
    this.firstChild.nodeValue = "Show";
  }
}

document.getElementById('button1').onclick = function() {
  this.__toggle = !this.__toggle;
  var target = document.getElementById('hidden_content1');
  if (this.__toggle) {
    target.style.height = target.scrollHeight + "px";
    this.firstChild.nodeValue = "Hide";
  } else {
    target.style.height = 0;
    this.firstChild.nodeValue = "Show";
  }
}

document.getElementById('button2').onclick = function() {
  this.__toggle = !this.__toggle;
  var target = document.getElementById('hidden_content2');
  if (this.__toggle) {
    target.style.height = target.scrollHeight + "px";
    this.firstChild.nodeValue = "Hide";
  } else {
    target.style.height = 0;
    this.firstChild.nodeValue = "Show";
  }
}

document.getElementById('button3').onclick = function() {
  this.__toggle = !this.__toggle;
  var target = document.getElementById('hidden_content3');
  if (this.__toggle) {
    target.style.height = target.scrollHeight + "px";
    this.firstChild.nodeValue = "Hide";
  } else {
    target.style.height = 0;
    this.firstChild.nodeValue = "Show";
  }
}

document.getElementById('button4').onclick = function() {
  this.__toggle = !this.__toggle;
  var target = document.getElementById('hidden_content4');
  if (this.__toggle) {
    target.style.height = target.scrollHeight + "px";
    this.firstChild.nodeValue = "Hide";
  } else {
    target.style.height = 0;
    this.firstChild.nodeValue = "Show";
  }
}

document.getElementById('button5').onclick = function() {
  this.__toggle = !this.__toggle;
  var target = document.getElementById('hidden_content5');
  if (this.__toggle) {
    target.style.height = target.scrollHeight + "px";
    this.firstChild.nodeValue = "Hide";
  } else {
    target.style.height = 0;
    this.firstChild.nodeValue = "Show";
  }
}

document.getElementById('button6').onclick = function() {
  this.__toggle = !this.__toggle;
  var target = document.getElementById('hidden_content6');
  if (this.__toggle) {
    target.style.height = target.scrollHeight + "px";
    this.firstChild.nodeValue = "Hide";
  } else {
    target.style.height = 0;
    this.firstChild.nodeValue = "Show";
  }
}
