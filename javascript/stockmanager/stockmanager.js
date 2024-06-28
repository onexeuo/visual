// class stockmanager

$(() => {
    // 시간
    setInterval(getTime,1000);
    
    //localstorage 초기화
    initLocalStorage();

    //매장목록 출력
    shopFirst();
    printShopList();

    //재고목록 출력
    stockFirst();
    printStockList();
    
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
    $("#stockAdd").on('click', () => {
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
    printShopList();
}

//매장번호 시퀀스
const getNextShopSeq = () => {
    const nextShopSeq = Number(localStorage.getItem('shopSeq'))+1;
    localStorage.setItem('shopSeq', nextShopSeq);
    return Number(nextShopSeq);
}

//매장 첫번째 목록줄
const shopFirst = () => {
    let shopfirli = $('<li id="shopFirList"></li>');
    shopfirli.append($('<p>NO.</p> <p>SHOP</p> <p>COUNT</p> \
                    <p>FIX</p> <p>DELETE</p>'));
        $("#shopList").append(shopfirli);
}

// 매장목록
const getShopList = () => {
    return JSON.parse(localStorage.getItem('shopList'));
}

// 매장목록 출력
const printShopList = () => {
    $('#shopList').html('');
    getShopList().forEach(shop => {
        let shopLi = $('<li id="shopSecList"></li>');
        shopLi.append('<p>'+shop.shno+'</p><p>' + shop.shname +'</p><p>' + shop.shtotst + '</p> \
        <input id="shopFix" type="button" value="fix" /><input id="shopDelete" type="button" value="delete" />');
        $('#shopList').append(shopLi);
    });
}

const getTime = () => {
    //현재시간
    const date = new Date();

    let yoil = '';
    switch (date.getDay()){
        case 0 : yoil = '(일)'; break;
        case 1 : yoil = '(월)'; break;
        case 2 : yoil = '(화)'; break;
        case 3 : yoil = '(수)'; break;
        case 4 : yoil = '(목)'; break;
        case 5 : yoil = '(금)'; break;
        case 6 : yoil = '(토)'; 
    }

    //시간 문자열 생성
    let timestr = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours() > 12 ? '오후' : '오전'}\
    ${yoil} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `; 

    return $('#stockDate').html(timestr);
}





//재고등록
const writeStock = () => {
    const stockArr = JSON.parse(localStorage.getItem('stockList'));
    stockArr.push(new Stock(getNextStockSeq(), $("#stockname").val(), 0));
    localStorage.setItem('stockList', JSON.stringify(stockArr));
    printStockList();
}

//재고번호 시퀀스
const getNextStockSeq = () => {
    const nextStockSeq = Number(localStorage.getItem('stockSeq'))+1;
    localStorage.setItem('stockSeq', nextStockSeq);
    return Number(nextStockSeq);
}

// 재고 첫번째 목록줄
const stockFirst = () => {
    let stockfirli = $('<li id="stockFirList"></li>');
    stockfirli.append($('<p>NO.</p><p>STOCK</p><p>COUNT</p><p>JOIN DATE</p> \
                        <p>ADD DATE</p><p>FIX</p><p>DELETE</p></li>'));
        $("#stockList").append(stockfirli);
}

// 재고목록
const getStockList = () => {
    return JSON.parse(localStorage.getItem('stockList'));
}

// 재고목록 출력
const printStockList = () =>{
    $('#stockList').html('');
    getStockList().forEach(stock => {
        let stockLi = $('<li id="stockSecList"></li>');
        stockLi.append('<p>'+ stock.stno+'</p><p>'+ stock.stname+'</p><p>'+
                        stock.stamt +'</p><p>'+stock.stindate+'</p><p>'+
                        stock.strgdate+'</p>'+'<input id="stockFix" type="button" value="fix" />\
                        <input id="stockDelete" type="button" value="delete" />');
        $('#stockList').append(stockLi)
    })
}



