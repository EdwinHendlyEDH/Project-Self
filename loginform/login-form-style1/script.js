
//password visibility 
const eye = document.getElementById('eye');
const eyeSlash = document.getElementById('eye-slash');
const passInput = document.getElementById('Password');
const eyePlace = document.getElementsByClassName('visibility')[0];

//function untuk cek apakah eye / eyeSlash diklik atau tidak
function checkEye(){
    // if(eye.style.display == "none"){
        //bruh dont do that ^^ itu untuk ketika memang sudah ada style attribute yang displaynya none di saat klik. kalau tidak akan ke else dlu
    if(passInput.type == "password"){
        eyeSlash.style.display = 'none';
        eye.style.display = 'inline';
        passInput.type = 'text';
    } else {
        eyeSlash.style.display = 'inline';
        eye.style.display = 'none';
        passInput.type = 'password';
    }
}

eyePlace.addEventListener('click', checkEye);




