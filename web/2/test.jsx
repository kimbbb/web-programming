import React from "react";

function Test(props) {
  console.log(document.getElementById('ten'))
  return(
    <>
    <input id='ten' placeholder="10개의 숫자를 입력하시오"/>
    </>
  );
}

export default Test;