const slider = document.getElementsByClassName('slider')[0];
        const glow = document.getElementsByClassName('glow')[0];
        const h2InInfo = document.getElementsByTagName('h2')[0];
        slider.addEventListener('click', function(){
            slider.classList.toggle('color');
            if(slider.classList.contains('color')){
                document.body.style.backgroundColor = 'rgb(221, 221, 221)';
                glow.style.setProperty('--color', '39, 39, 39');
                glow.style.setProperty('background-color', 'rgb(39, 39, 39)');
                h2InInfo.style.setProperty('color', 'rgb(39, 39, 39)')
            }else{
                document.body.style.backgroundColor = 'rgb(39, 39, 39)';
                glow.style.setProperty('--color', '221, 221, 221');
                glow.style.setProperty('background-color', 'rgb(221, 221, 221)');
                h2InInfo.style.setProperty('color', 'rgb(221, 221, 221)');

            }
        })