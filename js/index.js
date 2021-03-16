// const card = document.querySelector('.card');
const dataCard = document.querySelector('.dataCard');
const btnBack = document.querySelector('#back');
const btnFront = document.querySelector('#front');
const btnSurprise = document.querySelector('#surprise');
const imgContainer = document.querySelector('.imgContainer');

let cardNumber = 0;

/*************************************
 * Create Elements
**************************************/

const img = document.createElement('div');
const h3 = document.createElement('h3');
const span = document.createElement('span');
const p = document.createElement('p');


/*************************************
 * Function that creates the review 
 * card, getting information from
 * the reviewArray.
**************************************/

function getCard(){

  img.className = 'img';
  if(reviewArray[cardNumber].profilePic == './images/person-1.jpg'){
    img.style.backgroundImage= "url('./images/person-1.jpg')";
  } 
  if(reviewArray[cardNumber].profilePic == './images/person-2.jpg'){
    img.style.backgroundImage= "url('./images/person-2.jpg')";
  } 
  if(reviewArray[cardNumber].profilePic == './images/person-3.jpg'){
    img.style.backgroundImage= "url('./images/person-3.jpg')";
  } 
  if(reviewArray[cardNumber].profilePic == './images/person-4.jpg'){
    img.style.backgroundImage= "url('./images/person-4.jpg')";
  } 
 
  h3.innerText=reviewArray[cardNumber].employeeName;
  span.innerText=reviewArray[cardNumber].job;
  p.innerText=reviewArray[cardNumber].description;
  imgContainer.appendChild(img);
  dataCard.appendChild(h3);
  dataCard.appendChild(span);
  dataCard.appendChild(p);   
  
}

getCard();


/***************************************
 * Random number for Surprise Me Button
**************************************/

function randomNumber(){
  return Math.floor(Math.random() * reviewArray.length);
}

//**********************************  BUTTONS  *********************** */


/***************************************
 * Looping through the cards 
 * going forward
**************************************/


btnFront.addEventListener('click',()=>{
  cardNumber = cardNumber + 1;

  if(cardNumber <= 3){
   getCard();
    console.log(cardNumber);
  }else{
    cardNumber = 0;
    getCard();
  }
});


/***************************************
 * Looping through the cards 
 * going backward
**************************************/


btnBack.addEventListener('click',()=>{
  cardNumber = cardNumber - 1;

  if(cardNumber < 0){
    cardNumber = 3;
   getCard();
  }else{
    getCard();
  }
});

/***************************************
 *Surprise Button
**************************************/


btnSurprise.addEventListener('click',()=>{
  cardNumber = randomNumber();
  getCard();
});

