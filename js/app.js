var myButton = document.querySelector("#myButton")
var heading = document.querySelector("h1")
var toggle = null

function yell() {
  toggle = !toggle
  heading.innerText = toggle
}

function headingYell() {
  myButton.innerText = "I did it!!"
}

myButton.addEventListener("click", yell)
heading.addEventListener("mouseover", headingYell)


function () {}
console.log("Boom");
}
