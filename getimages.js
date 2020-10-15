var cardlist;
var cardimages =[];
var modal = document.querySelector(".modal"); 
var closebutton = document.querySelector(".close-button");

async function getCardList () {
    try {
        let response = await fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Alea&unique=prints');
        cardlist = await response.json();
    } catch(err) {
        console.log(err);
    }
    displayCardImage();
}

function displayCardImage () {
    cardlist.data.forEach(card => {
        cardimages += 
        `
        <img class="index-image" src="${card.image_uris.png}" alt="${card.name}" onClick="toggleModal()" width="180rem" height="220rem">
        `
    });
    document.querySelector('.cards').innerHTML = cardimages;
}

function toggleModal () {
    modal.classList.toggle("show-modal");
}

closebutton.addEventListener('click', toggleModal);



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

/*function mapCardList () {
    cardlist.data.map(card => {
        card = [card.name, card.image_uris.png]
        console.log(card);
    })
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