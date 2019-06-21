'use strict';

{
    const sougouImages = [
        'img/pic/ogatsuHagihama/sougou/sougou1.png',
        'img/pic/ogatsuHagihama/sougou/sougou2.png',
        'img/pic/ogatsuHagihama/sougou/sougou3.png',
        'img/pic/ogatsuHagihama/sougou/sougou4.png',
        'img/pic/ogatsuHagihama/sougou/sougou5.png',
    ];
    const mask = document.getElementById('mask');
    const sougou = document.getElementById('sougou');
    const sougou_target = document.getElementById('sougou_target'); 
    const sougou_thumbnails = document.getElementById('sougou_thumbnails');
    const sougouPrev = document.getElementById('sougouPrev');
    const sougouNext = document.getElementById('sougouNext');
    const sougouBack = document.getElementById('sougouBack');

    let currentNum = 0;

    function setMainImage(sougouImages) {
        sougou_target.src = sougouImages;
    }
    
    setMainImage(sougouImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#sougou_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#sougou_thumbnails li')[currentNum].classList.add('current');
    }

   
    sougouImages.forEach((image, index) => {
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
        sougou_thumbnails.appendChild(li);
    });

    sougouNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === sougouImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(sougouImages[currentNum]);
    });

    sougouPrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = sougouImages.length -1;
        }
        addCurrentClass();
        setMainImage(sougouImages[currentNum]);
    });

    sougouBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        sougou.classList.add('hidden');
        removeCurrentClass()
        currentNum = 0;
        setMainImage(sougouImages[currentNum]);
        addCurrentClass()
    });
}