//time settings
const start = document.getElementsByClassName("start")[0];

start.addEventListener("click", function(){
    start.style.display = "none";
    timing();
});
function timing(){
    const time = document.getElementsByClassName("time")[0]
    const overlay = document.getElementsByClassName("overlay")[0];
    const waktuStart = new Date().getTime();
    const waktu = 60 * 1000;
    time.innerHTML = waktu/1000;
    const waktuButuh = waktu + 1000; //1000 here is to add another second;
    setInterval(function(){
        if(new Date().getTime() - waktuStart > waktuButuh){
            overlay.style.display = "flex";
            clearInterval;
            return;
        } else {
            let arr = [];
            card.forEach(e => {
                arr.push(e.classList.contains("flipped"));
            })
    
            if(arr.includes(false)){
                
            } else {
                overlay.style.display = "flex";
                overlay.innerHTML = "YOU WIN!" //in " + (new Date().getTime() - waktuStart) / 1000;
                clearInterval;
                return;
            }
        }

        time.innerHTML -= 1;
    
    }, 1000)
    
}




//game mechanics
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


card.forEach(e => e.addEventListener("click", flipCard));

