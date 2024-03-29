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
    previewImage.classList.add('preview-img');


    previewElement.append(previewImage);
    
})



// selects the first .slide and gives it class active


// I transform all the slides and all the previews into arrays
const slideArray = Array.from(document.getElementsByClassName('slide'));
const previewArray = Array.from(document.getElementsByClassName('preview-img'));

// sets a starting selected image
slideArray[0].classList.add('active');
previewArray[0].classList.add('active');

// slide counter tracks on which slide we're on
let slideNumber = 0;

// DOWN ARROW
document.querySelector("#down-arrow").addEventListener("click", function() {

    nextSlide(slideNumber);

    if (slideNumber < slideArray.length - 1){
        slideNumber++;
    } else{
        slideNumber = 0
    }
    
});

// UP ARROW
document.querySelector("#up-arrow").addEventListener("click", function() {

    previousSlide(slideNumber);

    if (slideNumber > 0) {
        slideNumber--
    } else{
        slideNumber = slideArray.length - 1;
    }
});

// when clicking on preview it show shows that image
previewArray.forEach(function(element, index){
    element.addEventListener('click', function(){
        for(i = 0; i < previewArray.length; i++){
            previewArray[i].classList.remove('active');
            slideArray[i].classList.remove('active');
        }
        element.classList.add('active');
        slideArray[index].classList.add('active');

        slideNumber = index;
        console.log(slideNumber)
    })
})

// auto scorrimento
let autoplay = setInterval(function(){
    nextSlide(slideNumber);

    if (slideNumber < slideArray.length - 1){
        slideNumber++;
    } else{
        slideNumber = 0
    }
}, 3000)

const stopButton = document.getElementById('btn-stop');
const playButton = document.getElementById('btn-go');
const backButton = document.getElementById('btn-back');

stopButton.addEventListener('click', function(){
    clearInterval(autoplay)
})

playButton.addEventListener('click', function(){
    clearInterval(autoplay)
    autoplay = setInterval(function(){
        nextSlide(slideNumber);
    
        if (slideNumber < slideArray.length - 1){
            slideNumber++;
        } else{
            slideNumber = 0
        }
    }, 3000)
})

backButton.addEventListener('click', function(){
    clearInterval(autoplay)
    autoplay = setInterval(function(){
        previousSlide(slideNumber);
    
        if (slideNumber > 0) {
            slideNumber--
        } else{
            slideNumber = slideArray.length - 1;
        }
    }, 3000)
})


// FUNCTION

function nextSlide (n){
    if (n < slideArray.length - 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        slideArray[n].classList.remove("active");
        previewArray[n].classList.remove("active");


        // - aumento il contatore di 1
        n++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        slideArray[n].classList.add("active");
        previewArray[n].classList.add("active");


    } else {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        slideArray[n].classList.remove("active");
        previewArray[n].classList.remove("active");


        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        n = 0;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        slideArray[n].classList.add("active");
        previewArray[n].classList.add("active");

    }

    console.log(n)
}

function previousSlide (n){
    if (n > 0) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        slideArray[n].classList.remove("active");
        previewArray[n].classList.remove("active");

        // - diminuisco il contatore di 1
        n--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        slideArray[n].classList.add("active");
        previewArray[n].classList.add("active");

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        slideArray[n].classList.remove("active");
        previewArray[n].classList.remove("active");


        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        n = slideArray.length - 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        slideArray[n].classList.add("active");
        previewArray[n].classList.add("active");

    }
    console.log(n)
}