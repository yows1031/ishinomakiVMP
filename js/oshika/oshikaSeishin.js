'use strict';

{
    const seishinImages = [
        'img/pic/oshika/seishinen/seishin1.png',
        'img/pic/oshika/seishinen/seishin2.png',
        'img/pic/oshika/seishinen/seishin3.png',
        'img/pic/oshika/seishinen/seishin4.png',
        'img/pic/oshika/seishinen/seishin5.png',
    ];
    const mask = document.getElementById('mask');
    const seishin = document.getElementById('seishin');
    const seishin_target = document.getElementById('seishin_target'); 
    const seishin_thumbnails = document.getElementById('seishin_thumbnails');
    const seishinPrev = document.getElementById('seishinPrev');
    const seishinNext = document.getElementById('seishinNext');
    const seishinBack = document.getElementById('seishinBack');

    let currentNum = 0;

    function setMainImage(seishinImages) {
        seishin_target.src = seishinImages;
    }
    
    setMainImage(seishinImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#seishin_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#seishin_thumbnails li')[currentNum].classList.add('current');
    }

   
    seishinImages.forEach((image, index) => {
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
        seishin_thumbnails.appendChild(li);
    });

    seishinNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === seishinImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(seishinImages[currentNum]);
    });

    seishinPrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = seishinImages.length -1;
        }
        addCurrentClass();
        setMainImage(seishinImages[currentNum]);
    });

    seishinBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        seishin.classList.add('hidden');
        removeCurrentClass();
        currentNum = 0;
        setMainImage(seishinImages[currentNum]);
        addCurrentClass();
    });
}