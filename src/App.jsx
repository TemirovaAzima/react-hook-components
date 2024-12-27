import {ComponentOne} from './components/ComponentOne.jsx'
import ComponentTwo from './components/ComponentTwo.jsx'
import {useState} from 'react'

function App() {
     const [number, setNumber]= useState(0);
     const [decrement, setDecrement] = useState(0)

    return(
        <section>
            <ComponentOne number={number} setNumber={()=>setNumber(number+1)} className={'decrement'}/>
            <ComponentTwo decrement={decrement} setDecrement={()=>setDecrement(decrement-1)} className={'decrement'}/>
        </section>

    )
}
export default App
