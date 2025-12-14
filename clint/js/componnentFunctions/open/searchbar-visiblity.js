// =====================================
//  SEARCH BAR VISIBILITY LOGIC
// =====================================

// Select banner image (used in banner.js also)
const bannerSlider = document.querySelector('#banner-img');

// Select search icon
const searchIcon = document.querySelector('#nav-search-icon');

// Select search container
const searchDiv = document.querySelector('#search-div');

// Toggle banner and search bar
searchIcon.addEventListener('click', () => {
  if (
    bannerSlider.style.display === 'none' &&
    searchDiv.style.display === 'block'
  ) {
    bannerSlider.style.display = 'block';
    searchDiv.style.display = 'none';
  } else {
    bannerSlider.style.display = 'none';
    searchDiv.style.display = 'block';
  }
});