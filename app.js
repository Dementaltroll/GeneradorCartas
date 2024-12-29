function generateRandomCard() {
  const tipos = ["heart", "diamond", "spade", "club"];
  const symbols = ["♥", "♦", "♠", "♣"];
  const nums = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const tiposAle = Math.floor(Math.random() * tipos.length);
  const numAle = Math.floor(Math.random() * nums.length);

  // Obtener elementos del DOM
  const selecCard = document.getElementById("card");
  const selecTop = selecCard.querySelector(".top");
  const selecNum = selecCard.querySelector(".number");
  const selecBottom = selecCard.querySelector(".bottom");

  // Configurar los valores y clases
  const suitClass = tipos[tiposAle];
  selecCard.className = `card border-dark rounded shadow ${suitClass}`;
  selecNum.textContent = nums[numAle];

  selecTop.textContent = symbols[tiposAle];
  selecBottom.textContent = symbols[tiposAle];


  
  if (suitClass === "heart" || suitClass === "diamond") {
    selecTop.classList.add("text-danger");
    selecBottom.classList.add("text-danger");
    selecNum.classList.remove("text-danger");
  } else {
    selecTop.classList.remove("text-danger");
    selecBottom.classList.remove("text-danger");
    selecNum.classList.remove("text-danger");
  }
}

  window.onload = generateRandomCard;