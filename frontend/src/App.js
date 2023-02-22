import ToDo from "./components/ToDo.js";
import {getAllToDos, addTodo, updateTodo,deleteTodo} from './utils/HandleApi'
import { useState, useEffect } from "react";

function App() {

  const [Todo,setTodo] = useState([])
  const [text,setText] = useState("")
  const [isUpdating,setIsUpdating] = useState(false)
  const [toDoId,setToDoId] = useState()

useEffect(() => {

  getAllToDos(setTodo)
}, [])


//This is taken in by the component Todo where if you press the icon you start updatemode which
//changes the add button through an if statement
const updateMode = (_id,text) => {

  setIsUpdating(true)
  setText(text)
  setToDoId(_id)

}
 
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
      <div className="add" onClick={isUpdating ? ()=> updateTodo(toDoId,text,setTodo, setText,setIsUpdating) : () => addTodo(text,setText,setTodo)}>
        {isUpdating ? "Update" : "Add"}
      </div>
    </div>
    <div className="list">

    {Todo.map((item) => {
      return(
        <ToDo key={item._id} text={item.text} updateMode={() => updateMode(item._id,item.text)} deleteToDo={() => deleteTodo(item._id,setTodo) }/>
      )
    })}
    </div>
      
    </div>
  );
}

export default App;
