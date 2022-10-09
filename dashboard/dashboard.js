// ACTIVE LINK
var header = document.getElementById("nav-list");
var activeLink = header.getElementsByClassName("active-link");
for (var i = 0; i < activeLink.length; i++) {
  activeLink[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-link");
  current[0].className = current[0].className.replace(" active-link", "");
  this.className += " active-link";
  });
}

