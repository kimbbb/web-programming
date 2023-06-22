import React, { useState } from "react";

function Test(props) {
  let [num, setNum]= useState()
  let li=[1,2]
  return(
    <>
    <input id='ten' placeholder="10개의 숫자를 쉼표로 구분하여 입력하시오" onChange={(e)=>{setNum(e.target.value)}}/>
    <button onClick={()=>{
      num=num.split(',')
      console.log(num)
      num.forEach((a) => {
        if(a==1 || a==2){
          li.push(a)
        }
        for(let i = 2; i<a; i++){
          if(a%i===0){
            li.push(a)
            break
          }
        }
      });

      let dif = num.filter(x => !li.includes(x));
      document.getElementById('print').append(dif)
      }}>클릭</button>

      <p id='print'/>
    </>
  );
}

export default Test;