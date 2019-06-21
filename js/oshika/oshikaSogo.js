'use strict';

{
    const sogoImages = [
        'img/pic/oshika/sougou/sougou1.png',
        'img/pic/oshika/sougou/sougou2.png',
        'img/pic/oshika/sougou/sougou3.png',
        'img/pic/oshika/sougou/sougou4.png',
        'img/pic/oshika/sougou/sougou5.png',
    ];
    const mask = document.getElementById('mask'); 
    const sogo = document.getElementById('sogo');
    const sogo_target = document.getElementById('sogo_target'); 
    const sogo_thumbnails = document.getElementById('sogo_thumbnails');
    const sogoPrev = document.getElementById('sogoPrev');
    const sogoNext = document.getElementById('sogoNext');
    const sogoBack = document.getElementById('sogoBack'); 

    let currentNum = 0;

    function setMainImage(sogoImages) {
        sogo_target.src = sogoImages;
    }
    
    setMainImage(sogoImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#sogo_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#sogo_thumbnails li')[currentNum].classList.add('current');
    }

   
    sogoImages.forEach((image, index) => {
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
        sogo_thumbnails.appendChild(li);
    });

    sogoNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === sogoImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(sogoImages[currentNum]);
    });

    sogoPrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum =sogoImages.length -1;
        }
        addCurrentClass();
        setMainImage(sogoImages[currentNum]);
    });

    sogoBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        sogo.classList.add('hidden');
        removeCurrentClass();
        currentNum = 0;
        setMainImage(sogoImages[currentNum]);
        addCurrentClass();
    });
}