import {useState} from "react";

const Todo =() =>{

    const [input,setInput]=useState('')
    const [todo,setTodo] =useState([])
    const onChangeInputHuandler =(event) => {
        setInput(event.target.value)
    }
    const onFormSubmit =(event) => {
        event.preventDefault();

    }

    const Todoslist =({todos,setTodos}) =>{
        return (
            <>
                {todos.map(todo=>(<li className="todolist" key={todo.value}>
                    <input type="text" value={todo.title} className="list" onChange={onChangeInputHuandler}/>
                    <button>delete</button><button>edit</button>

                </li>))}
            </>


        )
    }


    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                   className="task-input"
                   placeholder="add your tasks here....."
                   value={input}
                   onChange={onChangeInputHuandler}/>

            <button className="btn" type="submit" onChange={onChangeInputHuandler} >add</button>









        </form>
    )



}

export default Todo


