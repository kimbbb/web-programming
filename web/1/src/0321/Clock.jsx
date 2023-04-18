import React, {} from "react";
import $ from "jquery";

function Clock(props) {
  let s=0
  let m=0;
  let h=0;
  let intervalID;

  function reset(){
    s=0;
    m=0;
    h=0;
    clearInterval(intervalID);
    $('#stopwatch').html('00:00:00');
  }

  function stop() {
    clearInterval(intervalID);
  }

  function start(){
    intervalID=setInterval(() => {
      s++;

      if(s>=60){
        s=0;
        m++;
        
        if(m>=60){
          m=0;
          h++;
        }
      }
      $('#stopwatch').html(`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`)

    }, 1000);
  }

  
  
  return(
    <>
      <h1 id="stopwatch">00:00:00</h1>
      <button id="start" onClick={()=>{start()}}>start</button>
      <button id="stop" onClick={()=>{stop()}}>stop</button>
      <button id="reset" onClick={()=>{reset()}}>reset</button>
    </>
  )
}

export default Clock;