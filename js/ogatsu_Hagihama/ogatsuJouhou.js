'use strict';

{
    const jouhouImages = [
        'img/pic/ogatsuHagihama/jouhou/jouhou1.png',
        'img/pic/ogatsuHagihama/jouhou/jouhou2.png',
        'img/pic/ogatsuHagihama/jouhou/jouhou3.png',
        'img/pic/ogatsuHagihama/jouhou/jouhou4.png',
        'img/pic/ogatsuHagihama/jouhou/jouhou5.png',
        ];
    const mask = document.getElementById('mask');
    const jouhou = document.getElementById('jouhou');
    const jouhou_target = document.getElementById('jouhou_target'); 
    const jouhou_thumbnails = document.getElementById('jouhou_thumbnails');
    const jouhouPrev = document.getElementById('jouhouPrev');
    const jouhouNext = document.getElementById('jouhouNext');
    const jouhouBack = document.getElementById('jouhouBack');

    let currentNum = 0;

    function setMainImage(jouhouImages) {
        jouhou_target.src = jouhouImages;
    }
    
    setMainImage(jouhouImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#jouhou_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#jouhou_thumbnails li')[currentNum].classList.add('current');
    }

   
    jouhouImages.forEach((image, index) => {
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
        jouhou_thumbnails.appendChild(li);
    });

    jouhouNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === jouhouImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(jouhouImages[currentNum]);
    });

    jouhouPrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = jouhouImages.length -1;
        }
        addCurrentClass();
        setMainImage(jouhouImages[currentNum]);
    });

    jouhouBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        jouhou.classList.add('hidden');
        removeCurrentClass()
        currentNum = 0;
        setMainImage(jouhouImages[currentNum]);
        addCurrentClass()
    });
}