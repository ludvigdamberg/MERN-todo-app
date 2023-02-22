import axios from 'axios'


//localhost 5000 is the server connecting to MongoDB

const url = "http://localhost:5000"

const getAllToDos = (setTodo) => {
    
    axios.get(url)
    .then(({data}) => {
        console.log('data ---->', data)
        setTodo(data)
    })
}

//taking in text from the input and using /save to add it to the database
//when its added the input window is cleared
//then we fetch the database with the updated object

const addTodo = (text,setText,setTodo) => {

    axios.post(`${url}/save`,{text})
    .then((data) => {
        console.log(data)
        setText("")
        getAllToDos(setTodo)
    })

}

const updateTodo = (toDoId,text,setTodo,setText,setIsUpdating) => {

    axios.post(`${url}/update`,{_id: toDoId, text})
    .then((data) => {
        console.log(data)
        setText("")
        setIsUpdating(false)
        getAllToDos(setTodo)
    })
    .catch((err) => console.log(err))

}

const deleteTodo = (_id,setTodo) => {
    axios.post(`${url}/delete`,{ _id })
    .then(console.log("Delete successfull!"))
    getAllToDos(setTodo)
}


export {getAllToDos, addTodo, updateTodo,  deleteTodo}