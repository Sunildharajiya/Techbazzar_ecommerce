let popularProductsBox = document.querySelector('.popular');

let Popproducjson = [
  {
   id:1,
   name:"intel thinkpad i5",
  shortdiscription:"this is very nice laptop",
    longdiscription:"hdhdjhsjbdjksbhajhshshshbsvsvsbxhxnbxhjsbdjxh hjsbdhksb hsnshskskshs jjbsbhsokdj jksbdjksneik iebhsjsbhsisnd   jsbsohsvskdoifb jsjisjjdjdjjd",
    price:20990,
    mainimgurl:"hsjvdjxbvxbzjsijs",
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
  
  function crearteCard(e){
    let div = document.createElement('div')
    div.innerHTML = `<h1>hi</hi>`
    popularProductsBox.appendChild(div)
  }
  
  crearteCard()