(function(){
    'use strict';
    var currentNum = 0;

//     var cityHallArray = [
//         'img/pic/station/cityhall/cityhall1.jpg',
//         'img/pic/station/cityhall/cityhall2.jpg',
//         'img/pic/station/cityhall/cityhall3.jpg',
//         'img/pic/station/cityhall/cityhall4.jpg',
//         'img/pic/station/cityhall/cityhall5.jpg'
//     ];
//     var cityHallprev　= document.getElementById('cityHallprev');
//     var cityHallnext = document.getElementById('cityHallnext');
//     var cityHall_target = document.getElementById('cityHall_target');
//     var cityHallArray_thumbnails = document.getElementById('cityhallArray_thumbnails');
//     var mask = document.getElementById('mask');
// //    var cityHall = document.getElementById('cityHall');
//     var bt_cityhall = document.getElementById('bt_cityhall');
//     var back = document.getElementById('back');

//     function create_cityHall_thumbnails(){
//         var i;
//         var li;
//         var img;
//         for(i = 0; i < cityHallArray.length; i++){
//             li = document.createElement('li');
//             li.addEventListener('click', function(){
//                 cityHall_target.src = this.children[0].src;
//             });
//             img = document.createElement('img');
//             img.src = cityHallArray[i];
//             li.appendChild(img);
//             cityHallArray_thumbnails.appendChild(li);
//         }
//     }

//     create_cityHall_thumbnails();   
//     cityHallArray_thumbnails.children[currentNum].className = 'current';
var cityHallArray = [
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

function create_cityHall_thumbnails(){
    var i;
    var li;
    var img;
    for(i = 0; i < cityHallArray.length; i++){
        li = document.createElement('li');
        li.addEventListener('click', function(){
            cityhall_target.src = this.children[0].src;
        });
        img = document.createElement('img');
        img.src = cityHallArray[i];
        li.appendChild(img);
        cityhall_thumbnails.appendChild(li);
    }
}

create_cityHall_thumbnails();
cityhall_thumbnails.children[currentNum].className = 'current';

cityHallprev.addEventListener('click', function(){
        cityhall_thumbnails.children[currentNum].className = '';
        currentNum--;
        if(currentNum < 0){
            currentNum = 4;
        }
        cityhall_target.src = cityHallList[currentNum];
        cityhall_thumbnails.children[currentNum].className = 'current';
    });

    cityHallnext.addEventListener('click', function(){
        cityhall_thumbnails.children[currentNum].className = '';
        currentNum++;
        if(currentNum > 4){
            currentNum = 0;
        }
        cityhall_target.src = cityHallList[currentNum];
        cityhall_thumbnails.children[currentNum].className = 'current';        
    });
    
    // bt_cityhall.addEventListener('click', function(){
    //     mask.className = "";
    //     cityhall.className = "";
    // });

})();