// class stockmanager

$(() => {

    
    //localstorage 초기화
    initLocalStorage();

    //매장목록 출력
    shopFirst();
    printShopList();

    //이벤트 핸들러 등록
    // 매장추가버튼
    $("#shopAdd").on('click', () => {
        writeShop();
    });
    //매장삭제버튼
    $("#shopDelete").on('click', () => {

    });
    //매장수정버튼
    $("#shopFix").on('click', () => {

    });

    //재고추가 버튼
    $("#stockAdd").on('click', ()=>{
        writeStock();
    })

}); //end

//localStorage 초기화
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

//매장등록
const writeShop = () => {
    const shopArr = JSON.parse(localStorage.getItem('shopList'));
    shopArr.push(new Shop(getNextShopSeq(), $("#shopname").val(), 0))
    localStorage.setItem('shopList', JSON.stringify(shopArr));
}

//매장번호 시퀀스
const getNextShopSeq = () => {
    const nextShopSeq = Number(localStorage.getItem('shopSeq'))+1;
    localStorage.setItem('shopSeq', nextShopSeq);
    return Number(nextShopSeq);
}

//매장 첫번째 목록줄
const shopFirst = () => {
    let firli = $('<li id="shopFirList"></li>');
        firli.append($('<p>NO.</p> <p>SHOP</p> <p>COUNT</p> \
                    <p>FIX</p> <p>DELETE</p>'));
        $("#shopList").append(firli);
}

// 매장목록
const getShopList = () => {
    return JSON.parse(localStorage.getItem('shopList'));
}

// 매장목록 출력
const printShopList = () => {
    getShopList().forEach(shop => {
        let li = $('<li></li>');
        li.append($(shop.shno, shop.shname, shop.count +
        '<input id="shopDelete" type="button" value="delete" /><input id="shopFix" type="button" value="fix" />'));
        $('#shopList #shopFirList').append();
    });
}














//재고등록
const writeStock = () => {
    const stockArr = JSON.parse(localStorage.getItem('stockList'));
    stockArr.push(new Stock(getNextStockSeq(), $("#stockname").val(), 0));
    localStorage.setItem('stockList', JSON.stringify(stockArr));
}

//재고번호 시퀀스
const getNextStockSeq = () => {
    const nextStockSeq = Number(localStorage.getItem('stockSeq'))+1;
    localStorage.setItem('stockSeq', nextStockSeq);
    return Number(nextStockSeq);
}

// 재고목록

// 재고목록 출력




