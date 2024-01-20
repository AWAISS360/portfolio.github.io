
// COPIED TO CLIPBOARD FUNCTION
document.getElementById('emailPU').addEventListener('click', function () {
    const text = this.textContent; // Get the text content
    navigator.clipboard.writeText(text) // Copy text to clipboard
      .then(() => {
        console.log('Text copied to clipboard:', text);
        // Optionally, you can show a message or perform other actions on successful copy
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Unable to copy text to clipboard', err);
        // Handle errors, such as browser support or permission issues
        alert('Failed to copy text to clipboard');
      });
  });
  
  // LOGIN POP UP FUNCTION
  const elementToChange = document.getElementById("bgLogPU");
  const toggleButton = document.getElementById("logBtn");
  const exitButton = document.getElementById("extBtn");
  
  toggleButton.addEventListener("click", function () {
    if (elementToChange.style.display === "none" || elementToChange.style.display === "") {
      elementToChange.style.display = "flex"; // Show the element
    } else {
      elementToChange.style.display = "none"; // Hide the element
    }
  });
  
  exitButton.addEventListener("click", function () {
    if (elementToChange.style.display === "flex") {
      elementToChange.style.display = "none"; // Hide the element
    } else {
      elementToChange.style.display = "flex"; // Show the element
    }
  });
  
  // LINKS FUNCTIONS SCRIPT
  const elementToChangeA = document.getElementById("link1")
  const elementToChangeB = document.getElementById("link2")
  const elementToChangeC = document.getElementById("link3")
  const toggleButtonA = document.getElementById("link")
  
  toggleButtonA.addEventListener("click", function () {
    elementToChangeA.classList.toggle('new1');
    elementToChangeB.classList.toggle('new2');
    elementToChangeC.classList.toggle('new3');
  });
  
  // EMAIL POP UP
  const elementToChangeD = document.getElementById("emailPU");
  
  elementToChangeA.addEventListener("click", function () {
    if (elementToChangeD.style.display === "none" || elementToChangeD.style.display === "") {
      elementToChangeD.style.display = "block"; // Show the element
    } else {
      elementToChangeD.style.display = "none"; // Hide the element
    }
  })
  
  const slide1 = document.getElementById("slide1");
  const fadeBtn = document.getElementById("fadeOut");
  
  function fadeOut() {
    const fadeDiv = document.getElementById('tenX');
    slide1.classList.add('fade-out');
    fadeDiv.classList.add('fade-out'); // Add 'fade-out' class to initiate fade-out effect
  };
  
  
  fadeBtn.addEventListener("click", function () {
    if (fadeBtn.style.display === "block" || fadeBtn.style.display === "") {
      fadeBtn.style.display = "none";
    } else {
      fadeBtn.style.display = "block";
    }
  });
  
  // BACKGROUND ANIMATION
  
  const bgAnimation = document.getElementById("bgAnimation");
  const numberOfColorBoxes = 400;
  
  for (let index = 0; index < numberOfColorBoxes; index++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
  }
  
  // MEDIA LEFT BLOCK JS
  
  const elementToChangeE = document.getElementById("leftBlock");
  const elementToChangeF = document.getElementById("one");
  const elementToChangeG = document.getElementById("two");
  const elementToChangeH = document.getElementById("three");
  const elementToChangeI = document.getElementById("four");
  const toggleButtonB = document.getElementById("mediaBtn");
  const exitButtonA = document.getElementById("mediaBtnA");
  
  toggleButtonB.addEventListener("click", function () {
    if (elementToChangeE.style.width === "") {
      elementToChangeE.style.width = "300px"; // Show the element
      elementToChangeF.style.display = "flex";
      elementToChangeG.style.display = "block";
      elementToChangeH.style.display = "block";
      exitButtonA.style.display = "block";
      elementToChangeI.style.display = "flex";
      toggleButtonB.style.display = "none";
    } else {
      elementToChange.style.width = "20px"; // Hide the element
    }
  });
  
  exitButtonA.addEventListener("click", function () {
    if (elementToChangeE.style.width === "300px") {
      elementToChangeE.style.width = ""; // Hide the element
      elementToChangeF.style.display = "none";
      elementToChangeG.style.display = "none";
      elementToChangeH.style.display = "none";
      exitButtonA.style.display = "none";
      elementToChangeI.style.display = "none";
      toggleButtonB.style.display = "flex";
    } else {
      elementToChange.style.width = "300px"; // Show the element
    }
  });

// MEDIA TOP BLOCK JS

const elementToChangeJ = document.getElementById("topBlock")
const elementToChangeK = document.getElementById("two2");
const elementToChangeL = document.getElementById("four4");
const elementToChangeM = document.getElementById("");
const toggleButtonC = document.getElementById("downBtn")
const exitButtonB = document.getElementById("upBtn");

toggleButtonC.addEventListener("click", function () {
  // console.log(elementToChangeJ.style.height)
  if (elementToChangeJ.style.height === "") {
    elementToChangeJ.style.height = "300px"; // Show the element
    elementToChangeK.style.display = "flex";
    elementToChangeL.style.display = "flex";
    toggleButtonC.style.display = "none";
    exitButtonB.style.display = "block";
  }
});

exitButtonB.addEventListener("click", function () {
  // console.log(elementToChangeJ.style.height)
  if (elementToChangeJ.style.height === "300px") {
    elementToChangeJ.style.height = ""; // Show the element
    elementToChangeK.style.display = "none";
    elementToChangeL.style.display = "none";
    toggleButtonC.style.display = "block";
    exitButtonB.style.display = "none";
  }
});