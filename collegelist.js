// JavaScript function to navigate to the selected college section
function navigateToCollege(collegeId) {
    if (collegeId) {
        var section = document.getElementById(collegeId);
        if (section) {
            // Get the position of the target section
            var offsetTop = section.offsetTop;

            // Smooth scroll animation
            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  scrollToTop(1500); // Set the duration of the scroll animation (in milliseconds)
}

function scrollToTop(duration) {
  const start = window.scrollY;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const timeElapsed = currentTime - startTime;
    const run = easeInOut(timeElapsed, start, -start, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOut(t, b, c, d) {
    // Robert Penner's easeInOut function
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animateScroll);
}





