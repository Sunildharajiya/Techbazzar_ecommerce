// =====================================
//  MENU TOGGLE LOGIC
// =====================================

// Select menu icon
const menuIcon = document.querySelector('#nav-menu-icon');

// Select menu container
const menuDiv = document.querySelector('#menu');

// Toggle menu on icon click
menuIcon.addEventListener('click', () => {
  if (menuDiv.style.display === 'block') {
    menuDiv.style.display = 'none';
  } else {
    menuDiv.style.display = 'block';
  }
});