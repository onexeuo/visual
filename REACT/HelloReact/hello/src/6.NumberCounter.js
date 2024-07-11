import NumberOperator from "./6.NumberOperator";

export default function NumberCounter(){
    
    return(
            <NumberOperator onChangeMode={
                function(){
                    const num1 = Number(document.querySelector("#num1").value);
                    const num2 = Number(document.querySelector("#num2").value);
                    document.querySelector("#result").innerHTML = num1+num2;
                }
            } />
    )
}

