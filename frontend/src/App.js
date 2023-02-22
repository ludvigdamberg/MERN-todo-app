import ToDo from "./components/ToDo.js";
import {getAllToDos, addTodo} from './utils/HandleApi'
import { useState, useEffect } from "react";

function App() {

  const [Todo,setTodo] = useState([])
  const [text,setText] = useState("")


useEffect(() => {

  getAllToDos(setTodo)
}, [])

  return (
    <div className="App">
    
    <div className="container">
      <h1>ToDo App</h1>

      <div className="top">
        <input 
        type="text" 
        placeholder="Add a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      </div> 
      <div className="add" onClick={() => addTodo(text,setText,setTodo)}>ADD</div>
    </div>
    <div className="list">

    {Todo.map((item) => {
      return(
        <ToDo key={item._id} text={item.text}/>
      )
    })}
    </div>
      
    </div>
  );
}

export default App;
