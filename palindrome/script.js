const input = document.querySelector(".input input");
const button = document.querySelector(".input button")
const ansText = document.querySelector('.ans');
const h2 = document.querySelector(".input h2");

function checkPalindrome(x){
    return (x.toLowerCase().split(" ").join("").split("").reverse().join("") == x.toLowerCase().split(" ").join("")) ? true : false; 
}


button.addEventListener('click', function(){
    
    let joban = checkPalindrome(input.value);

    if (joban) {
        ansText.innerHTML = `Yes, '<span>${input.value}'</span> adalah palindrome!`;
    }else {
        ansText.innerHTML = `No, '<span>${input.value}'</span> bukan palindrome!`;
    }

})  


// pelajaran baru, jadi keyup itu untuk setiap key yang kita tekan lalu kita angkat lagi, itu akan termasuk 1 event, jadi kita bisa cek jikalau yang ditekan itu enter atau keyCodenya itu 13 maka kita suruh computernya klik button bukan kita yang click pakai function click, jadi tetap perlu ada event click untuk button

input.addEventListener('keyup', (e)=> {
    e.preventDefault();
    if (e.keyCode === 13){
        button.click();
    }
})