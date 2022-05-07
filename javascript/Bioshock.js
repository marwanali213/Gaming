const body = document.querySelector('body');
toggle.onclick=function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    c.classList.toggle('active')
    nv1.classList.toggle('active')
    side.classList.toggle('active')
    fff.classList.toggle('active')
    li.classList.toggle('active')
}
function myFunction() {
    var x = document.getElementById("fr001");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }