import React, { useState } from 'react'

export default iniValue => {
    const [value, setValue] = useState(iniValue);

    const handleChange = (e) => {
        setValue(e.target.value); 
    }

    const reset = () => {
        setValue(''); 
    }
    return [value, handleChange, reset]; 
}



