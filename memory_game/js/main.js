var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

var flipCard = function(cardId) {
	if (i = 0, cardsInPlay.length === 2, i++) {
		console.log(length[i]);
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	console.log("User flipped " + cards[cardId]);
	return checkForMatch;
};
flipCard(0);
flipCard(2);

cards.push(flipCard);

