'use strict';

{
    const maru1Images = [
        'img/pic/oshika/maru1/maru1.png',
        'img/pic/oshika/maru1/maru2.png',
        'img/pic/oshika/maru1/maru3.png',
        'img/pic/oshika/maru1/maru4.png',
        'img/pic/oshika/maru1/maru5.png',
    ];
    const mask = document.getElementById('mask');
    const maru_1 = document.getElementById('maru_1');
    const maru_1_target = document.getElementById('maru_1_target'); 
    const maru_1_thumbnails = document.getElementById('maru_1_thumbnails');
    const maru_1Prev = document.getElementById('maru_1Prev');
    const maru_1Next = document.getElementById('maru_1Next');
    const maru_1Back = document.getElementById('maru_1Back');

    let currentNum = 0;

    function setMainImage(maru1Images) {
        maru_1_target.src = maru1Images;
    }
    
    setMainImage(maru1Images[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#maru_1_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#maru_1_thumbnails li')[currentNum].classList.add('current');
    }

   
    maru1Images.forEach((image, index) => {
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
        maru_1_thumbnails.appendChild(li);
    });

    maru_1Next.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === maru1Images.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(maru1Images[currentNum]);
    });

    maru_1Prev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = maru1Images.length -1;
        }
        addCurrentClass();
        setMainImage(maru1Images[currentNum]);
    });

    maru_1Back.addEventListener('click', () => {
        mask.classList.add('hidden');
        maru_1.classList.add('hidden');
        removeCurrentClass();
        currentNum = 0;
        setMainImage(maru1Images[currentNum]);
        addCurrentClass();
    });
}