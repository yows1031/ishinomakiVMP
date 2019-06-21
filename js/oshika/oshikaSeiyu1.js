'use strict';

{
    const seiyu1Images = [
        'img/pic/oshika/seiyukan1/seiyu1.png',
        'img/pic/oshika/seiyukan1/seiyu2.png',
        'img/pic/oshika/seiyukan1/seiyu3.png',
        'img/pic/oshika/seiyukan1/seiyu4.png',
        'img/pic/oshika/seiyukan1/seiyu5.png',
    ];
    const mask = document.getElementById('mask');
    const seiyu_1 = document.getElementById('seiyu_1');
    const seiyu_1_target = document.getElementById('seiyu_1_target'); 
    const seiyu_1_thumbnails = document.getElementById('seiyu_1_thumbnails');
    const seiyu_1Prev = document.getElementById('seiyu_1Prev');
    const seiyu_1Next = document.getElementById('seiyu_1Next');
    const seiyu_1Back = document.getElementById('seiyu_1Back');

    let currentNum = 0;

    function setMainImage(seiyu1Images) {
        seiyu_1_target.src = seiyu1Images;
    }
    
    setMainImage(seiyu1Images[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#seiyu_1_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#seiyu_1_thumbnails li')[currentNum].classList.add('current');
    }

   
    seiyu1Images.forEach((image, index) => {
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
        seiyu_1_thumbnails.appendChild(li);
    });

    seiyu_1Next.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === seiyu1Images.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(seiyu1Images[currentNum]);
    });

    seiyu_1Prev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = seiyu1Images.length -1;
        }
        addCurrentClass();
        setMainImage(seiyu1Images[currentNum]);
    });

    seiyu_1Back.addEventListener('click', () => {
        mask.classList.add('hidden');
        seiyu_1.classList.add('hidden');
        removeCurrentClass();
        currentNum = 0;
        setMainImage(seiyu1Images[currentNum]);
        addCurrentClass();
    });
}