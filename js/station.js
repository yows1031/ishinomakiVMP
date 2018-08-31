(function(){
    'use strict';
    var currentNum = 0;

    var cityhall = [
        'img/pic/station/cityhall/cityhall1.jpg',
        'img/pic/station/cityhall/cityhall2.jpg',
        'img/pic/station/cityhall/cityhall3.jpg',
        'img/pic/station/cityhall/cityhall4.jpg',
        'img/pic/station/cityhall/cityhall5.jpg'
    ];
    var cityhall_prev = document.getElementById('cityhall_prev');
    var cityhall_next = document.getElementById('cityhall_next');
    var cityhall_target = document.getElementById('cityhall_target');
    var cityhall_thumbnails = document.getElementById('cityhall_thumbnails');

    function create_cityhall_thumbnails(){
        var i;
        var li;
        var img;
        for(i = 0; i < cityhall.length; i++){
            li = document.createElement('li');
            li.addEventListener('click', function(){
                cityhall_target.src = this.children[0].src;
            });
            img = document.createElement('img');
            img.src = cityhall[i];
            li.appendChild(img);
            cityhall_thumbnails.appendChild(li);
        }
    }

    create_cityhall_thumbnails();

    cityhall_thumbnails.children[currentNum].className = 'current';

    cityhall_prev.addEventListener('click', function(){
        cityhall_thumbnails.children[currentNum].className = '';
        currentNum--;
        if(currentNum < 0){
            currentNum = 4;
        }
        cityhall_target.src = cityhall[currentNum];
        cityhall_thumbnails.children[currentNum].className = 'current';
    });

    cityhall_next.addEventListener('click', function(){
        cityhall_thumbnails.children[currentNum].className = '';
        currentNum++;
        if(currentNum > 4){
            currentNum = 0;
        }
        cityhall_target.src = cityhall[currentNum];
        cityhall_thumbnails.children[currentNum].className = 'current';        
    });

})();