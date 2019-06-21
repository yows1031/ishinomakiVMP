'use strict';

{
    const yoriisoImages = [
        'img/pic/oshika/yoriiso/yoriiso1.png',
        'img/pic/oshika/yoriiso/yoriiso2.png',
        'img/pic/oshika/yoriiso/yoriiso3.png',
        'img/pic/oshika/yoriiso/yoriiso4.png',
        'img/pic/oshika/yoriiso/yoriiso4.png',
    ];
    const mask = document.getElementById('mask');
    const yoriiso = document.getElementById('yoriiso');
    const yoriiso_target = document.getElementById('yoriiso_target'); 
    const yoriiso_thumbnails = document.getElementById('yoriiso_thumbnails');
    const yoriisoPrev = document.getElementById('yoriisoPrev');
    const yoriisoNext = document.getElementById('yoriisoNext');
    const yoriisoBack = document.getElementById('yoriisoBack');

    let currentNum = 0;

    function setMainImage(yoriisoImages) {
        yoriiso_target.src = yoriisoImages;
    }
    
    setMainImage(yoriisoImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#yoriiso_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#yoriiso_thumbnails li')[currentNum].classList.add('current');
    }

   
    yoriisoImages.forEach((image, index) => {
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
        yoriiso_thumbnails.appendChild(li);
    });

    yoriisoNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === yoriisoImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(yoriisoImages[currentNum]);
    });

    yoriisoPrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = yoriisoImages.length -1;
        }
        addCurrentClass();
        setMainImage(yoriisoImages[currentNum]);
    });

    yoriisoBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        yoriiso.classList.add('hidden');
        removeCurrentClass();
        currentNum = 0;
        setMainImage(yoriisoImages[currentNum]);
        addCurrentClass();
    });
}