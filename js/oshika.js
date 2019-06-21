'use strict'

{
    const btn_Toyo = document.getElementsByClassName('btn_Toyo');
    const btn_sogo = document.getElementsByClassName('btn_sogo');
    const btn_seishin = document.getElementsByClassName('btn_seishin');
    const btn_seiyu1 = document.getElementsByClassName('btn_seiyu1');
    const btn_seiyu2 = document.getElementsByClassName('btn_seiyu2');
    const btn_maru1 = document.getElementsByClassName('btn_maru1');
    const btn_maru2 = document.getElementsByClassName('btn_maru2');
    const btn_yoriiso = document.getElementsByClassName('btn_yoriiso');

    const mask = document.getElementById('mask');
    const spMenu = document.getElementById('spMenu');
    const toyo = document.getElementById('toyo');
    const sogo = document.getElementById('sogo');
    const seishin = document.getElementById('seishin');
    const seiyu_1 = document.getElementById('seiyu_1');
    const seiyu_2 = document.getElementById('seiyu_2');
    const maru_1 = document.getElementById('maru_1');
    const maru_2 = document.getElementById('maru_2');
    const yoriiso = document.getElementById('yoriiso');

    // モバイル版のメニュー開閉表示
    spMenu.addEventListener('click', () =>{
        menu.classList.toggle('hidden');
    });

    function create_btn_Toyo() {
        let i;
        for(i=0; i < btn_Toyo.length; i++) {
            btn_Toyo[i].addEventListener('click', () => {
                mask.classList.remove('hidden');
                toyo.classList.remove('hidden');
            })
        }
    };

    function create_btn_sogo() {
        let i;
        for(i=0; i < btn_sogo.length; i++) {
            btn_sogo[i].addEventListener('click', () => {
                mask.classList.remove('hidden');
                sogo.classList.remove('hidden');
            })
        }
    };

    function create_btn_seishin() {
        let i;
        for(i=0; i < btn_seishin.length; i++) {
            btn_seishin[i].addEventListener('click', () => {
                mask.classList.remove('hidden')
                seishin.classList.remove('hidden');
            })
        }
    }

    function create_btn_seiyu1() {
        let i;
        for(i=0; i < btn_seiyu1.length; i++) {
            btn_seiyu1[i].addEventListener('click', () => {
                mask.classList.remove('hidden');
                seiyu_1.classList.remove('hidden');
            })
        }
    }

    function create_btn_seiyu2() {
        let i;
        for(i=0; i < btn_seiyu2.length; i++) {
            btn_seiyu2[i].addEventListener('click', () => {
                mask.classList.remove('hidden')
                seiyu_2.classList.remove('hidden');
            })
        }
    }

    function create_btn_maru1() {
        let i;
        for(i=0; i < btn_maru1.length; i++) {
            btn_maru1[i].addEventListener('click', () => {
                mask.classList.remove('hidden')
                maru_1.classList.remove('hidden');
            })
        }
    }

    function create_btn_maru2() {
        let i;
        for(i=0; i < btn_maru2.length; i++) {
            btn_maru2[i].addEventListener('click', () => {
                mask.classList.remove('hidden')
                maru_2.classList.remove('hidden');
            })
        }
    }

    function create_btn_yoriiso() {
        let i;
        for(i=0; i < btn_yoriiso.length; i++) {
            btn_yoriiso[i].addEventListener('click', () => {
                mask.classList.remove('hidden')
                yoriiso.classList.remove('hidden');
            })
        }
    }

    create_btn_Toyo();
    create_btn_sogo();
    create_btn_seishin();
    create_btn_seiyu1();
    create_btn_seiyu2();
    create_btn_maru1();
    create_btn_maru2();
    create_btn_yoriiso();

}