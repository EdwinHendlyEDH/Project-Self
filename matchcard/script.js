const card = document.querySelectorAll(".game-card");

let cardFlipped = false;
let locked = false;
let cardOne, cardTwo;

function flipCard(){
    if(locked) return;
    if(this === cardOne) return;
    this.classList.toggle("flipped");


    //first click
    if (!cardFlipped){
        cardFlipped = true;
        cardOne = this;
        return;
    }

    //second click
    cardTwo = this;

    check();

}

function check(){
    //check if cardOne and cardTwo is the same
    let same = cardOne.dataset.pic === cardTwo.dataset.pic;
    
    same ? disabling() : notFlipped();
}

function disabling(){
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    resetting(); 

} 

function notFlipped(){
        locked = true;

        setTimeout(() => {
            cardOne.classList.remove("flipped");
            cardTwo.classList.remove("flipped");

            resetting(); 

        }, 1200);

}


function resetting(){
    [cardFlipped, locked] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

(function shuffeling(){
    card.forEach(e => {
        let rand = Math.ceil(Math.random() * 16);
        e.style.order = rand;
    })
})();


card.forEach(e => e.addEventListener("click", flipCard))