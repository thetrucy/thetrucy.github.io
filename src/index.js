
  const leaf = document.getElementById('leaf');
  const hill1 = document.getElementById('hill1');
  const hill4 = document.getElementById('hill4');
  const hill5 = document.getElementById('hill5');
  const text = document.getElementById('text');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (text) {
      text.style.marginTop = value * -1.5 + 'px';
    }

    if (leaf) {
      leaf.style.top = value * -1.5 + 'px';
      leaf.style.left = value * 1.5 + 'px';
    }

    if (hill1) {
      hill1.style.top = value * 1 + 'px';
    }

    if (hill4) {
      hill4.style.left = value * -1.5 + 'px';
    }

    if (hill5) {
      hill5.style.left = value * 1.5 + 'px';
    }
  });
  window.addEventListener("scroll", () => {
    const heart = document.getElementById("heart2");
    const scrollPosition = window.scrollY;
  
    // Make the heart visible after scrolling down 300px
    if (scrollPosition > 500 && scrollPosition <= 800) {
      heart.style.opacity = "1";
      heart.style.top = "35%"; // Adjust the multiplier as needed
    } else if (scrollPosition > 800 && scrollPosition <= 900) {
      heart.style.opacity = "0.5"; // Fade out
      heart.style.top = "-25%"; // Move off-screen
    } else if (scrollPosition > 900){
      heart.style.opacity = "0"; // Fade out
      heart.style.top = "-100%"; // Move off-screen
    }
    else {
      heart.style.opacity = "0"; // Hide when scrolling up
      heart.style.top = "200%";
    }
  });

var aText = new Array(
  "I love your smile, it lights up my day whenever I meet you. I hope that you can always be happy.",
  "You are under a lot of pressure, but that's okay, just know that I am by your side and I will help you as much as possible.",
  "You don't need to be perfect, no matter how people judge you, I will always believe in you.",
  "Don't be scared of anything. You are loved."
  );
  var iSpeed = 80; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
    
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
    
  function typewriter()
  {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
  }
typewriter();
const noButton = document.querySelector(".no-button");
const sec2 = document.querySelector(".sec2");
let firstHover = true;

// Handle "No" button hover
noButton.addEventListener('mouseenter', runAway);

function runAway() {
  if (firstHover) {
    noButton.classList.remove('no-button');
    noButton.classList.add('absolute-position');  // Change to absolute position on first hover
    firstHover = false;  // After the first hover, this flag is set to false
  }
  const sec2Rect = sec2.getBoundingClientRect();

  // Calculate random X and Y within .sec2 boundaries
  const randomX =
    Math.random() * (sec2Rect.width - noButton.offsetWidth) + sec2Rect.left;
  const randomY =
    Math.random() * (sec2Rect.height - noButton.offsetHeight) + sec2Rect.top;
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Handle "Yes" button click
let first = true;
function spawnHearts() {
  const sec2 = document.querySelector(".sec2"); // Select the .sec2 section
  const sec2Rect = sec2.getBoundingClientRect();
    if(first){
    document.getElementById("ques").remove();
    typeWriter(document.getElementById("new"), "Hello, my love.");
    first = false;
    }
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    const x = Math.random() * (sec2Rect.width - 50);
    const y = Math.random() * (sec2Rect.height - 50);
    heart.style.position = "absolute";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    sec2.appendChild(heart);

    // Remove the heart after animation
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}
// Function to detect when the h2 is in view
const typingHeader = document.getElementById("mess");
const textToType = typingHeader.getAttribute("data-text");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener("scroll", () => {
  if (isElementInViewport(typingHeader) && !typingHeader.classList.contains('typed')) {
    typeWriter(typingHeader, textToType);
    typingHeader.classList.add('typed');
  }
});