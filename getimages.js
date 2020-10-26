var cardlist;
var cardimages = [];
var modal = document.querySelector(".modal"); 
var closebutton = document.querySelector(".close-button");

class Card {
    constructor(name, image) {
        this.cardName = name;
        this.image = image;
    }
}

// get cardlist data and display card images
async function getCardList () {
    try {
        let response = await fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Alea&unique=prints');
        cardlist = await response.json();
    } catch(err) {
        console.log(err);
    }
    displayCardImage();
}

// display card images
function displayCardImage () {
    cardlist.data.forEach(card => {   
        cardimages += 
        `
        <img class="index-image" src="${card.image_uris.png}" alt="${card.name}" onclick="toggleModal()" width="180rem" height="220rem">
        `
    });
    document.querySelector('.cards').innerHTML = cardimages;
}

function toggleModal () {
    modal.classList.toggle("show-modal");
    //document.querySelector("#modal-image").src = 
}

closebutton.addEventListener('click', toggleModal);


/*function detailedCard () {
    modal.classList.toggle("show-modal");
    let image = document.querySelectorAll(".index-image");
    image.onclick = function() {
        document.querySelector('#modal-image').src = this.src;
    }
}*/

// so what if i map cardlist so as to assign the cardlist props to particular cards... 
/*function mapCardList () {
    cardlist.data.map(card => {
        card = new Card (card.name, card.image_uris.png);
        cardimages.push(card);
    })
}*/

// constructor func for Person objects
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}*/

/*class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
    }
}*/

// create a person object
// var myFather = new Person("John", "Doe", 50, "blue");

// Display age
/*document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ".";*/

// document.querySelector("#modal-image").src = card.image;



/*img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }*/

/*function getImage () {
    fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Alea&unique=prints')
    .then(res => res.json())
    .then(data => {
        let cardimages = [];
        data.data.forEach(card => {
            cardimages += `
            <a href="card.html">
            <img class="card" src="${card.image_uris.png}" alt="${card.name}" width="180rem" height="220rem">
            </a>
            `
        });
        document.querySelector('.cards').innerHTML = cardimages; 
    })
    .catch((err) => console.log(err))
}*/

/*function detailedCard () {
    // need to set the src of the modal image = the src of the .cards.img src 
    let indeximage = document.querySelector(".index-image"); 
    cardlist.data.forEach(card => {
        if (card.name = indeximage.alt) {
            document.querySelector('#modal-image').src = card.src;
        } else {
            alert("not found")
        }
    })
}*/




