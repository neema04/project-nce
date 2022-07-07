import React from 'react';
function A(props){
    return (
    <div className="text-pink-500">
        {props.children}
        {props.string}
    </div>
    )

}
export default A;