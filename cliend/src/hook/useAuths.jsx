import { useEffect, useState } from "react";

export const useAuths = ()=>{
    // const count = 0;
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        setCounter(counter + 1);
    },[]);

    return counter;
}