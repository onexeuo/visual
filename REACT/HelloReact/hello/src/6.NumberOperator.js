export default function NumberOperator(props){
    return(
        <>
            <input id='num1' type='text'  /> &nbsp;
            <input id='num2' type='text'  /> &nbsp;
            <input id='btn' type='button' value='btn' onClick={props.onChangeMode}/> <br />
            합 : <span id="result"></span>
        </>
    )
}