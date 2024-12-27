import ComponentTwo from "./ComponentTwo.jsx";


export const ComponentOne =({number, setNumber})=>{
    const increment = ()=> setNumber()
    return(
        <div>
            <p>{number}</p>
            <button onClick={increment}>increment</button>
            <ComponentTwo/>

        </div>
    )

}