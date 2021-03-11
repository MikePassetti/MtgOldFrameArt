var cardlist;
var modal = document.querySelector('.modal'); 
var closebutton = document.querySelector('.close-button');

// get cardlist data
async function getCardList() {
    try {
        let response = await fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Alea&unique=prints');
        cardlist = await response.json();
    } catch(err) {
        console.log(err);
    }
    displayCardImage();
}

// display card images
function displayCardImage() {
    let cardimages = [];
    cardlist.data.forEach(card => {   
        cardimages += 
        `
        <img class='index-image' src='${card.image_uris.png}' alt='${card.name}' 
        onclick='toggleModal()' 
        width='180rem' height='220rem'>
        `
    });
    document.querySelector('.cards').innerHTML = cardimages;   
}

// toggle modal displaying card image 
function toggleModal() {
    modal.classList.toggle('show-modal');
    document.querySelector('#modal-image').src = cardlist.data[0].image_uris.png;
}

closebutton.addEventListener('click', toggleModal);


// not really part of the code just trying out classes :)
class Card {
    constructor(name, image) {
        this.name = name
        this.image = image
    }
}

var myCard = new Card("Armagedon")

document.querySelector('#myCard').innerHTML = myCard.name;


