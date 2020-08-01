import React, {useContext} from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import {TodosContext} from './contexts/todos.context';

export default function TodoEdit({id, task, toggle}) {
    const {dispatch} = useContext(TodosContext); 
    const [value, handleChange, reset] = useInputState(task); 

    return(
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: 'EDIT', id: id, newTask: value});
                reset(); 
                toggle();
            }}
            style={{marginLeft:"1rem", width:'50%'}}
        >
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal"
                fullWidth
                autoFocus
            /> 
        </form>
    )
}