import React from 'react'; 
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {

    return(
       <Paper>
           <List>
           {todos.map(todo => (
                <Todo 
                    id={todo.id}
                    task={todo.task} 
                    key={todo.id} 
                    completed={todo.completed}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                />
            ))}
            </List>
       </Paper>
    );
}

export default TodoList; 