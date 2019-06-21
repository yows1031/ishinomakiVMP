'use strict';

{
    const seiyu2Images = [
        'img/pic/oshika/seiyukan2/2seiyu1.png',
        'img/pic/oshika/seiyukan2/2seiyu2.png',
        'img/pic/oshika/seiyukan2/2seiyu3.png',
        'img/pic/oshika/seiyukan2/2seiyu4.png',
        'img/pic/oshika/seiyukan2/2seiyu5.png',
    ];
    const mask = document.getElementById('mask');
    const seiyu_2 = document.getElementById('seiyu_2');
    const seiyu_2_target = document.getElementById('seiyu_2_target'); 
    const seiyu_2_thumbnails = document.getElementById('seiyu_2_thumbnails');
    const seiyu_2Prev = document.getElementById('seiyu_2Prev');
    const seiyu_2Next = document.getElementById('seiyu_2Next');
    const seiyu_2Back = document.getElementById('seiyu_2Back');

    let currentNum = 0;

    function setMainImage(seiyu2Images) {
        seiyu_2_target.src = seiyu2Images;
    }
    
    setMainImage(seiyu2Images[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#seiyu_2_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#seiyu_2_thumbnails li')[currentNum].classList.add('current');
    }

   
    seiyu2Images.forEach((image, index) => {
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
        seiyu_2_thumbnails.appendChild(li);
    });

    seiyu_2Next.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === seiyu2Images.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(seiyu2Images[currentNum]);
    });

    seiyu_2Prev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = seiyu2Images.length -1;
        }
        addCurrentClass();
        setMainImage(seiyu2Images[currentNum]);
    });

    seiyu_2Back.addEventListener('click', () => {
        mask.classList.add('hidden');
        seiyu_2.classList.add('hidden');
        removeCurrentClass();
        currentNum = 0;
        setMainImage(seiyu2Images[currentNum]);
        addCurrentClass();
    });
}