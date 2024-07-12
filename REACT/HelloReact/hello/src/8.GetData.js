import { useState } from "react";

export default function GetData(){
    const [ids, setData] = useState([]);
    return(
        <>
            <button onClick={changeData}>download</button> &nbsp;&nbsp;&nbsp;&nbsp;
            <select> 
                <option>all</option>
                <option>{ids}</option>
            </select><br />
            <span id='data'>{ids}</span>
        </>
    );

    function changeData(){
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(result => setData(JSON.stringify(result)))

        // for(const key in Object.keys(ids)){
        //     console.log(item=>item.id)
        // }
    };
}