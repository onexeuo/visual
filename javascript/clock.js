// 시계만들기
// 2024년 6월 27일 오후 2:27:10 

$(function(){
    setInterval(getTime,1000);

});

const getTime = () => {
    //현재시간
    const date = new Date();

    let yoil = '';
    switch (date.getDay()){
        case 0 : yoil = '일요일'; break;
        case 1 : yoil = '월요일'; break;
        case 2 : yoil = '화요일'; break;
        case 3 : yoil = '수요일'; break;
        case 4 : yoil = '목요일'; break;
        case 5 : yoil = '금요일'; break;
        case 6 : yoil = '토요일'; 
    }

    //시간 문자열 생성
    let timestr = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours() > 12 ? '오후' : '오전'}\
    ${yoil} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()} `; 

    //화면에 출력
    return $('h1').html(timestr);
}


