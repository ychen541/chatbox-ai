import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?:number):T { 
    const[debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(()=>{
        //sets the debounce value everytime our value changes
        const timer = setTimeout(()=>setDebouncedValue(value),delay || 500);

        return () =>{
            clearTimeout(timer);
        }

    }, [value, delay]);

    return debouncedValue;
}