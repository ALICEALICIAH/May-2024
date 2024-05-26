'use strict';


window.addEventListener('load', function() {
  setTimeout(function() {
      let notification = document.getElementById('welcomeMessage');
      notification.style.display = 'block';
  }, 3000);

  let closeBtn = document.getElementById('closeNotification');
  closeBtn.addEventListener('click', function() {
      let notification = document.getElementById('welcomeMessage');
      notification.style.display = 'none';
  });
});
/**
 * add event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toogle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



/**
 * filter functionality
 */

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedBtn = filterBtn[0];

const filter = function () {
  lastClickedBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}

addEventOnElem(filterBtn, "click", filter);



// Get the "Read More" button and the additional content in our story

    document.addEventListener("DOMContentLoaded", function() {
        const readMoreBtn = document.getElementById("read-more-btn");
        const moreText = document.getElementById("more-text");

        readMoreBtn.addEventListener("click", function(event) {
            event.preventDefault();
            if (moreText.style.display === "none") {
                moreText.style.display = "block";
                readMoreBtn.textContent = "Read Less...";
            } else {
                moreText.style.display = "none";
                readMoreBtn.textContent = "Read More...";
            }
        });
    });

// Get the "Read More" button and the additional content in blog
    document.addEventListener('DOMContentLoaded', (event) => {
      function toggleText(id) {
        const moreText = document.getElementById(`more-text-${id}`);
        const btn = document.getElementById(`read-more-btn-${id}`);
    
        if (moreText.style.display === "none" || moreText.style.display === "") {
          moreText.style.display = "inline";
          btn.innerText = "Read Less...";
        } else {
          moreText.style.display = "none";
          btn.innerText = "Read More...";
        }
      }
    
      window.toggleText = toggleText;
    });
    
    //timer
    document.addEventListener('DOMContentLoaded', (event) => {
      function updateCountdown() {
        // Set the date and time of the offer expiration
        const offerEndDate = new Date('2024-06-10T00:00:00').getTime();
    
        // Get the current date and time
        const now = new Date().getTime();
    
        // Calculate the remaining time in milliseconds
        const timeRemaining = offerEndDate - now;
    
        // Calculate days, hours, minutes, and seconds remaining
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        // Update the HTML elements with the calculated values
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    
        // If the countdown is over, stop the timer
        if (timeRemaining < 0) {
          clearInterval(countdownInterval);
          document.getElementById('days').textContent = 0;
          document.getElementById('hours').textContent = 0;
          document.getElementById('minutes').textContent = 0;
          document.getElementById('seconds').textContent = 0;
        }
      }
    
      // Update the countdown every second
      const countdownInterval = setInterval(updateCountdown, 1000);
    });
    

    //modal
    document.addEventListener('DOMContentLoaded', (event) => {
      const userBtn = document.getElementById('user-btn');
      const modal = document.getElementById('signin-modal');
      const closeModal = document.getElementById('close-modal');
    
      // When the user clicks the button, open the modal
      userBtn.onclick = function() {
        modal.style.display = "block";
      }
    
      // When the user clicks on <span> (x), close the modal
      closeModal.onclick = function() {
        modal.style.display = "none";
      }
    
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
    