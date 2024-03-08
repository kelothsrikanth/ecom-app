import React, {useEffect}  from "react";
import {userState} from 'react';

export default function App5() {
    const [count, setCount] = userState(0);
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
