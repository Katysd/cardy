const container = document.querySelector('.row');
const pointe = document.querySelector('.numb');
const pointe2 = document.querySelector('.numb2');
var totalSum = 0;
var cardAmount = 0;
var toget = getRandomobj();
var numberOfCards = 1;

container.addEventListener('click', function(event) {
  const clickedCard = event.target.closest('.card');
  if (clickedCard) {
    const number = parseInt(clickedCard.textContent);
    totalSum += number;
    container.removeChild(clickedCard);
	cardAmount--;
	pointe.textContent = totalSum;
  }
});

function drawNewCard() {
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.textContent = getRandomNumber();
  container.appendChild(newCard);
  cardAmount++;
  pointe2.textContent = toget;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 12) + 1;
}

function getRandomobj() {
  return Math.floor(Math.random() * 30) + 10;
}

function resetTotalSum() {
  totalSum = 0;
}

window.onload = startcard(10);

function startcard(nu) {
	numberOfCards = nu;
    for (let i = 0; i < nu; i++) {
        drawNewCard(); // Draw a new card
    }
}

let cumulativeScore = 0;

function donepick() {
	const difference = calculateDifference(totalSum, toget);
	cumulativeScore += difference;
	score.textContent = cumulativeScore; 
	resetTotalSum();
	while (cardAmount < numberOfCards) {
		drawNewCard();
	}
	pointe.textContent = totalSum;
	toget = getRandomobj();
	pointe2.textContent = toget;
	
}

function calculateDifference(num1, num2) {
    const difference = Math.abs(num1 - num2);

    if (difference === 0) {
        return 10;
    } else if (difference <= 5) {
        return 0;
    } else if (difference <= 10) {
        return -5;
    } else {
        return -10;
    }
}