window.onload = function () {
  const suits = ["♠", "♣", "♥", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let card = document.querySelector(".card");
  let card2 = document.querySelector(".card2");
  let cardNumber = document.querySelector("#number");
  let symbolTop = document.querySelector("#icon");
  let symbolBottom = document.querySelector("#secondIcon");
  let widthInput = document.querySelector("#width");
  let heightInput = document.querySelector("#height");

  function randomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    symbolTop.innerHTML = randomSuit;
    cardNumber.innerHTML = randomValue;
    symbolBottom.innerHTML = randomSuit;

    const isRed = randomSuit === "♥" || randomSuit === "♦";
    const color = isRed ? "red" : "black";

    symbolTop.style.color = color;
    cardNumber.style.color = color;
    symbolBottom.style.color = color;

    normalValues();
  }

  function updateCardSize() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (!isNaN(width) && !isNaN(height)) {
      card.style.width = width + "px";
      card.style.height = height + "px";

      const fontSize = Math.min(width, height) / 40;
      card.style.fontSize = fontSize + "px";

      card2.style.display = "none";
    }
  }

  widthInput.addEventListener("keydown", e => {
    if (e.key === "Enter") updateCardSize();
  });

  heightInput.addEventListener("keydown", e => {
    if (e.key === "Enter") updateCardSize();
  });

  document.querySelector("#randomizerButton").addEventListener("click", randomCard);

  setInterval(() => {
    randomCard();
  }, 10000);

  function normalValues() {
    card.style.width = "342px";
    card.style.height = "535px";
    card.style.fontSize = "10px";
    card2.style.display = "inline";
  }

  randomCard();
};

