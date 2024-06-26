// class stockmanager

$(() => {
    //localstorage 초기화
    initLocalStorage();

    // 매장추가버튼
    $("#shopAdd").click(() => {

    });

}); //end

const initLocalStorage = (() => {
    if(localStorage){
        if(!localStorage.getItem('shopSeq')){
            localStorage.setItem('shopSeq','0');
        }
        if(!localStorage.getItem('stockSeq')){
            localStorage.setItem('stockSeq','0');
        }
        if(!localStorage.getItem('shopList')){
            localStorage.setItem('shopList','[]');
        }
        if(!localStorage.getItem('stockList')){
            localStorage.setItem('stockList','[]');
        }
    }
});

const writeShop = () => {
    
}

const getNextShopSeq = () => {
    const nextShopSeq = Number(localStorage.getItem('shopSeq'))+1;
    localStorage.setItem('shopSeq', nextShopSeq);
    return Number(nextShopSeq);

}










