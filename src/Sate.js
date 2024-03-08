import React, {useEffect}  from "react";
import {useState} from 'react';

export default function Sate() {
    const [count, setCount] = useState(0);
    console.log("component loaded");
  return (
    <>
    <button onClick={()=> setCount((prevState)=> prevState + 1)}>
    onClick
    </button>
    <span>{count}</span>
    </>
  );
}
