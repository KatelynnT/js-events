// window.addEventListener('click', function (event) {
//   console.log("== Window was clicked, event:");
// });

function boxClickListener(event) {
  console.log("== A box was clicked");
  console.log("  -- event.target:", event.target);
  console.log("  -- event.currentTarget:", event.currentTarget);
}

// var boxes = document.getElementsByClassName('box');
// for (var i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener('click', boxClickListener);
// }

// var buttons = document.getElementsByClassName('in-box-button');
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function (event) {
//     console.log("== A button was clicked");
//     event.stopPropagation();
//     var boxParent = event.currentTarget.parentNode;
//     boxParent.classList.toggle('highlighted');
//   });
// }

var boxContainer = document.getElementById('box-container');
boxContainer.addEventListener('click', function (event) {
  console.log("== Container clicked, event.target:", event.target);
  if (event.target.classList.contains('in-box-button')) {
    console.log("  -- A button was clicked");
    event.target.parentNode.classList.toggle('highlighted');
  }
});

var websiteLink = document.getElementById('website-link');
websiteLink.addEventListener('click', function (event) {
  event.preventDefault();
  console.log("== The link was clicked");
});

// window.onclick = function () {};
