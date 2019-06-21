'use strict';

{
    const toyoImages = [
        'img/pic/oshika/toyo/toyo1.png',
        'img/pic/oshika/toyo/toyo2.png',
        'img/pic/oshika/toyo/toyo3.png',
        'img/pic/oshika/toyo/toyo4.png',
        'img/pic/oshika/toyo/toyo5.png',
    ];
    const mask = document.getElementById('mask');
    const toyo = document.getElementById('toyo');
    const toyo_target = document.getElementById('toyo_target'); 
    const toyo_thumbnails = document.getElementById('toyo_thumbnails');
    const toyoPrev = document.getElementById('toyoPrev');
    const toyoNext = document.getElementById('toyoNext');
    const toyoBack = document.getElementById('toyoBack');

    let currentNum = 0;

    function setMainImage(toyoImages) {
        toyo_target.src = toyoImages;
    }
    
    setMainImage(toyoImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#toyo_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#toyo_thumbnails li')[currentNum].classList.add('current');
    }

   
    toyoImages.forEach((image, index) => {
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
        toyo_thumbnails.appendChild(li);
    });

    toyoNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === toyoImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(toyoImages[currentNum]);
    });

    toyoPrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = toyoImages.length -1;
        }
        addCurrentClass();
        setMainImage(toyoImages[currentNum]);
    });

    toyoBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        toyo.classList.add('hidden');
        removeCurrentClass()
        currentNum = 0;
        setMainImage(toyoImages[currentNum]);
        addCurrentClass()
    });
}