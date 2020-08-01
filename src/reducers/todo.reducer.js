import {v4 as uuidv4} from 'uuid'; 

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': 
            // take everything from the existing state (the todos) and put it in an array
            //instead of task: newTodoText it it's going to be action.task
            return [...state, {id: uuidv4(), task: action.task, completed: false}]
        case 'REMOVE': 
            return state.filter(t => t.id !== action.id);
        case 'TOGGLE': 
            return state.map(todo  => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
        case 'EDIT': 
            return state.map(todo => todo.id === action.id ? {...todo, task: action.newTask} : todo);
        default:
            //if none of the actions were called, then we just return state as is 
            return state;
    }
}

export default reducer; 

// {type: 'ADD', task: 'Walk the dog'}
// {type: 'REMOVE', id: '123444'}

// THIS IS WHAT WE HAD BEFORE IN USETODOSTATE

// addTodo: newTodoText => {
//     setTodos([...state, {id: uuidv4(), task: newTodoText, completed: false}]); 
// },
// removeTodo: todoId => {
//     const updatedTodos = todos.filter(t => t.id !== todoId);
//     setTodos(updatedTodos); 
// },
// toggleTodo: todoId => {
//     const toggleTodos = todos.map(todo  => 
//         todo.id === todoId ? {...todo, completed: !todo.completed} : todo); 
//     setTodos(toggleTodos)
// },
// editTodo: (id, updatedTask) => {
//     const updatedTodos = todos.map(todo => 
//         todo.id === id ? {...todo, task: updatedTask} : todo
//         )
//     setTodos(updatedTodos); 
// } 