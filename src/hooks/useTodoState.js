import useLocalStorageState from './useLocalStorageState'; 

//this function doesnt have a name 
export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos); 

    //we're going to return an object and ALL of the methods 
    //First 'todos' is with reference to the state that we need to export as well 
    return {
        todos, 
        
    }
}









