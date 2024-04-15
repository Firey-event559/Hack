document.querySelector(".container").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  
  var container = this;
  var newPositionX = Math.random() * (window.innerWidth - container.offsetWidth);
  var newPositionY = Math.random() * (window.innerHeight - container.offsetHeight);
  
  container.style.position = "absolute"; // Ensure container position is absolute
  container.style.left = newPositionX + "px";
  container.style.top = newPositionY + "px";
});