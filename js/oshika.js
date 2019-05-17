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
    const toyo = document.getElementById('toyo');
    const sogo = document.getElementById('sogo');

    const toyoBack = document.getElementById('toyoBack');
    const sogoBack = document.getElementById('sogoBack');

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
                console.log('testSeishin');
            })
        }
    }

    function create_btn_seiyu1() {
        let i;
        for(i=0; i < btn_seiyu1.length; i++) {
            btn_seiyu1[i].addEventListener('click', () => {
                console.log('testSeiyu1');
            })
        }
    }

    function create_btn_seiyu2() {
        let i;
        for(i=0; i < btn_seiyu2.length; i++) {
            btn_seiyu2[i].addEventListener('click', () => {
                console.log('testSeiyu2');
            })
        }
    }

    function create_btn_maru1() {
        let i;
        for(i=0; i < btn_maru1.length; i++) {
            btn_maru1[i].addEventListener('click', () => {
                console.log('testMaru1');
            })
        }
    }

    function create_btn_maru2() {
        let i;
        for(i=0; i < btn_maru2.length; i++) {
            btn_maru2[i].addEventListener('click', () => {
                console.log('testMaru2');
            })
        }
    }

    function create_btn_yoriiso() {
        let i;
        for(i=0; i < btn_yoriiso.length; i++) {
            btn_yoriiso[i].addEventListener('click', () => {
                console.log('testYoriiso');
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

    toyoBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        toyo.classList.add('hidden');
    })

    sogoBack.addEventListener('click', () => {
        mask.classList.add('hidden');
        sogo.classList.add('hidden');
    })
}