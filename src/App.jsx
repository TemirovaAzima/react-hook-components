
import {useState} from 'react'
import TodoList from './components/TodoList.jsx'
import Profile from './components/Profile.jsx'
import ShoppingList from './components/ShoppingList.jsx'

function App() {

    return(
        <section>
          <TodoList/>
            <Profile/>
            <ShoppingList/>
        </section>

    )
}
export default App
