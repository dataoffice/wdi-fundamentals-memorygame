console.log("Up and running!");


const cards=[
{
rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"	
},
{
rank:"queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"	
},
{
rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png"	
},
{
rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png"	
}
];
const cardsInPlay=[];

function	checkForMatch()

{
var max=cardsInPlay.length;
console.log("cardsInPlay length " + cardsInPlay.length);
console.log("max " + max);


if(cardsInPlay.length>1)
{
console.log("cardsInPlay last " + cardsInPlay[max-1]);
console.log("cardsInPlay previous " + cardsInPlay[max-2]);

if (cardsInPlay[cardsInPlay.length-1]===cardsInPlay[cardsInPlay.length-2])
{alert("You found a match!")}
else
{alert("Sorry! Try again")}
}


}



function flipCard(cardId)
{
console.log("User flipped " + cards[cardId].rank);
console.log("User flipped " + cards[cardId].suit);
console.log("User flipped " + cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}


flipCard(0);
flipCard(1);
flipCard(3);
flipCard(2);
flipCard(1);
flipCard(1);




