let titleText = "DarkyyTweaks";
let currentText = "";
let isDeleting = false;
let i = 0;
let speed = 150; 
let deleteSpeed = 100; 
let loopDelay = 1000; 
let finalDelay = 1000; 

function updateTitle() {
  if (!isDeleting) {
    currentText = titleText.substring(0, i);
    i++;
    if (i > titleText.length) {
      setTimeout(function() {
        isDeleting = true;
        updateTitle();
      }, loopDelay);
    } else {
      document.title = currentText;
      setTimeout(updateTitle, speed);
    }
  } else {
    currentText = titleText.substring(0, i);
    i--;
    if (i <= 1) { 
      setTimeout(function() {
        document.title = "D";
        setTimeout(function() {
          isDeleting = false; 
          updateTitle(); 
        }, finalDelay); 
      }, loopDelay);
    } else {
      document.title = currentText;
      setTimeout(updateTitle, deleteSpeed);
    }
  }
}

window.onload = function() {
  updateTitle(); 
};
