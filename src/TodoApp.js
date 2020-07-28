import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'; 
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList'; 
import TodoForm from './TodoForm';

function TodoApp() {
    // HERE WERE PERSISTING DATA by using localStore.getItem 
    // we're checking if there's something in LocalStorage then 
    // use that as a initial state, if not, then just show an empty array 
    const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || '[]'
    // const initialTodos = [
    //     {id: uuidv4(), task: 'Clean', completed: false},
    //     {id: uuidv4(), task: 'Eat', completed: true},
    //     {id: uuidv4(), task: 'Shower', completed: false}
    // ]
    const [todos, setTodos] = useState(initialTodos);

    //SAVING ANY UPDATES TO LOCAL STORAGE 
    //here we want to sync todos to localStorage
    //we're storing it under the key 'todos'
    //we have to stringify it because it only takes a string (and this is an object)
    // lastly, we pass in the [todos] array just to specify, if anything changes with todos
    // then do everything above or render only things related to 'todos'
    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]); 

    const addTodo = newTodoText => {
        // addTodo will take in newTodoText
        // what it should to is to call "setTodos"
        // instead of overriding everything
        // we will pass in ALL THE EXISTING TODOS in the state
        // and we will concatenate a new object like this.. 
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]); 
    }

    const removeTodo = todoId => {
        //1) filter out removed todo
        //2) call setTodos with new todos array
        const updatedTodos = todos.filter(t => t.id !== todoId);
        setTodos(updatedTodos); 
    }

    const toggleTodo = todoId => {
        //Here we're checking if the ID is the same as the one we passed in
        //then we're taking the existing TODO because we need the rest of the info
        //BUT then we set/modify completed to be !todo.completed
        // if not, then just return the todo  
        // NOTE: If we only want to change one thing (a todo object), then use the spread operatoror 
        // to get the rest of the info but update a single thing, like the completed
        const toggleTodos = todos.map(todo  => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo); 
        setTodos(toggleTodos)
    }   

    const editTodo = (id, updatedTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? {...todo, task: updatedTask} : todo
            )
        setTodos(updatedTodos); 
    }


    return(
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: '#fafafa'
        }} 
        elevation={0}>
            <AppBar color="primary" position="static" style={{ height: '64px'}}>
                <Toolbar>
                    <Typography color="inherit">Todos with Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}  
                        editTodo={editTodo}  
                    /> 
                </Grid>
            </Grid>
        </Paper>
            
    )
}

export default TodoApp; 

/*
- TodoApp (the one managing the form)  
  - TodoForm
  - TodoList
    - TodoItem

----HOOKS----

// id, task, completed 

* */