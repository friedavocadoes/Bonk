const clickableText = document.getElementById('clickableText');
const navLinks = document.querySelector('nav ul');
const signupSection = document.getElementById('signup');
let textMoved = false;


// Add class for the text movement animation
const moveTextToNavbar = () => {
  if (!textMoved) {
    clickableText.classList.add('text-moved');
    const newText = document.createElement('li');
    newText.innerText = 'Moved Text';
    navLinks.appendChild(newText);
    textMoved = true;
  }
};

// Remove the class for the centering animation
const moveTextToCenter = () => {
  clickableText.classList.remove('text-moved');
};

// Adjust the event handler for scrolling back to move text back to center
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const mainSection = document.getElementById('mainSection');

  if (scrollPosition > mainSection.clientHeight && !textMoved) {
    moveTextToNavbar();
    signupSection.scrollIntoView({ behavior: 'smooth' });
  }

  if (scrollPosition < mainSection.clientHeight && textMoved) {
    moveTextToCenter();
    navLinks.lastChild.remove();
    textMoved = false;
  }
});

// Event handler for clicking the text
clickableText.addEventListener('click', () => {
  moveTextToNavbar();
  signupSection.scrollIntoView({ behavior: 'smooth' });
});
//asdadadadad

// Function to move the text to the navbar


// Event handler for when the page is scrolled
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const mainSection = document.getElementById('mainSection');

  if (scrollPosition > (mainSection.clientHeight) && !textMoved) {
    moveTextToNavbar();
    signupSection.scrollIntoView({ behavior: 'smooth' });
  }

  if (scrollPosition < mainSection.clientHeight && textMoved) {
    clickableText.style.display = 'block';
    navLinks.lastChild.remove();
    textMoved = false;
  }
});

// Event handler for clicking the text
clickableText.addEventListener('click', () => {
  moveTextToNavbar();
  signupSection.scrollIntoView({ behavior: 'smooth' });
});
