var reveal_tooltip = function () {
  var tooltip_name = this.dataset.value;
  var tooltip = document.getElementById(tooltip_name);
  tooltip.style.display = "block";
};

var hide_tooltip = function () {
  var tooltip_name = this.dataset.value;
  var tooltip = document.getElementById(tooltip_name);
  tooltip.style.display = "none";
};

window.onload = function () {
  const targets = document.getElementsByClassName("feature left");

  // change display to 'block' on mouseover
  for (var i = 0; i < targets.length; i++) {
    targets[i].addEventListener("mouseover", reveal_tooltip, false);

    // change display to 'none' on mouseleave
    targets[i].addEventListener("mouseleave", hide_tooltip, false);
  }
};

$(".circle-plus").on("click", function () {
  $(this).toggleClass("opened");
});

$(".circle-plus-two").on("click", function () {
  $(this).toggleClass("opened");
});

const myButtons = document.getElementsByClassName("redirect-button");

for (const myButton of myButtons) {
  myButton.addEventListener("click", function () {
    document.getElementById("hide-categories").style.display = "block";
  });
}
