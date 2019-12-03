window.onscroll = function() {scrollFunct()};



var header = document.getElementById("c_navBar");
var sticky = header.offsetTop + 70;



function scrollFunct() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}