import React, {useEffect, useState} from 'react';

const useLocalStorageCart = (key, initialValue) => {
    const[value, setValue] = useState(()=>{
        const jsonValue =localStorage.getItem(key);
        if(jsonValue !== null) {
            return JSON.parse(jsonValue);
        }else{
            return initialValue;
        }

    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);
    return [value, setValue];
};

export default useLocalStorageCart;