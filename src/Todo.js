import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';

function Todo({id, task, completed, removeTodo, toggleTodo, editTodo}) {

    return(
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onChange={() => toggleTodo(id)}/>
            <ListItemText
                style={{textDecoration: completed ? 'line-through' : 'none'}}
                >{task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <EditIcon /> 
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <DeleteIcon /> 
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo; 