import React, {createContext} from 'react';
import useTodoState from '../hooks/useTodoState';

export const TodosContext = createContext();

const defaultValues = [{id: 1, task: 'Clean', completed: false}]; 

export function TodosProvider(props) {
    //this includes everything in useTodoState 
    // const {todos, addTodo, removeTodo... etc}
    const todoStuff = useTodoState(defaultValues); 
    
    return ( 
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    );
}


