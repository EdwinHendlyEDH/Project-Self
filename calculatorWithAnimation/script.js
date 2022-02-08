const allButton = Array.from(document.querySelectorAll('button[type=button]'));
console.log(allButton)

const jawabanNilai = document.querySelector('span.result')


allButton.forEach(item=>item.addEventListener('click', ()=>{
    if (item.value == "="){
        jawabanNilai.textContent = eval(jawabanNilai.textContent);
    }
    else if (item.value == "AC"){
        jawabanNilai.textContent = "";
    }
    else if (item.value == "DEL"){
        jawabanNilai.textContent = jawabanNilai.textContent.slice(0,jawabanNilai.textContent.length - 1)
    }
    else{
        jawabanNilai.textContent += item.value;

    }
}))


