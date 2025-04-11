
window.onload = function () {

  const suits = ["♠", "♣", "♥", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let cardNumber = document.querySelector("#number")
  let symbolTop = document.querySelector("#icon")
  let symbolBottom = document.querySelector("#secondIcon")
  
  

  function randomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    symbolTop.innerHTML = randomSuit
    cardNumber.innerHTML = randomValue;
    symbolBottom.innerHTML = randomSuit


    if (randomSuit === "♥" || randomSuit === "♦"){
      symbolTop.style.color = "red"
      cardNumber.style.color = "red"
      symbolBottom.style.color = "red"
    }
    if (randomSuit === "♠" || randomSuit === "♣"){
      symbolTop.style.color = "black"
      cardNumber.style.color = "black"
      symbolBottom.style.color = "black"
    }
   
    normalValues();
   
  };
  
  let card = document.querySelector(".card")
  let card2 = document.querySelector(".card2")
  let height = document.querySelector("#height")
  let width = document.querySelector("#width")

  width.addEventListener("keyup", (e) =>{
    
    if (e.keyCode == 13){
      card.style.width = `${width.value}` 
       card2.style.display = `none`
      
     
    }

  })
  height.addEventListener("keyup", (e) =>{
    
    if (e.keyCode == 13){
      card.style.height = `${height.value}`
      card2.style.display = `none`
     
    
    }
  })
  
  
 
  //Randomizer card button
  let randomizerButton = document.querySelector("#randomizerButton") //Tiene que ir adentro de la función?
  randomizerButton.addEventListener("click", randomCard) //lo mismo


 //Cambia cada 10s
  setInterval (() => {
    randomCard();
  },10000);

  randomCard();


function normalValues (){
  card.style.width = "342px";
  card.style. height = "535px";
  card2.style.display = "inline";

}

}; 


