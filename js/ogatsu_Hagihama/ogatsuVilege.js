'use strict';

{
    const vilegeImages = [
        'img/pic/ogatsuHagihama/vilege/vilege1.png',
        'img/pic/ogatsuHagihama/vilege/vilege2.png',
        'img/pic/ogatsuHagihama/vilege/vilege3.png',
        'img/pic/ogatsuHagihama/vilege/vilege4.png',
        'img/pic/ogatsuHagihama/vilege/vilege5.png',
        ];
    const mask = document.getElementById('mask');
    const vilege = document.getElementById('vilege');
    const vilege_target = document.getElementById('vilege_target'); 
    const vilege_thumbnails = document.getElementById('vilege_thumbnails');
    const vilegePrev = document.getElementById('vilegePrev');
    const vilegeNext = document.getElementById('vilegeNext');
    const vilegeBack = document.getElementById('vilegeBack');

    let currentNum = 0;

    function setMainImage(vilegeImages) {
        vilege_target.src = vilegeImages;
    }
    
    setMainImage(vilegeImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#vilege_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#vilege_thumbnails li')[currentNum].classList.add('current');
    }

   
    vilegeImages.forEach((image, index) => {
        const li = document.createElement('li');
        if (index === currentNum) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            setMainImage(image);
            removeCurrentClass();
            currentNum  = index;
            addCurrentClass();
        })
        const img = document.createElement('img');
        img.src = image;
        li.appendChild(img);
        vilege_thumbnails.appendChild(li);
    });

    vilegeNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === vilegeImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(vilegeImages[currentNum]);
    });

    vilegePrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = vilegeImages.length -1;
        }
        addCurrentClass();
        setMainImage(vilegeImages[currentNum]);
    });

    vilegeBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        vilege.classList.add('hidden');
        removeCurrentClass()
        currentNum = 0;
        setMainImage(vilegeImages[currentNum]);
        addCurrentClass()
    });
}