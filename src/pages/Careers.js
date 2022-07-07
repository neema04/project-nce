import React, { useState } from "react";
//import App from "../App";
import { Button, ButtonGroup } from '@chakra-ui/react'
const Careers = () => {
    const [value,setValue]= useState(0)
    function handleClick1(){
setValue(value+1)

    }
    function handleClick2(){
        setValue(value-1)
    }
    return (
     <div>

<Button colorScheme='teal' size='md' onClick={handleClick2}>decrement</Button>
<h1>{value}</h1>
<Button colorScheme='teal' size='md' onClick={handleClick1}>increment</Button>
     </div>
    );
};
export default Careers;