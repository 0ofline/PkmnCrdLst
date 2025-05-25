var messageOne = "If you're here to scrutinize the logic of my code, reconsider before your head starts hurting.\n\n";
var messageTwo = "It'd be a big mistake trying to read my HTML and JavaScript. My css however... I'm proud of the way I arranged it.\n\n";
var messageThree = "Want to take a peek? Go to Sources.\n\n";
var messageFour = "Seriously though, if you just want to take some JS functions, or see how I styled my elements, the code is open-source in my github.\n\n";
var messageFive = "find it on: https://github.com/Jideeh1\n\n";
var messageSix = "Just don't start complaining when you see how ass I write code. ーｗー\n\n";
var signature = "Yours Truly, Jideeh\n\n";
var washere = "I'm mostly just here for emotional support :3 -Kyutka3"; //We made this ouf of boredom...

console.log(messageOne + messageTwo + messageThree + messageFour + messageFive + messageSix + signature);


function displayCard(card) {
    let imagePlaceholder = document.querySelector('.card-view');
    let cards = document.querySelectorAll('.wherecard');

    
    cards.forEach(card => {
        card.addEventListener('click', function () {
            imagePlaceholder.src = this.src;
            
            console.log('You clicked a card'); //Debug Line!
            document.querySelector('.card-text').style.display = "none";
        });
    });
    }

const images = document.querySelectorAll('img');

images.forEach((img, index) => {
    img.onclick = displayCard()
    // img.onhover =
});

gsap.fromTo('.loader-con',
    {
    opacity:1,
    zIndex: 9999
},
    
    {
    opacity: 0,
    duration: 1,
    zIndex: -1,
})
