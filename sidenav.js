/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  if (x.matches) {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
  } else {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  }
}

var x = window.matchMedia("(max-width: 450px)")
openNav(x)
x.addListener(openNav)

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Original
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
} */