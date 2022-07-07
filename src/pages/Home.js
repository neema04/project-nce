import React, { useState } from "react";
import EvenHandler from "../componentss/EventHandler";
import  useStore  from '../store/store';
//import { useDisclosure } from "@chakra-ui/react/dist/declarations/src";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
const HomePage = () =>{
    const[number,setNumber] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const store = useStore ()
    console.log (store.Number)
    return(
        <div className=" w-full h-55 flex justity-centre itmes-centre">

         <EvenHandler handleIncrease={()=>store.setNumber(number+1)} num={store.number}/>
         <Button
         
         bgColor= "red"
         onClick={onOpen}>Open Modal</Button>
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This is a paragraph
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div> 
        );
 };
 export default HomePage;