'use strict';

{
    const hospitalImages = [
        'img/pic/ogatsuHagihama/hospital/hospital1.png',
        'img/pic/ogatsuHagihama/hospital/hospital2.png',
        'img/pic/ogatsuHagihama/hospital/hospital3.png',
        'img/pic/ogatsuHagihama/hospital/hospital4.png',
        'img/pic/ogatsuHagihama/hospital/hospital5.png',
    ];
    const mask = document.getElementById('mask');
    const hospital = document.getElementById('hospital');
    const hospital_target = document.getElementById('hospital_target'); 
    const hospital_thumbnails = document.getElementById('hospital_thumbnails');
    const hospitalPrev = document.getElementById('hospitalPrev');
    const hospitalNext = document.getElementById('hospitalNext');
    const hospitalBack = document.getElementById('hospitalBack');

    let currentNum = 0;

    function setMainImage(hospitalImages) {
        hospital_target.src = hospitalImages;
    }
    
    setMainImage(hospitalImages[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#hospital_thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#hospital_thumbnails li')[currentNum].classList.add('current');
    }

   
    hospitalImages.forEach((image, index) => {
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
        hospital_thumbnails.appendChild(li);
    });

    hospitalNext.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === hospitalImages.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(hospitalImages[currentNum]);
    });

    hospitalPrev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = hospitalImages.length -1;
        }
        addCurrentClass();
        setMainImage(hospitalImages[currentNum]);
    });

    hospitalBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        hospital.classList.add('hidden');
        removeCurrentClass()
        currentNum = 0;
        setMainImage(hospitalImages[currentNum]);
        addCurrentClass()
    });
}