import React, { useEffect }  from "react";
import { useState } from "react"

const EvenHandler = (props, handleIncrease) => {
    const [name, setName] = useState('Anya');
    const changeNameToAnya=()=>setName('Anya')
    const changeNameToLoid=()=>setName('Loid')
    const changeNameToYor=()=>setName('Yor')
    useEffect(()=>{
        console.log('HEllo World')
    },[name]);
    return (
    <div>
        <h1>Name Clicked : {name}</h1>
        <h1>Number Clicked : {props.num}</h1>
        <button onClick={() => props.handleIncrease()}>Increment</button>
    </div>

)  
}
export default EvenHandler;

    /*return <div>my name is {props.name}</div> 
};
export const AnotherComp = () => {
    return <div>Sakin loves buff momo</div>
};
*/