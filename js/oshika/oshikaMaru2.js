'use strict';

{
    const maru2Images = [
        'img/pic/oshika/maru2/2maru1.png',
        'img/pic/oshika/maru2/2maru2.png',
        'img/pic/oshika/maru2/2maru3.png',
        'img/pic/oshika/maru2/2maru4.png',
        'img/pic/oshika/maru2/2maru5.png',
    ];
    const mask = document.getElementById('mask');
    const maru_2 = document.getElementById('maru_2');
    const maru_2_target = document.getElementById('maru_2_target'); 
    const maru_2_thumbnails = document.getElementById('maru_2_thumbnails');
    const maru_2Prev = document.getElementById('maru_2Prev');
    const maru_2Next = document.getElementById('maru_2Next');
    const maru_2Back = document.getElementById('maru_2Back');

    let currentNum = 0;

    function setMainImage(maru2Images) {
        maru_2_target.src = maru2Images;
    }
    
    setMainImage(maru2Images[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#maru_2_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#maru_2_thumbnails li')[currentNum].classList.add('current');
    }

   
    maru2Images.forEach((image, index) => {
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
        maru_2_thumbnails.appendChild(li);
    });

    maru_2Next.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === maru2Images.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(maru2Images[currentNum]);
    });

    maru_2Prev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = maru2Images.length -1;
        }
        addCurrentClass();
        setMainImage(maru2Images[currentNum]);
    });

    maru_2Back.addEventListener('click', () => {
        mask.classList.add('hidden');
        maru_2.classList.add('hidden');
        removeCurrentClass();
        currentNum = 0;
        setMainImage(mar2Images[currentNum]);
        addCurrentClass();
    });
}