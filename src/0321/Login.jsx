import React from "react";
import { useState } from "react";
import styled from "styled-components";
import $ from 'jquery'

const Join = styled.input`
`

function Login(props) {
  let [id, setId] = useState();
  let [password, setPassword] = useState();

  function check(id, pass) {

    var eng = /^[a-zA-Z]*$/;

    if(id.length<5 || id.length>10){
      alert('아이디는 5~10자 이내입니다.');
    }
    else if(pass.length<4 || pass.length>16){
      alert('비밀번호는 4~16자 이내입니다.');
    }
    
    if(eng.test(id[0])){
    }
    else{
      alert('아이디는 영문으로 시작되어야합니다.')
    }

    if(eng.test(pass[0])){
    }
    else{
      alert('비밀번호는 영문으로 시작되어야합니다.')
    }
  }

  let [font,setFont]=useState();
  font=parseInt($('body').css('font-size'));


  function small() {
    font-=1
    console.log(font)
    $('*').css('font-size', `${font}px`)
  }

  function big() {
    font+=1
    console.log(font)
    $('*').css('font-size', `${font}px`)
  }

  return(
    <>
      <Join placeholder="id" type='text' tofocus="autofocus" onChange={(e)=>{
        setId(e.target.value)
      }}/>
      <Join placeholder="password" type='password' tofocus="autofocus" onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      <button onClick={()=>{check(id, password)}}>가입</button>
      <button id='mini' onClick={()=>{small()}}>폰트 작게</button>
      <button id='big' onClick={()=>{big()}}>폰트 크게</button>
    </>
  )
}

export default Login;