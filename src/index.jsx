
const noButton = document.querySelector(".no-button");
let firstHover = true;

// Handle "No" button hover
noButton.addEventListener('mouseenter', runAway);

function runAway() {
  if (firstHover) {
    noButton.classList.remove('no-button');
    noButton.classList.add('absolute-position');  // Change to absolute position on first hover
    firstHover = false;  // After the first hover, this flag is set to false
  }
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);

    // Function to simulate typing effect
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type(); // Start typing effect
  }

// Handle "Yes" button click
let first = true;
function spawnHearts() {
    if(first){
    document.getElementById("demo").remove();
    typeWriter("new", "Hello, my love.", 100); 
    first = false;
    }
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    // Remove the heart after animation
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}
