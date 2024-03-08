import React from 'react'
import {useState} from "react";
import { useEffect } from 'react';

function Cricket() { 
 
    
    const [run,setRuns] = useState(0);
    const [wicket,setWickets] = useState(0);
    console.log("component loaded");
    useEffect(()=> {
        console.log("Better luck next Time")
    },[wicket]);
        return (
            <>
            <button onClick={()=> setRuns((pervState) => pervState + 1)}>
                Runs {run}
            </button>
            <button onClick={()=> setWickets((pervState1) => pervState1 + 1)}>Wickets{wicket}
            </button>
            
            </>
  )
}

export default Cricket