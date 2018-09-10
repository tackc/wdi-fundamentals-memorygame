var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function() {
	var cardId = this.getAttribute('card-id');
	cardsInPlay.push(cards[cardId]);
	this.setAttribute('src', this.getAttribute('data-cardImage'));
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	if (cardsInPlay.length === 2) {
		checkForMatch()
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('card-id', i);
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-rank', cards[i].rank); 
		cardElement.setAttribute('data-suit', cards[i].suit);
		cardElement.setAttribute('data-cardImage', cards[i].cardImage);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement); 	
	}	
};

createBoard();

// cards.push(flipCard);

// cardsInPlay.push(cards.rank);

