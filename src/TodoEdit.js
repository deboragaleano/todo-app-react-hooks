import React, {useContext} from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import {DispatchContext} from './contexts/todos.context';

export default function TodoEdit({id, task, toggle}) {
    //dispatch is not an object anymore, so we just grab dispatch from the context
    const dispatch = useContext(DispatchContext); 
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