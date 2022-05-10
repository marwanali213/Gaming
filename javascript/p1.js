function mUp(obj) {
  obj.style.backgroundColor="#cbb4b4";

  obj.innerHTML="Thanks";
}
function mdown(obj) {
  obj.style.backgroundColor="#cbb4b4";

  obj.innerHTML= "contact us";
}
function myFunction() {

let x = document.getElementById("numb").value;

let text;
if (isNaN(x) ||x>5) {
text = "awesome";
} else {
text = "contact us ";
}
document.getElementById("demo").innerHTML = text;
}

function changeText(id) {
  id.style.color = "red";}
