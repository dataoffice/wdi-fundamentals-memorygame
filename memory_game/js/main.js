console.log("Up and running!");


const cards=["queen","queen","king","king"];
const cardsInPlay=[];

function	checkForMatch()

{
console.log("cardsInPlay length " + cardsInPlay.length);

if (cardsInPlay[0]===cardsInPlay[1])
{alert("You found a match!")}
else
{alert("Sorry! Try again")}

}



function flipCard(cardId)
{
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
}

cardOne=cards[0];
cardsInPlay.push(cardOne);
flipCard(0);
flipCard(1);
flipCard(2);
flipCard(3);


