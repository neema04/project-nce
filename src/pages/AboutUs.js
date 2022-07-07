//import React from "react";
//import App from "../App";
import React, { useState } from "react";
import  useStore  from '../store/store';
import { useToast } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";

const AboutUs = () => {
    const[number,setNumber] = useState(0)
    const toast = useToast()
    const store = useStore ()
    console.log (store.number)
     return (
     <div>
            <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>

     </div>
    );
}
export default AboutUs;