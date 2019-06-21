'use strict';

{
    const yorkImages = [
        'img/pic/kama/york/york1.png',
        'img/pic/kama/york/york2.png',
        'img/pic/kama/york/york3.png',
        'img/pic/kama/york/york4.png',
        'img/pic/kama/york/york5.png',
        ];
    const mask = document.getElementById('mask');
    const york = document.getElementById('york');
    const york_target = document.getElementById('york_target'); 
    const york_thumbnails = document.getElementById('york_thumbnails');
    const yorkPrev = document.getElementById('yorkPrev');
    const yorkNext = document.getElementById('yorkNext');
    const yorkBack = document.getElementById('yorkBack');

    let currentNum = 0;

    function setMainImage(yorkImages) {
        york_target.src = yorkImages;
    }
    
    setMainImage(yorkImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#york_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#york_thumbnails li')[currentNum].classList.add('current');
    }

   
    yorkImages.forEach((image, index) => {
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
        york_thumbnails.appendChild(li);
    });

    yorkNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === yorkImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(yorkImages[currentNum]);
    });

    yorkPrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = yorkImages.length -1;
        }
        addCurrentClass();
        setMainImage(yorkImages[currentNum]);
    });

    yorkBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        york.classList.add('hidden');
        removeCurrentClass()
        currentNum = 0;
        setMainImage(yorkImages[currentNum]);
        addCurrentClass()
    });
}