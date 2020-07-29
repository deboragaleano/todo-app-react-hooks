import useLocalStorageState from './useLocalStorageState'; 
import {v4 as uuidv4} from 'uuid'; 

//this function doesnt have a name 
export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos); 

    //we're going to return an object and ALL of the methods 
    //First 'todos' is with reference to the state that we need to export as well 
    return {
        todos, 
        addTodo: newTodoText => {
            setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]); 
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(t => t.id !== todoId);
            setTodos(updatedTodos); 
        },
        toggleTodo: todoId => {
            const toggleTodos = todos.map(todo  => 
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo); 
            setTodos(toggleTodos)
        },
        editTodo: (id, updatedTask) => {
            const updatedTodos = todos.map(todo => 
                todo.id === id ? {...todo, task: updatedTask} : todo
                )
            setTodos(updatedTodos); 
        } 
    }
}









