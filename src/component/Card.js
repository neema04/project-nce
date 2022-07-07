import React from "react";
 import Dog from '../image/dog.jpg';
function Card(props) {
    return (
        <div className="max-w-xs rounded-2xl text-white overflow-hidden border ">
        <div className=" bg-blue-500 p-5">
        <p>Appointment Request</p>
        <h1 className=" text lg font-bold">17th Jun 2022</h1>
        </div>
        <div className="p-5 text-black flex">
        <img src={Dog} alt="dog" className="h-16 w-16 rounded-2xl"/>
        <h1 className="text-xl ml-8 font-semibold">{props.name}, MD</h1>
        </div>
    <div className="p-5 flex justify-between">
    <button className="px-10 py-3 bg-blue-500 rounded-2xl">Accept</button>
    <button className="px-10 py-3 bg-gray-500 rounded-2xl">Decline</button>
    </div>
    </div>
        )
}
export default Card;