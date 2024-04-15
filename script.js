document
  .getElementById("runaway-button")
  .addEventListener("click", function () {
    var button = this;
    var newPositionX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newPositionY =
      Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = newPositionX + "px";
    button.style.top = newPositionY + "px";
  });


for (let i = 0; i < 1000000; i++) {
  console.log(i);
}
 


