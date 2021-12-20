// This is where it all goes :)
class Card {
  constructor(number, shading, shape, color) {
      this.number = number;
      this.shading = shading;
      this.shape = shape;
      this.color = color;
  }

  number() {
      return this.number;
  }

  shading() {
      return this.shading;
  }

  shape() {
      return this.shape;
  }

  color() {
      return this.color;
  }

  // ODO: toString override
  // toString() {
  //     return this.number + ", " + this.color + ", " + this.shading + ", " + this.shape;
  // }
}

class Deck {
  constructor(numberArray, shadingArray, shapeArray, colorArray) {
      this.cards = new Array();
      this.numberArray = numberArray;
      this.shadingArray = shadingArray;
      this.shapeArray = shapeArray;
      this.colorArray = colorArray;
      this.buildDeck();
  }

  cards(){
      return this.cards;
  }

  numberArray() {
      return this.numberArray;
  }

  shadingArray() {
      return this.shadingArray;
  }

  shapeArray() {
      return this.shapeArray;
  }

  colorArray() {
      return this.colorArray;
  }

  buildDeck(){
      let index = 0;
      // Iterate through numberArray
      this.numberArray.forEach(number => {
          // Iterate through shadingArray
          this.shadingArray.forEach(shading => {
              // Iterate through shapeArray
              this.shapeArray.forEach(shape => {
                  // Iterate through colorArray
                  this.colorArray.forEach(color => {
                      // Add card to card array
                      this.cards[index] = new Card(number, shading, shape, color);
                      // Increment index
                      index++;
                  })
              })
          })
      });
  }

}

class Player {
  constructor(id, score) {
      this.id = id;
      this.score = score;
  }

  id() {
      return this.id;
  }

  score() {
      return this.score;
  }

  incrementScore(){
      this.score++;
      return this.score;
  }

}

function createDeck() {
  let colorArray = ["red", "green", "purple"];
  let numberArray = [1, 2, 3];
  let shapeArray = ["squiggle", "diamond", "oval"];
  let shadingArray = ["solid", "striped", "empty"];

  const deck = new Deck(numberArray, shadingArray, shapeArray, colorArray);
  return deck;
}

//Function to return cards to be displayed to player. 
function displayCards(deck){
  var cards = []
  //Picks 12 cards to display
  for(i = 0; i < 12; i++){
    cards[i] = deck.pop;
  }
  return cards; 
}

//Function to verify that 3 cards are a set.
function verifyCards(cards){

  //Variable list for specific card and aspects to check if set
  var set = false;
  var checkColor = false;
  var checkShape = false;
  var checkShade = false;
  var checkNum = false;

  //If statements to check for each attribute of cards to see three cards are a set.

  //Number verification
  if( (cards[0].numberArray === cards[1].numberArray && cards[1].numberArray === cards[2].numberArray) || 
  (cards[0].numberArray != cards[1].numberArray && cards[1].numberArray != cards[2].numberArray) ){
    checkNum = true;
  }
  //Color verification
  if( (cards[0].colorArray === cards[1].colorArray && cards[1].colorArray === cards[2].colorArray) || 
  (cards[0].colorArray != cards[1].colorArray && cards[1].colorArray != cards[2].colorArray) ){
    checkColor = true;
  }
  //Shape verification
  if( (cards[0].shapeArray === cards[1].shapeArray && cards[1].shapeArray === cards[2].shapeArray) || 
  (cards[0].shapeArray != cards[1].shapeArray && cards[1].shapeArray != cards[2].shapeArray) ){
    checkShape = true;
  }
  //Shade verification
  if( (cards[0].shadingArray === cards[1].shadingArray && cards[1].shadingArray === cards[2].shadingArray) || 
  (cards[0].shadingArray != cards[1].shadingArray && cards[1].shadingArray != cards[2].shadingArray) ){
    checkShade = true;
  }
  //Set verification
  if(checkNum && checkColor && checkShade && checkShape){
    set = true;
  }
  
  return set;
}

//Function to shuffle deck
 function shuffle(deck) {
   //Variables used for shuffling.
  var j, x, i;
  //For loop to shuffle array.
  for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = a[j];
      deck[j] = x;
  }
  return deck;
}

//Creates deck
var deck = createDeck();
deck.cards.forEach(card => {
  console.log(card)
})

//shuffle deck
var playDeck = deck.cards
playDeck = shuffle(playDeck);

//Creates cards to be displayed to players.
var verified = false;
var cardsDisplayed = [12];

//While loop to check if a set exsist within the 12 display cards.
while(!verified){
  cardsDisplayed = displayCards(deck);
  //Triple for loop to test every combination of 3 cards within the 12 cards selected to see if a set exist
  for(i = 0; i < cardsDisplayed.length; i++){
    for(j = i; j < cardsDisplayed; j++){
      for(k = j; k < cardsDisplayed; k++){
        //Checks if three are set
        var testCards = [cardsDisplayed[i], cardsDisplayed[j], cardsDisplayed[k]];
        verified = verifyCards(testCards);
      }
    }
  }
}



