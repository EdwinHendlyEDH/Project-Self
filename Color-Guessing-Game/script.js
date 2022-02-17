const colorPalletes = document.querySelectorAll("[data-color]");
const buttonChangeWarna = document.querySelector('.refresh')
const poin = document.querySelector(".poin-angka");
const question = document.getElementsByClassName('question')[0];





// game mechanics
function generateRandomRGB(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateColor(arr=colorPalletes){
    let arrRGB = [];

    arr.forEach(e=>{
        let coloring = generateRandomRGB();
        e.style.background = coloring;
        e.dataset.color = coloring; 
        arrRGB.push(coloring);
    });
    return arrRGB;
    
}

function generateQuestion(arr=colorPalletes){
    let i = Math.floor(Math.random() * arr.length)
    question.textContent = generateColor(arr)[i];
}


function generate(){
    // change pallete color
    document.body.onload = generateQuestion()
    buttonChangeWarna.addEventListener('click', function(){ generateQuestion()})
}

// ketika onload pertama kali (sebelum klik hard mode atau easy mode)
generate()
beriEventClick()




// easy and hard mode
const easy = document.querySelector(".easy")
easy.addEventListener('click', function(){
    [...colorPalletes].slice(0,3).forEach(e=>e.style.display="none")

    // ambil 3 div terakhir
    let colorPalletesNew = [...colorPalletes].slice(3);

    generateQuestion(colorPalletesNew)
    
    buttonChangeWarna.addEventListener('click', function(){ generateQuestion(colorPalletesNew)})
    
    beriEventClick(colorPalletesNew);

})

const hard = document.querySelector('.hard');
hard.addEventListener('click', function(){
    colorPalletes.forEach(e=>e.style.display = "block");
    generate()
    beriEventClick()

})


function changeAllColor(arr, color){
    arr.forEach(e=>e.style.background = color)
}

function beriEventClick(arr=colorPalletes){
    let locked = false
    arr.forEach(e=>e.addEventListener("click", function(){
        let warna = e.dataset.color;
        if (!locked && validasiWarna(warna)){
            changeAllColor(arr, warna)
            locked = true
            setTimeout(function(){
                locked = false
                generateQuestion(arr)
                
            }, 1000)

        }else if (!locked){
            e.style.background = 'black';
        }
    }))
}

function validasiWarna(warna){
    if (warna == question.textContent){
        poin.textContent = Number(poin.textContent) + 1; 
        return true;
    }
    return false;
}




