import { useReducer, useEffect } from 'react';

// here the 3rd argument is a function that will be used to establish 
// the initial state (to see if there's anything in the local storage)
// so whaever we return from this function is what will be stored initially in state
function useLocalStorageReducer(key, defaultValue, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultValue, () => {
        let val; 
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
        }
        catch(e) {
            val = defaultValue; 
        }
        return val;
    }) 

    // we only want to update the local storage if the state changes
    // so if 'todos' changes, then we're goign to 'setItem' to the key todos 
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return [state, dispatch]; 
}

export {useLocalStorageReducer}; 
