/*
    ### jQuery 메모장 구현 
    1. 제목과 내용을 입력하고 등록 버튼을 누르면 localStorage에 메모객체를 저장한다.
        const memoObj
        = { "subject": "제목" , "content": "내용", "regdate": "등록일시" }
        localStorage.setItem("memo1",memoObj.toString());
    2. 좌측에는 메모의 리스트를 최신순으로 리스팅하고 각 메모에는 삭제버튼이 우측에 존재한다.
    3. 삭제버튼을 클릭하면 해당 메모가 삭제되고 리스트가 갱신된다.
    4. 메모리스트의 가장 최근 메모가 우측에 표시된다.

*/
/*
    localStorage
    key : memoList
    value : [
        { "subject": "제목" , "content": "내용", "regdate": "등록일시" },
        { "subject": "제목" , "content": "내용", "regdate": "등록일시" },
        { "subject": "제목" , "content": "내용", "regdate": "등록일시" }
    ]
*/
    // const memoArr =[];
    // memoArr[memoArr.lenth] = memoObj;
    //     if(localStorage){localStorage.setItem("memoList",JSON.stringify(memoObj));
    //     localStorage.setItem(localStorage,"memoList")
    // }


$(function(){

    printMemoList();

    function printMemoList(){
        $("#list").append(getTopMemo);
    }

    //제목과 내용을 입력하고 등록 버튼 누르면 메모 객체 생성해서 addMemo 호출
    $("#addBtn").click(function(){
        const memoObj = {
            title : $("#addTitle").val(),
            content:  $("#addTitle").val(),
            regdate: Date.now()
        };

        addMemo(memoObj);
    });

    $("#deleteBtn").click(function(){

    });

    $("#list li").click(function(){
        console.log($(this).attr("id").substr(4));
    })


    //날짜
    function newDate(regdate){
        return moment(regdate,"YY/MM/DD HH:mm").format("YY/MM/DD HH:mm");
    }

    //localStorage의 메모리스트를 가져오는 함수
    function getMemoList(){
        let memoList = localStorage.getItem("memoList");
        if (memoList==null || memoList==""){
            localStorage.setItem("memoList","[]");
            return [];
        }else{
            return JSON.parse(memoList);
        }
    }

    //localStorage에 메모 객체를 저장한다.
    function addMemo(memoObj){
        const memoListArr = getMemoList(); 
        memoListArr[memoListArr.length] = memoObj;
        localStorage.setItem("memoList", JSON.stringify(memoListArr));
        printMemoList();
    }

    //localStorage의 메모리스트에서 메모를 삭제하는 함수
    function removeMemo(key){
        // const remove(memoList)
    }

    //최신메모를 content에 보여주는 함수
    function getTopMemo(){
        $("#list").empty();
        const memoList = getMemoList().reverse();
        const memoListLeng = memoList.length;
        for(let i=0; i<memoListLeng; i++){
            $("#list").append("<li id='memo"+i+"'><br />"+ memoList[i].title+"<input class='deleteBtn' type='button' value='delete'/></li>");
        }
    }










}); // end