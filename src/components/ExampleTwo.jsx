import {useState} from 'react';

export const ExampleTwo = ()=>{
    const [randomNumber, setRandomNumber]= useState(()=>
        Math.floor(Math.random()*100)
    );

    const generateNewRandomNumber = ()=>{
        // const newNumber = Math.floor(Math.random()*100)
        // setRandomNumber(newNumber)
        setRandomNumber(Math.floor(Math.random()*100));
    }

    return(
        <div>
            <h1>Random Number : {randomNumber}</h1>
            <button onClick={generateNewRandomNumber}>Create a new random number</button>
        </div>
    )

}

