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
  let [arr, setArr]=useState()
  let alist=[]
  let blist=[]

  function math(){
    let array=arr.split(' ')
    array.forEach((a) => {
      if(a%2==0){
        alist.push(a)
      }else{
        blist.push(a)
      }
    });

    console.log(alist, blist)
    $('#aaa').append(`<p>${alist}</p>`)
    $('#bbb').append(`<p>${blist}</p>`)
  }

  //6
  // let [arr, setArr]=useState();

  // function math() {
  //   let list = arr.split(' ')
  //   console.log(list)
  //   let down = [...list]
  //   list.sort((a,b)=>a-b)
  //   down.sort((a,b)=>b-a)

  //   $('#up').append(`<p>${list}</p>`)
  //   $('#down').append(`<p>${down}</p>`)

  // }

  return(
    <>
      {/* <h2>난수생성</h2>
      <button onClick={()=>{refreshPage()}}>생성</button>
      <p>{a}</p> */}


      {/* <h2>시분초 출력</h2>
      <input onChange={(e)=>{setTime(e.target.value)}}/>
      <button onClick={()=>{clock(time)}}>입력</button>
      <div id='time'></div> */}


      {/* <h2>구구단 출력</h2>
      <input type='number' onChange={(e)=>{setOne(e.target.value)}}/>
      <input type='number' onChange={(e)=>{setTwo(e.target.value)}}/>
      <button onClick={()=>{gugu(one, two)}}>입력</button>
      <div id='text'></div> */}

      <h2>홀짝출력</h2>
      <input style={{width:'300px',}} placeholder='숫자 10개 입력 띄어쓰기 사용'onChange={(e)=>{setArr(e.target.value)}}/>
      <button onClick={()=>{math()}}>입력</button>
      <p id='aaa'>
        짝수 :
      </p>

      <p id='bbb'>
        홀수 :
      </p>

      {/* <h2>정렬</h2>
      <input style={{width:'300px',}} placeholder='숫자 10개 입력 띄어쓰기 사용'onChange={(e)=>{setArr(e.target.value)}}/>
      <button onClick={()=>{math()}}>입력</button>

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
