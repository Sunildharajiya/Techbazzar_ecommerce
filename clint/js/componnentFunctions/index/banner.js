// declaring img tag of html for banner slider

const imgTag = document.querySelector('#banner-img');

//'i' is a variable of logic which helps to change slides img
let i = 1;

const changeImg = () =>{
 //incrising value of i , but defualt value is 1 
  i++;     
  
//when i becames > 3 it automatically will 1
  if(i > 3){
    i = 1; 
  }
  
  //giving value of i in the src of slider img tag
  imgTag.src = `./assets/banners/banner${i}.jpg`
}

setInterval(changeImg, 3000);
//setInterval is a function that runs again and again after fixed amount of time