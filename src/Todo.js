import React, {useContext} from 'react';
import useToggle from './hooks/useToggle'; 
import TodoEdit from './TodoEdit'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import {DispatchContext} from './contexts/todos.context';

function Todo({id, task, completed}) {
    // here we just pass in the dispatch function to use for the REMOVE / TOGGLE 
    const dispatch = useContext(DispatchContext); 
    //the value useToggle defaults to false anyway 
    const [isEditing, toggle] = useToggle(); 
    
    return(
        <ListItem>
            {isEditing ? <TodoEdit task={task} id={id} toggle={toggle} /> :
            <>
                <Checkbox tabIndex={-1} checked={completed} onChange={() => dispatch({type: 'TOGGLE', id: id})}/>
                <ListItemText
                    style={{textDecoration: completed ? 'line-through' : 'none'}}
                    >{task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={toggle}>
                        <EditIcon /> 
                    </IconButton>
                    <IconButton aria-label="Delete" onClick={() => dispatch({type: 'REMOVE', id: id})}>
                        <DeleteIcon /> 
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Todo; 