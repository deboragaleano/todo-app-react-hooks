import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultValue) {
    const [state, setState] = useState(() => {
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

    return [state, setState]; 
}

export default useLocalStorageState; 
