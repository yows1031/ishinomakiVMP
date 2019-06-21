'use strict'

{
    const btn_Sougou = document.getElementsByClassName('btn_sougou');
    const btn_Hospital = document.getElementsByClassName('btn_hospital');
    const btn_Jouhou = document.getElementsByClassName('btn_jouhou');
    const btn_Vilege = document.getElementsByClassName('btn_vilege');

    const mask = document.getElementById('mask');
    const spMenu = document.getElementById('spMenu');
    const sougou = document.getElementById('sougou');
    const hospital = document.getElementById('hospital');
    const jouhou = document.getElementById('jouhou');
    const vilege = document.getElementById('vilege');

    // モバイル版のメニュー開閉表示
    spMenu.addEventListener('click', () =>{
        menu.classList.toggle('hidden');
    });

    function create_btn_Sougou() {
        let i;
        for(i=0; i < btn_Sougou.length; i++) {
            btn_Sougou[i].addEventListener('click', () => {
                mask.classList.remove('hidden');
                sougou.classList.remove('hidden');
            })
        }
    };

    function create_btn_Hospital() {
        let i;
        for(i=0; i < btn_Hospital.length; i++) {
            btn_Hospital[i].addEventListener('click', () => {
                mask.classList.remove('hidden');
                hospital.classList.remove('hidden');
            })
        }
    };

    function create_btn_Jouhou() {
        let i;
        for(i=0; i < btn_Jouhou.length; i++) {
            btn_Jouhou[i].addEventListener('click', () => {
                mask.classList.remove('hidden');
                jouhou.classList.remove('hidden');
            })
        }
    };

    function create_btn_Vilege() {
        let i;
        for(i=0; i < btn_Vilege.length; i++) {
            btn_Vilege[i].addEventListener('click', () => {
                mask.classList.remove('hidden');
                vilege.classList.remove('hidden');
            })
        }
    };


    create_btn_Sougou();
    create_btn_Hospital();
    create_btn_Jouhou();
    create_btn_Vilege();
};
