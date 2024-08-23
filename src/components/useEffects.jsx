import React from 'react'
import { useState, useEffect } from 'react';

function useEffects() {
    const [count,setCount]=useState(0);
    const [text,setText]=useState('');
    let increment=()=>
    {
        setCount(count+1);
    }
    let handle=(e)=>
    {
        setText(e.target.value);
    }
    useEffect(()=>
    {
        console.log(`Use Effect Runs`)
        document.title=(`button clicked for ${count} times`)
    },[])

    // componets mounting - first render of component
    // component updating - whenever components updates
    // useEffect runs at last after mounting the components
  return (
    <div>
       <h1>This is my Count value : {count} </h1>
       <input onChange={handle} type='text' value={text}></input>
       <h2>{text}</h2>
       <button onClick={increment}>Increment</button>
    </div>
  )
}

export default useEffects