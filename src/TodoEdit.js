import React from 'react'; 
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

export default function TodoEdit({id, task, editTodo, toggle}) {
    const [value, handleChange, reset] = useInputState(task); 

    return(
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                reset(); 
                toggle();
            }}
        >
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal"
                fullWidth
            /> 
        </form>
    )
}