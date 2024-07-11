import StringOperator from "./5.StringOperator";

export default function StringReader(){
    return(
        <>
            <StringOperator onChangeMode={
                function(e){
                    console.log("length : " + e.target.value.length);
                }
            }/>
        </>
    );
}