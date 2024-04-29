// alert("Click on the whatsApp to contact me")
let toggleBtn = document.getElementById("")

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });


});

function Tap() {
    document.body.classList.toggle('darkIcon')    
}




// script.js
const countElement = document.getElementById("count");
const targetNumber = 300; // Change this to your desired target number
const duration = 2000; // Change this to the duration of the counting animation in milliseconds
const interval = 10; // Interval between each count update

const increment = Math.ceil(targetNumber / (duration / interval));
let currentCount = 0;

function updateCount() {
    if (currentCount < targetNumber) {
        currentCount += increment;
        if (currentCount > targetNumber) {
            currentCount = targetNumber;
        }
        countElement.innerText = currentCount;
        setTimeout(updateCount, interval);
    }
}

updateCount();



const words = ["Software developer", "Fullstack developer", "UI/UX designer",  ];
const wordElement = document.getElementById("word");
const cursorElement = document.getElementById("cursor");
let wordIndex = 0;
let charIndex = 0;
let typingForward = true;

function typeWord() {
  if (typingForward) {
    if (charIndex <= words[wordIndex].length) {
      wordElement.textContent = words[wordIndex].substring(0, charIndex);
      charIndex++;
    } else {
      typingForward = false;
      setTimeout(eraseWord, 700);
      return;
    }
  } else {
    if (charIndex >= 0) {
      wordElement.textContent = words[wordIndex].substring(0, charIndex);
      charIndex--;
    } else {
      typingForward = true;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeWord, 100);
}

function eraseWord() {
  if (charIndex >= 0) {
    wordElement.textContent = words[wordIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(eraseWord, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, 700);
  }
}

typeWord();
