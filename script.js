// array of objects with all the data
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },{
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },{
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },{
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },{
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// targeting the slider
const sliderElement = document.getElementById('slider');
// targeting the preview window
const previewElement = document.getElementById('preview');

// for each object in the array
images.forEach(function(singleImage, index){
    // creates a slide container
    const newSlide = document.createElement('div');
    newSlide.classList.add('slide');

    // creates image element with relevant img
    const slideImage = document.createElement('img');
    slideImage.src = singleImage['image'];
    slideImage.alt = `immagine ${index + 1}`;

    // adds image to slide
    newSlide.append(slideImage);

    // creates text container
    const slideInfo = document.createElement('div');
    slideInfo.classList.add('text');
    // title
    const infoTitle = document.createElement('h3');
    infoTitle.innerHTML = singleImage['title'];
    // text
    const infoText = document.createElement('p');
    infoText.innerHTML = singleImage['text'];
    // puts title and text in text container
    slideInfo.append(infoTitle, infoText);

    // puts text container in slide
    newSlide.append(slideInfo)

    // puts slide in page
    sliderElement.append(newSlide)

    // SIDE PREVIEWS
    const previewImage = slideImage.cloneNode(true);
    
    previewElement.append(previewImage);

})


// selects the first .slide and gives it class active
document.querySelector(".slide:nth-of-type(1)").classList.add('active');

/*
-  salvo un contatore della slide
-  QUANDO premo la freccia SU
    - prendo l'immagine attuale e le rimuovo la classe "active"  
    - aumento il contatore di 1
    - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
*/


// slide counter
let slideNumber = 1;

// UP ARROW
document.querySelector("#up-arrow").addEventListener("click", function() {

    if (slideNumber < images.length) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("active");
    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("active");

    }

        
});

// DOWN ARROW
document.querySelector("#down-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("active");

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("active");
    }
});