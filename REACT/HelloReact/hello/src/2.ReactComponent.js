// 1. function문법 component
// function ReactComponent() {
//     const message ='Function문법 Component';
//     return(
//         <h1>{message}</h1>
//     )
// }
// export default ReactComponent;



// 2. class문법 Component
import { Component } from "react";
export default class ReactComponent extends Component{
    render(){
        const message = 'class문법 Component';
        return(
            <h1>{message}</h1>
        );
    }
};
