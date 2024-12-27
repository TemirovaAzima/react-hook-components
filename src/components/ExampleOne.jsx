import {useState} from 'react';

const ExampleOne = ()=>{
    const [number, setNumber]= useState(()=>{
        const firstValue = 10
        return firstValue
    });
    const increment = ()=>{
        setNumber((prevState)=>prevState+1)
    }
    return(
        <div>
            ExampleOne
            <h1>Number : {number}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default ExampleOne