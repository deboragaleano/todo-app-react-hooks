import React, {createContext, useReducer} from 'react';
import reducer from '../reducers/todo.reducer'; 
// import useTodoState from '../hooks/useTodoState';

export const TodosContext = createContext();

const defaultValues = [{id: 1, task: 'Clean', completed: false}]; 

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(reducer, defaultValues); 
    
    return (
        // we pass in todos and dispatch in an object 
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    );
}


