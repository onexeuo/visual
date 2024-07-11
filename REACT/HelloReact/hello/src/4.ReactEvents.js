// React에서 이벤트 처리

// 1. 유사엘리먼트 내부에 이벤트 속성(onChane, onClick 등등)
//     값으로 표현식(콜백함수)를 사용해 이벤트 처리
//     - 유사엘리먼트 : JSX내부에 HTML엘리먼트처럼 사용하는 엘리먼트
//     - 이벤트속성명은 on + 대문자로 시작하는 이벤트 타입 

// 2. 하위 컴포넌트 onChangeMode라는 속성을 사용해 이벤트 처리

export default function ReactEvents(){
    const message = 'From ReactEvents : ';
    return(
        <>
            <p>
                <a href="http://www.naver.com" onClick={gotoLink}>naver</a>
            </p>
            <select onChange={selChange}>
                <option value=''>value</option>
                <option value='ko'>korea</option>
                <option value='cn'>china</option>
                <option value='jp'>japan</option>
            </select>
            <p>
                male : <input type='checkbox' name='cb' value='male' onClick={cbClick} /> &nbsp;
                female : <input type='checkbox' name='cb' value='female' onClick={cbClick} /> 
            </p>
            <p>
                write : <input type='text' onKeyUp={txtChange} />
            </p>
            <Article onChangeMode={
                function(e){
                    console.log(message + e.target.value);
                }
            } />
        </>
    );

    function gotoLink(e){
        e.preventDefault();
        window.location.href='http://www.google.com';
    }
    function selChange(e){
        const value = e.target.value;
        if(value){
            console.log(value);
        }
    }
    function cbClick(e){
        console.log(e.target.value);
    }
    function txtChange(e){
        console.log(e.target.value);
    }

}// ReactEvents

function Article(props){
    return(
        <textarea onKeyUp={props.onChangeMode}></textarea>
    )
}
