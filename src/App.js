import './App.css';
import { useState } from "react";
import $ from "jquery"

function App() {
  //1
  // function refreshPage(){
  //   window.location.reload();
  // } 

  // let a = Math.floor(Math.random()*10)


  // let [time, setTime]=useState();

  //2
  

  //3
  // function clock(time){
  //   let hour = Math.round(time/3600)
  //   let min = Math.round((time%3600)/60)
  //   let sec = Math.round(time%60)
  //   $('#time').append(`<p>${hour}시 ${min}분 ${sec}초</p>`)
  // }

  //4
  // let [one, setOne]=useState();
  // let [two, setTwo]=useState();

  // function gugu(one, two){
  //   for(let i=one; i<=two; i++){
  //     for(let j=1; j<10; j++){
  //       let b=`${i}*${j}=${i*j}`
  //       console.log(b)
  //       $('#text').append(`<p>${b}</p>`)
  //     }
  //   }
  // } 

  //5
  // let [arr, setArr]=useState([]);
  // let [array, setArray]=useState();
  // let [aa, setAa]=useState([]);
  // let [bb, setBb]=useState([]);
  // function math(arr) {
  //   for(let i=0; i<10; i++){
  //     if (arr[i]%2!=0){
  //       aa.push(arr[i])
  //     }
  //   }

  //   for(let i=0; i<10; i++){
  //     if (arr[i]%2==0){
  //       bb.push(arr[i])
  //     }
  //   }

  //   $('#aaa').append(`<p>${aa}</p>`)
  //   $('#bbb').append(`<p>${bb}</p>`)
  // }

  //6
  // let [list, setList]=useState([]);
  // let [number, setNumber]=useState();
  // function math(list) {
  //   let listdown = [...list];
  //   list.sort((a,b)=>a-b);
  //   listdown.sort((a,b)=>b-a)

  //   $('#up').append(`<p>${list}</p>`)
  //   $('#down').append(`<p>${listdown}</p>`)
  // }


  return(
    <>
      {/* <h2>난수생성</h2>
      <button onClick={()=>{refreshPage()}}>생성</button>
      <p>{a}</p> */}

      <h2>가위바위보</h2>



      {/* <h2>시분초 출력</h2>
      <input onChange={(e)=>{setTime(e.target.value)}}/>
      <button onClick={()=>{clock(time)}}>입력</button>
      <div id='time'></div> */}


      {/* <h2>구구단 출력</h2>
      <input type='number' onChange={(e)=>{setOne(e.target.value)}}/>
      <input type='number' onChange={(e)=>{setTwo(e.target.value)}}/>
      <button onClick={()=>{gugu(one, two)}}>입력</button>
      <div id='text'></div> */}

      {/* <h2>홀짝출력</h2>
      <div className='input'>
        <input onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
        <input onClick={()=>{arr.push(array)}} onChange={(e)=>{setArray(e.target.value)}}/>
      </div>
      <button onClick={()=>{arr.push(array); math(arr)}}>입력하기</button>

      <p id='aaa'>
        홀수 :
      </p>

      <p id='bbb'>
        짝수 :
      </p> */}


      {/* <h2>정렬</h2>
      <div className='input'>
        <input onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
        <input onClick={()=>{list.push(number)}} onChange={(e)=>{setNumber(e.target.value)}}/>
      </div>
      <button onClick={()=>{list.push(number); math(list)}}>입력하기</button>

      <p id='up'>
        오름차순 :
      </p>

      <p id='down'>
        내림차순 :
      </p> */}



    </>
  );
}

export default App;
