import React, {createContext} from 'react';
import reducer from '../reducers/todo.reducer'; 
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';

// here we can create 2 contexts 
export const TodosContext = createContext();
export const DispatchContext = createContext();  

const defaultValues = [{id: 1, task: 'Clean', completed: false}]; 

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer('todos', defaultValues, reducer); 
    
    return (
        // split the values into 2 contexts 
        // if it's nested, then we can access all the values from the 
        // todoscontext provider (we don't have to add dispatch context in the TodoApp)
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
            {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}


