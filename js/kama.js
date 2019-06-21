'use strict'

{
    const btn_Genki = document.getElementsByClassName('btn_Genki');
    const btn_Nishimatsu = document.getElementsByClassName('btn_Nishimatsu');
    const btn_Daiso = document.getElementsByClassName('btn_Daiso');
    const btn_Ainoya = document.getElementsByClassName('btn_Ainoya');
    const btn_MiniStop = document.getElementsByClassName('MiniStop');
    const btn_Daisyogun = document.getElementsByClassName('btn_Daisyogun');
    const btn_Utahime = document.getElementsByClassName('btn_Utahime');
    const btn_Riutein = document.getElementsByClassName('btn_Rutein');
    const btn_Seims = document.getElementsByClassName('btn_Seims');
    const btn_Yoshinoya = document.getElementsByClassName('btn_Yoshinoya');
    const btn_Au = document.getElementsByClassName('btn_Au');
    const btn_Docomo = document.getElementsByClassName('btn_Docomo');
    const btn_Maruhan = document.getElementsByClassName('btn_Maruhan');
    const btn_SoftBank = document.getElementsByClassName('btn_SoftBank');
    const btn_York = document.getElementsByClassName('btn_York');
    const btn_Kenmin = document.getElementsByClassName('btn_Kenmin');
    const btn_LowSon = document.getElementsByClassName('btn_LowSon');
    const btn_Wing = document.getElementsByClassName('btn_Wing');
    const btn_Huureai = document.getElementsByClassName('btn_Hureai');

    
    const mask = document.getElementById('mask');
    const spMenu = document.getElementById('spMenu');
    const york = document.getElementById('york');
    // モバイル版のメニュー開閉表示
    spMenu.addEventListener('click', () =>{
        menu.classList.toggle('hidden');
    });

    function create_btn_York() {
        let i;
        for(i=0; i < btn_York.length; i++) {
            btn_York[i].addEventListener('click', () => {
                mask.classList.remove('hidden');
                york.classList.remove('hidden');
            })
        }
    };
    create_btn_York();

}