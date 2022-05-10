const body = document.querySelector('body');
const footer = document.querySelector('footer');
function lightm() {
  toggle002.classList.toggle('active')
  body.classList.toggle('active')
  C002.classList.toggle('active')
  nv002.classList.toggle('active')
  side002.classList.toggle('active')
  footer.classList.toggle('active')
}
function myFunction() {
  var x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function age() {
  document.getElementById("ol2").style.display = "block";
}

function off() {
  document.getElementById("ol2").style.display = "none";
}
function done() {
  alert("Your form has been submitted succesfully")
}
function scfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
