let popularProductsBox = document.querySelector('.popular');

let Popproducjson = [
  {
   id:1,
   name:"intel thinkpad i5",
  shortdiscription:"this is very nice laptop",
    longdiscription:"hdhdjhsjbdjksbhajhshshshbsvsvsbxhxnbxhjsbdjxh hjsbdhksb hsnshskskshs jjbsbhsokdj jksbdjksneik iebhsjsbhsisnd   jsbsohsvskdoifb jsjisjjdjdjjd",
    price:20990,
    mainimgurl:`./assets/banners/banner1.jpg`,
    subimgs:{
      img1:"hdjdjjdjdkdjhsiwbbskkshsmsbg",
      img2:"hdjdjjdjdkdjhsiwbbskkshsmsbg",
      img3:"hdjdjjdjdkdjhsiwbbskkshsmsbg"
    },
    reviews:{
      r1:"hi how are you ?",
      r2:"hi how are you ?",
      r3:"hi how are you ?",
    }
  },
  {
   id:1,
   name:"intel thinkpad i5",
  shortdiscription:"this is very nice laptop",
    longdiscription:"hdhdjhsjbdjksbhajhshshshbsvsvsbxhxnbxhjsbdjxh hjsbdhksb hsnshskskshs jjbsbhsokdj jksbdjksneik iebhsjsbhsisnd   jsbsohsvskdoifb jsjisjjdjdjjd",
    price:20990,
    mainimgurl:`./assets/banners/banner1.jpg`,
    subimgs:{
      img1:"hdjdjjdjdkdjhsiwbbskkshsmsbg",
      img2:"hdjdjjdjdkdjhsiwbbskkshsmsbg",
      img3:"hdjdjjdjdkdjhsiwbbskkshsmsbg"
    },
    reviews:{
      r1:"hi how are you ?",
      r2:"hi how are you ?",
      r3:"hi how are you ?",
    }
  }
  ]
  
  
  console.log(Popproducjson)
  
  function crearteCards(e){
    let div = document.createElement('div')
    div.className = "popular-cards"
    div.innerHTML = `<img src=${e.mainimgurl} alt = "not found img" class = "card-img">
    <h4>${e.name}</h4>
    <p>${e.shortdiscription}</p>
    <span>${e.price} ₹</span>
    <button>BUY NOW</button>
    ` 
    popularProductsBox.appendChild(div)
  }
  
  Popproducjson.forEach((e) => crearteCards(e))