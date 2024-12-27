import React from 'react';

const ComponentTwo = ({decrement, setDecrement})=>{
    const decrementing= ()=>setDecrement()
    return(
        <div>
            <p>{decrement}</p>
            <button onClick={decrementing}>decrementh</button>
        </div>
    )
}
export default ComponentTwo