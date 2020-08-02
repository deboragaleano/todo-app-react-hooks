import React, {useContext}from 'react'; 
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {DispatchContext} from './contexts/todos.context'; 

// here we pass in the function addTodo (instead of props) that was passed in as props 
export default function TodoForm() {
    const [value, handleChange, reset] = useInputState(''); 
    const dispatch = useContext(DispatchContext);

    return(
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form
                // this onSubmit should do these 3 things, preventDefault
                // passin the function addTodo and the value
                // and reset it after its sent 
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({type: 'ADD', task: value});
                    reset(); 
                }}
            >
                <TextField 
                    value={value} 
                    onChange={handleChange} 
                    label="Add New Todo" 
                    margin="normal"
                    fullWidth
                /> 
            </form>
        </Paper>
    )
}