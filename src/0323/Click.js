import React, {Component} from "react";
import { useState } from "react";

function Click(props) {
  const[count, setCount]=useState(0);
  return(
    <>
      <h2>추가 실습과제 1</h2>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>+1</button>
      <button onClick={()=>{setCount(count-1)}}>-1</button>
    </>
  )
}

export default Click;