// class stockmanager


$(() => {
    // 시간
    setInterval(getTime,1000);
    
    //localstorage 초기화
    initLocalStorage();

    //매장목록 출력
    printShopList();

    //재고목록 출력
    printStockList();

    
    //이벤트 핸들러 등록
    // 매장추가버튼
    $("#shopAdd").on('click', () => {
        if($("#shopname").val() === ''){
            return;    
        }
        writeShop();
        $("#shopname").val('');

    });

    //재고추가 버튼
    $("#stockAdd").on('click', () => {
        if($("#stockname").val() === '' || $("#stockCount").val() === ''){
            return;
        }
        writeStock();
        $("#stockname").val('');
        $("#stockCount").val('');
        sleepStock();
    })

}); //end


//localStorage 초기화
const initLocalStorage = (() => {
    if(localStorage){
        if(!localStorage.getItem('shopSeq')){
            localStorage.setItem('shopSeq','0');
        }
        // if(!localStorage.getItem('stockSeq')){
        //     localStorage.setItem('stockSeq','0');
        // }
        if(!localStorage.getItem('shopList')){
            localStorage.setItem('shopList','[]');
        }
        if(!localStorage.getItem('stockList')){
            localStorage.setItem('stockList','[]');
        }
    }
});




///////////////////////////////////////////////////////////////////////////////////////////////
//매장등록
const writeShop = () => {
    const shopArr = JSON.parse(localStorage.getItem('shopList'));
    const nowShop = new Shop(getNextShopSeq(), $("#shopname").val(),0);
    shopArr.push(nowShop);
    localStorage.setItem('shopList', JSON.stringify(shopArr));
    printShopList();
}

//매장번호 시퀀스
const getNextShopSeq = () => {
    const nextShopSeq = Number(localStorage.getItem('shopSeq'))+1 ;
    localStorage.setItem('shopSeq', nextShopSeq);
    return Number(nextShopSeq);
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
        shopLi.append(`<p>${shop.shno}</p><p>${shop.shname}</p><p>${shop.shtotst}</p>\
      <input onclick="deleteShop(${shop.shno})" id="shopDelete" type="button" value="delete" />\
      <input onclick="clickShop(${shop.shno})" id="goStock" type="button" value=">" style="width:20px;" />`);
        $('#shopList').append(shopLi);
    });
}



// 매장목록 삭제
const deleteShop = (key) => {
    const shopListArr = getShopList();
    shopListArr.splice(key,1);
    localStorage.setItem("shopList", JSON.stringify(shopListArr));
    printShopList();
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
// 매장 재고 재우기 깨우기
const sleepStock = () => {
    $("#stockname").attr('disabled','disabled');
    $("#stockCount").attr('disabled','disabled');
    $("#stockAdd").attr('disabled','disabled');
}

const wakeupStock = () => {
    $("#stockname").removeAttr('disabled');
    $("#stockCount").removeAttr('disabled');
    $("#stockAdd").removeAttr('disabled');
}



////////////////////////////////////////////////////////////////////////////////////////////////////
// 매장 넘버 넣기
let clickShopSeq = null;
//매장 온클릭버튼에 넣어준다.
const clickShop = (shopSeq) => {
    clickShopSeq = shopSeq; 
    wakeupStock();
}



//재고등록
const writeStock = () => {
    const stockArr = JSON.parse(localStorage.getItem('stockList'));
    const nowStock = new Stock(clickShopSeq,$("#stockname").val(), $("#stockCount").val(), getTime());
    stockArr.push(nowStock);
    localStorage.setItem('stockList', JSON.stringify(stockArr));
    printStockList();
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
        stockLi.append(`<p>${stock.stno}</p><p>${stock.stname}</p><p>${stock.stamt}</p><p>${stock.stindate}</p>\
        <input onclick="deleteStock(${stock.stno})" id="stockDelete" type="button" value="delete" />`);
        $('#stockList').append(stockLi);
    })
}

// 재고목록 삭제
const deleteStock = (key) => {
    const StockListArr = getStockList();
    StockListArr.splice(key,1);
    localStorage.setItem("stockList", JSON.stringify(StockListArr));
    printStockList();
}











///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//현재시간
const getTime = () => {
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

    $('#stockDate').html(timestr);
    return timestr;
}