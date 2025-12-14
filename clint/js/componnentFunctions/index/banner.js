// =====================================
//  BANNER SLIDER LOGIC
// =====================================

// bannerSlider is already initialized
// in searchbar-visiblity.js

/* const bannerSlider = document.querySelector('#banner-img');*/

// 'i' controls which banner image is shown
let i = 1;

// Function to change banner image
const changeImg = () => {

  // Increase image index
  i++;

  // Reset index when it exceeds total images
  if (i > 3) {
    i = 1;
  }

  // Update banner image source
  bannerSlider.src = `./assets/banners/banner${i}.jpg`;
};

// Change image every 3 seconds
setInterval(changeImg, 3000);