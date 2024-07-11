import { useState } from "react";

export default function GetData(){
    const [data, setData] = useState('');
    const ids = [];
    return(
        <>
            <button onClick={changeData}>download</button> &nbsp;&nbsp;&nbsp;&nbsp;
            <select> 
                <option>all</option>
                <option>{ids}</option>
            </select><br />
            <span id='data'>{data}</span>
        </>
    );

    function changeData(){
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(result => setData(JSON.stringify(result)))
    };
}