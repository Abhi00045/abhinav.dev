import { useEffect, useState } from "react";

export const LocalTime = () => {

    const[Time , setLocalTime]=useState(new Date())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setLocalTime(new Date())
        },1000)
        return () => clearInterval(interval)    
    },[])


    return(
        <>
        <p>
            {Time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
        </p>
        </>
    )
}